const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const {execFileSync} = require("child_process");

const defaultAgentRoot = path.resolve(__dirname, "..", "..");

function loadDotEnv(root) {
  const envPath = path.join(root, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        return;
      }

      const separatorIndex = trimmed.indexOf("=");
      if (separatorIndex < 1) {
        return;
      }

      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    });
}

loadDotEnv(defaultAgentRoot);

const defaultTargetRepo = defaultAgentRoot;
const repoRoot = path.resolve(process.env.DOCS_OWNER_TARGET_REPO || defaultTargetRepo);
const sourceRepo = path.resolve(
  process.env.DOCS_OWNER_SOURCE_REPO || "D:/git/GroupDocs.Viewer-Docs"
);
const product = process.env.DOCS_OWNER_PRODUCT || "viewer";
const platform = process.env.DOCS_OWNER_PLATFORM || "net";
const version = process.env.DOCS_OWNER_VERSION || "v26.5";
const sourceDocsRelative =
  process.env.DOCS_OWNER_SOURCE_DOCS || path.join("net", "getting-started");
const sourceDocs = resolvePath(sourceRepo, sourceDocsRelative);
const targetDocsRelative =
  process.env.DOCS_OWNER_TARGET_DOCS_ROOT ||
  path.join("docs", "total", platform, product, version, "getting-started");
const targetDocs = resolvePath(repoRoot, targetDocsRelative);
const targetStaticRoot = resolvePath(
  repoRoot,
  process.env.DOCS_OWNER_TARGET_STATIC_ROOT ||
    path.join("static", platform, product, version)
);
const docsUrlPrefix =
  process.env.DOCS_OWNER_DOCS_URL_PREFIX || `/${platform}/${product}/${version}`;
const docIdBase =
  process.env.DOCS_OWNER_DOC_ID_BASE ||
  targetDocsRelative
    .replace(/\\/g, "/")
    .replace(/^docs\//, "")
    .replace(/\/+$/, "");
const sourceRepoName =
  process.env.DOCS_OWNER_SOURCE_REPO_NAME || path.basename(sourceRepo);
const sourcePathPrefix = path.relative(sourceRepo, sourceDocs).replace(/\\/g, "/");

function resolvePath(base, value) {
  return path.isAbsolute(value) ? path.resolve(value) : path.resolve(base, value);
}

function readText(file) {
  return fs.readFileSync(file, "utf8");
}

function writeText(file, text) {
  fs.mkdirSync(path.dirname(file), {recursive: true});
  fs.writeFileSync(file, text, "utf8");
}

function copyFile(source, target) {
  if (!fs.existsSync(source)) {
    return false;
  }
  fs.mkdirSync(path.dirname(target), {recursive: true});
  fs.copyFileSync(source, target);
  return true;
}

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir, {withFileTypes: true})
    .flatMap((entry) => {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listMarkdownFiles(absolute);
      }
      return entry.isFile() && entry.name.endsWith(".md") ? [absolute] : [];
    })
    .sort();
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return {data: {}, body: text};
  }

  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const property = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!property) {
      return;
    }
    let value = property[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[property[1]] = value;
  });

  return {data, body: text.slice(match[0].length)};
}

function yamlValue(value) {
  if (typeof value === "number") {
    return String(value);
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return JSON.stringify(String(value));
}

function stringifyFrontmatter(data) {
  const lines = Object.entries(data).map(
    ([key, value]) => `${key}: ${yamlValue(value)}`
  );
  return `---\n${lines.join("\n")}\n---\n\n`;
}

function slugify(value) {
  const slug = value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "tab";
}

function mdFileTargetName(file) {
  return path.basename(file) === "_index.md"
    ? "index.mdx"
    : `${path.basename(file, ".md")}.mdx`;
}

function targetSlugForFile(file) {
  const relative = path.relative(sourceDocs, file).replace(/\\/g, "/");
  const withoutExt = relative.replace(/\.md$/, "");
  const route =
    withoutExt === "_index"
      ? "getting-started"
      : `getting-started/${withoutExt.replace(/\/_index$/, "")}`;
  return `${docsUrlPrefix}/${route}/`;
}

function createRouteMap(files) {
  const routeMap = new Map();
  const stemMap = new Map();

  files.forEach((file) => {
    const {data} = parseFrontmatter(readText(file));
    const targetSlug = targetSlugForFile(file);
    const stem = path.basename(file, ".md");

    stemMap.set(stem, targetSlug);
    if (stem !== "_index") {
      stemMap.set(`${stem}.md`, targetSlug);
    }

    if (data.url) {
      routeMap.set(normalizeRouteKey(data.url), targetSlug);
      routeMap.set(normalizeRouteKey(`/${data.url}`), targetSlug);
    }
  });

  return {routeMap, stemMap};
}

function normalizeRouteKey(value) {
  return value
    .replace(/^https?:\/\/docs\.groupdocs\.com\//, "/")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "")
    .replace(/\/_index\.md$/, "")
    .replace(/\.md$/, "");
}

function resolveRef(refValue, maps) {
  const normalized = normalizeRouteKey(refValue);
  if (maps.routeMap.has(normalized)) {
    return maps.routeMap.get(normalized);
  }

  const stem = path.basename(normalized);
  if (maps.stemMap.has(stem)) {
    return maps.stemMap.get(stem);
  }

  return rewriteInternalUrl(`/${normalized}`);
}

function splitUrl(url) {
  const match = url.match(/^([^?#]*)([?#].*)?$/);
  return {
    pathname: match ? match[1] : url,
    suffix: match && match[2] ? match[2] : ""
  };
}

function rewriteInternalUrl(url) {
  if (!url.startsWith("/viewer/net/")) {
    return url;
  }

  const {pathname, suffix} = splitUrl(url);
  if (pathname.startsWith("/viewer/net/images/")) {
    return pathname.replace("/viewer/net/images/", `${docsUrlPrefix}/images/`) + suffix;
  }
  if (pathname.startsWith("/viewer/net/sample-files/")) {
    return (
      pathname.replace("/viewer/net/sample-files/", `${docsUrlPrefix}/sample-files/`) +
      suffix
    );
  }

  const rest = pathname
    .replace(/^\/viewer\/net\/?/, "")
    .replace(/\/_index\.md$/, "")
    .replace(/\.md$/, "")
    .replace(/^getting-started\//, "getting-started/");

  return `${docsUrlPrefix}/${rest.replace(/^\/+/, "").replace(/\/+$/, "")}/${suffix}`;
}

function copyReferencedAssets(body) {
  const seen = new Set();
  const assetPattern = /(?:src=|href=|]\()["']?(\/viewer\/net\/(?:images|sample-files)\/[^"')\s>]+)/g;
  let match;

  while ((match = assetPattern.exec(body))) {
    const originalUrl = match[1];
    if (seen.has(originalUrl)) {
      continue;
    }
    seen.add(originalUrl);

    const relative = originalUrl.replace("/viewer/net/", "");
    const source = path.join(sourceRepo, "net", relative.replace(/\//g, path.sep));
    const target = path.join(targetStaticRoot, relative.replace(/\//g, path.sep));
    copyFile(source, target);
  }
}

function convertShortcodes(body, maps) {
  body = body.replace(
    /\{\{<\s*ref\s+"([^"]+)"\s*>\}\}/g,
    (_, refValue) => resolveRef(refValue, maps)
  );

  body = body.replace(
    /\{\{<\s*alert\s+style="([^"]+)"\s*>\}\}([\s\S]*?)\{\{<\s*\/alert\s*>\}\}/g,
    (_, style, content) => `\n:::${style}\n${content.trim()}\n:::\n`
  );

  body = body.replace(
    /\{\{<\s*alert\s+style="([^"]+)"\s*>\}\}/g,
    (_, style) => `\n:::${style}\n`
  );
  body = body.replace(/\{\{\s*<\s*\/\s*alert\s*>\s*\}\}/g, "\n:::\n");
  body = body.replace(/\{\{\s*<\/\s*alert\s*>\s*\}\}/g, "\n:::\n");

  const lines = body.split(/\r?\n/);
  const converted = [];
  const tabsStack = [];

  lines.forEach((line) => {
    let match = line.match(/^\s*\{\{<\s*tabs\s+"([^"]+)"\s*>\}\}\s*$/);
    if (match) {
      tabsStack.push({groupId: match[1], tabCount: 0});
      converted.push("");
      converted.push(`<Tabs groupId="${match[1]}">`);
      converted.push("");
      return;
    }

    if (/^\s*\{\{<\s*\/tabs\s*>\}\}\s*$/.test(line)) {
      tabsStack.pop();
      converted.push("");
      converted.push("</Tabs>");
      converted.push("");
      return;
    }

    match = line.match(/^\s*\{\{<\s*tab\s+"([^"]+)"\s*>\}\}\s*$/);
    if (match) {
      const group = tabsStack[tabsStack.length - 1];
      const isDefault = group && group.tabCount === 0;
      if (group) {
        group.tabCount += 1;
      }
      converted.push("");
      converted.push(
        `<TabItem value="${slugify(match[1])}" label="${match[1]}"${
          isDefault ? " default" : ""
        }>`
      );
      converted.push("");
      return;
    }

    if (/^\s*\{\{<\s*\/tab\s*>\}\}\s*$/.test(line)) {
      converted.push("");
      converted.push("</TabItem>");
      converted.push("");
      return;
    }

    if (/^\s*\{\{<\s*\/?tab-text\s*>\}\}\s*$/.test(line)) {
      return;
    }

    match = line.match(/^\s*\{\{<\s*table-filter\s+(.+?)\s*>\}\}\s*$/);
    if (match) {
      const attrs = Object.fromEntries(
        Array.from(match[1].matchAll(/([A-Za-z0-9_-]+)="([^"]*)"/g)).map(
          (attrMatch) => [attrMatch[1], attrMatch[2]]
        )
      );
      const forumLink = applyExternalLinkPolicy(attrs.forumUrl || "", "");
      converted.push("");
      converted.push(
        `<TableFilter placeholder="${attrs.placeholder || ""}" forumUrl="${forumLink.href}" />`
      );
      converted.push("");
      return;
    }

    converted.push(line);
  });

  return converted.join("\n");
}

function rewriteLinks(body) {
  body = body.replace(
    /(^|[\s("'=])(\/viewer\/net\/[^"')\s>]+)/g,
    (_, prefix, url) => `${prefix}${rewriteInternalUrl(url)}`
  );

  const seenProductExitUrls = new Set();

  body = body.replace(
    /<a\b([^>]*?)href=["'](https?:\/\/[^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi,
    (full, before, href, after, text) => {
      const link = applyExternalLinkPolicy(href, text);
      if (link.dedupe && seenProductExitUrls.has(link.href)) {
        return link.text;
      }
      if (link.dedupe) {
        seenProductExitUrls.add(link.href);
      }
      const attrs = `${before}href="${link.href}"${after}`
        .replace(/\srel=["'][^"']*["']/i, "")
        .replace(/\starget=["'][^"']*["']/i, "");
      return `<a${attrs}${externalLinkAttrs(link.href)}>${link.text}</a>`;
    }
  );

  body = body.replace(/<((https?:\/\/)[^>\s]+)>/g, (_, href) => {
    const link = applyExternalLinkPolicy(href, href);
    if (link.dedupe && seenProductExitUrls.has(link.href)) {
      return link.text;
    }
    if (link.dedupe) {
      seenProductExitUrls.add(link.href);
    }
    return `<a href="${link.href}"${externalLinkAttrs(link.href)}>${link.text}</a>`;
  });

  body = body.replace(
    /(^|[^!])\[([^\]\n]+)\]\((https?:\/\/[^)\s]+)\)/g,
    (full, prefix, text, href) => {
      const link = applyExternalLinkPolicy(href, text);
      if (link.dedupe && seenProductExitUrls.has(link.href)) {
        return `${prefix}${link.text}`;
      }
      if (link.dedupe) {
        seenProductExitUrls.add(link.href);
      }
      return `${prefix}<a href="${link.href}"${externalLinkAttrs(link.href)}>${link.text}</a>`;
    }
  );

  return body;
}

function applyExternalLinkPolicy(href, text) {
  const normalizedHref = href.trim();
  const link = {
    href: normalizedHref,
    text,
    dedupe: isProductExitUrl(normalizedHref)
  };

  if (/^https:\/\/products\.groupdocs\.app\/viewer\/total\/?$/i.test(normalizedHref)) {
    link.href = "https://products.conholdate.app/viewer";
    link.text = text.replace(/GroupDocs\.Viewer App/g, "Conholdate.Viewer App");
    link.dedupe = true;
    return link;
  }

  if (/^https:\/\/forum\.groupdocs\.com(?:\/.*)?$/i.test(normalizedHref)) {
    link.href = "https://forum.conholdate.com/";
    link.dedupe = true;
    return link;
  }

  return link;
}

function isProductExitUrl(href) {
  try {
    const url = new URL(href);
    return [
      "products.groupdocs.com",
      "products.groupdocs.app",
      "releases.groupdocs.com"
    ].includes(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

function externalLinkAttrs(href) {
  if (isDocsConholdateUrl(href)) {
    return "";
  }
  if (isConholdateUrl(href)) {
    return ' target="_blank"';
  }
  return ' target="_blank" rel="nofollow noopener noreferrer"';
}

function isDocsConholdateUrl(href) {
  try {
    const url = new URL(href);
    return url.hostname.toLowerCase() === "docs.conholdate.com";
  } catch {
    return false;
  }
}

function isConholdateUrl(href) {
  try {
    const hostname = new URL(href).hostname.toLowerCase();
    return hostname === "conholdate.com" ||
      hostname.endsWith(".conholdate.com") ||
      hostname === "conholdate.app" ||
      hostname.endsWith(".conholdate.app");
  } catch {
    return false;
  }
}

function convertRawHtmlForMdx(body) {
  return body
    .replace(/\bclass=/g, "className=")
    .replace(/\bxlink:href=/g, "xlinkHref=")
    .replace(/<br>/g, "<br />");
}

function isTableSeparator(line) {
  if (!line.trim().startsWith("|")) {
    return false;
  }
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
}

function splitTableRow(line) {
  let value = line.trim();
  if (value.startsWith("|")) {
    value = value.slice(1);
  }
  if (value.endsWith("|")) {
    value = value.slice(0, -1);
  }
  return value.split("|").map((cell) => cell.trim());
}

function formatTableRow(cells) {
  return `| ${cells.join(" | ")} |`;
}

function normalizeMarkdownTables(body) {
  const lines = body.split(/\r?\n/);
  const normalized = [];

  for (let i = 0; i < lines.length; i += 1) {
    if (
      i + 1 < lines.length &&
      lines[i].trim().startsWith("|") &&
      isTableSeparator(lines[i + 1])
    ) {
      const tableLines = [lines[i], lines[i + 1]];
      i += 2;

      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      i -= 1;

      const rows = tableLines.map(splitTableRow);
      const headerColumnCount = rows[0].length;
      const maxColumnCount = Math.max(...rows.map((row) => row.length));
      const extraColumnsAreEmpty = rows
        .filter((_, rowIndex) => rowIndex !== 1)
        .every((row) =>
          row
            .slice(headerColumnCount)
            .every((cell) => cell.trim().length === 0)
        );
      const columnCount =
        headerColumnCount < maxColumnCount && extraColumnsAreEmpty
          ? headerColumnCount
          : maxColumnCount;
      const fixedRows = rows.map((row, rowIndex) => {
        const fixed = row.slice(0, columnCount);
        while (fixed.length < columnCount) {
          fixed.push("");
        }
        if (rowIndex === 0) {
          for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
            if (!fixed[columnIndex]) {
              fixed[columnIndex] = `Column ${columnIndex + 1}`;
            }
          }
        }
        return fixed;
      });

      normalized.push(...fixedRows.map(formatTableRow));
      continue;
    }

    normalized.push(lines[i]);
  }

  return normalized.join("\n");
}

function importsFor(body) {
  const imports = [];
  if (body.includes("<Tabs")) {
    imports.push('import Tabs from "@theme/Tabs";');
    imports.push('import TabItem from "@theme/TabItem";');
  }
  if (body.includes("<TableFilter")) {
    imports.push('import TableFilter from "@site/src/components/TableFilter";');
  }
  return imports.length ? `${imports.join("\n")}\n\n` : "";
}

function sourceCommit() {
  try {
    return execFileSync(
      "git",
      [
        "-c",
        `safe.directory=${sourceRepo.replace(/\\/g, "/")}`,
        "rev-parse",
        "HEAD"
      ],
      {cwd: sourceRepo, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"]}
    ).trim();
  } catch {
    return "unknown";
  }
}

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function convertFile(file, maps, commit) {
  const raw = readText(file);
  const {data, body} = parseFrontmatter(raw);
  const relative = path.relative(sourceDocs, file).replace(/\\/g, "/");
  const targetFile = path.join(
    targetDocs,
    path.dirname(relative),
    mdFileTargetName(file)
  );
  const slug = targetSlugForFile(file);
  const convertedBody = normalizeMarkdownTables(
    convertRawHtmlForMdx(rewriteLinks(convertShortcodes(body, maps)))
  );
  const frontmatter = stringifyFrontmatter({
    title: data.title || data.linkTitle || path.basename(file, ".md"),
    sidebar_label: data.linkTitle || data.title || path.basename(file, ".md"),
    sidebar_position: Number(data.weight || 100),
    description: data.description || "",
    slug,
    product,
    platform,
    version,
    source_repo: sourceRepoName,
    source_path: `${sourcePathPrefix}/${relative}`.replace(/^\/+/, ""),
    source_commit: commit,
    source_sha256: sha256(raw)
  });

  const framing =
    ":::info\nGroupDocs.Viewer for .NET is included in Conholdate.Total for .NET.\n:::\n\n";

  writeText(targetFile, `${frontmatter}${importsFor(convertedBody)}${framing}${convertedBody}`);
}

function writeCategoryFiles() {
  writeText(
    path.join(targetDocs, "_category_.json"),
    `${JSON.stringify(
      {
        label: "Getting started",
        position: 2,
        link: {
          type: "doc",
          id: `${docIdBase}/index`
        }
      },
      null,
      2
    )}\n`
  );
}

function run() {
  if (!fs.existsSync(sourceDocs)) {
    throw new Error(`Source docs folder does not exist: ${sourceDocs}`);
  }

  fs.rmSync(targetDocs, {recursive: true, force: true});
  fs.rmSync(targetStaticRoot, {recursive: true, force: true});

  const files = listMarkdownFiles(sourceDocs);
  const maps = createRouteMap(files);
  const commit = sourceCommit();

  files.forEach((file) => {
    const raw = readText(file);
    copyReferencedAssets(raw);
    convertFile(file, maps, commit);
  });

  copyFile(
    path.join(sourceRepo, "net", "images", "check-blue.png"),
    path.join(targetStaticRoot, "images", "check-blue.png")
  );

  writeCategoryFiles();

  console.log(`Imported ${files.length} pages from ${sourceDocs}`);
  console.log(`Generated docs: ${path.relative(repoRoot, targetDocs)}`);
  console.log(`Generated assets: ${path.relative(repoRoot, targetStaticRoot)}`);
}

run();
