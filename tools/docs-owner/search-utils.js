const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function listFiles(dir, extension) {
  return fs
    .readdirSync(dir, {withFileTypes: true})
    .flatMap((entry) => {
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listFiles(absolute, extension);
      }
      return entry.isFile() && entry.name.endsWith(extension) ? [absolute] : [];
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

function plainTextFromMdx(body) {
  return body
    .replace(/^import\s+.+?;\s*$/gm, "")
    .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(
      /GroupDocs\.Viewer for \.NET is included in Conholdate\.Total for \.NET\./g,
      ""
    )
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/^:::\w*\s*$/gm, "")
    .replace(/^:::\s*$/gm, "")
    .replace(/<\/?(Tabs|TabItem)\b[^>]*>/g, "")
    .replace(/<TableFilter\b[^>]*\/>/g, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\r\n/g, "\n");
}

function cleanInlineMarkdown(text) {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function compactText(text) {
  return text
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

function splitLongText(text, maxLength) {
  if (text.length <= maxLength) {
    return [text];
  }

  const paragraphs = text.split(/\n{2,}|\n(?=#{1,6}\s)/);
  const chunks = [];
  let current = "";

  paragraphs.forEach((paragraph) => {
    const next = current ? `${current}\n\n${paragraph}` : paragraph;
    if (next.length <= maxLength) {
      current = next;
      return;
    }
    if (current) {
      chunks.push(current);
    }
    current = paragraph;
  });

  if (current) {
    chunks.push(current);
  }

  return chunks.flatMap((chunk) => {
    if (chunk.length <= maxLength) {
      return [chunk];
    }
    const pieces = [];
    for (let start = 0; start < chunk.length; start += maxLength) {
      pieces.push(chunk.slice(start, start + maxLength));
    }
    return pieces;
  });
}

function chunksFromMdxFile(file, docsRootConfig, siteBaseUrl) {
  const docsRoot =
    typeof docsRootConfig === "string" ? docsRootConfig : docsRootConfig.root;
  const rootConfig =
    typeof docsRootConfig === "string" ? {root: docsRoot} : docsRootConfig;
  const raw = fs.readFileSync(file, "utf8");
  const {data, body} = parseFrontmatter(raw);
  const text = plainTextFromMdx(body);
  const lines = text.split(/\n/);
  const relativePath = path.relative(docsRoot, file).replace(/\\/g, "/");
  const docPath = rootConfig.targetRepo
    ? path.relative(rootConfig.targetRepo, file).replace(/\\/g, "/")
    : relativePath;
  const pathParts = relativePath.split("/");
  const metadataPathParts = searchablePathParts(docPath, relativePath);
  const title = data.title || data.sidebar_label || path.basename(file, ".mdx");
  const urlPath = data.slug || urlPathFromDocPath(relativePath, rootConfig);
  const url = new URL(urlPath, siteBaseUrl).toString();
  const locale = rootConfig.locale || data.locale || "en";
  const platform =
    data.platform || rootConfig.platform || pathPlatform(metadataPathParts);
  const product = data.product || metadataPathParts[0] || "";
  const totalVersion = rootConfig.totalVersion || data.total_version || "current";
  const productVersion =
    data.included_product_version || data.product_version || data.version || "";
  const section = metadataPathParts[1] || "";
  const chunks = [];
  let headingStack = [title];
  let sectionHeading = title;
  let sectionLines = [];

  function flushSection() {
    const content = compactText(sectionLines.join("\n"));
    sectionLines = [];
    if (!content || content.length < 40) {
      return;
    }

    const headingPath = headingStack.join(" > ");
    splitLongText(content, 1800).forEach((piece, index) => {
      const chunkText = `${headingPath}\n\n${piece}`;
      const idSource = `${docPath}#${locale}#${totalVersion}#${headingPath}#${index}`;
      chunks.push({
        id: deterministicUuid(idSource),
        text: chunkText,
        payload: {
          text: chunkText,
          title,
          heading: sectionHeading,
          heading_path: headingPath,
          url,
          url_path: urlPath,
          locale,
          platform,
          product,
          section,
          totalVersion,
          total_version: totalVersion,
          productVersion,
          product_version: productVersion,
          included_product_version: productVersion,
          version: totalVersion,
          source_path: data.source_path || relativePath,
          source_repo: data.source_repo || "",
          source_commit: data.source_commit || "",
          source_sha256: data.source_sha256 || "",
          doc_path: docPath,
          relative_path: relativePath,
          docs_root_source: rootConfig.source || "",
          docs_root_path: rootConfig.root || docsRoot
        }
      });
    });
  }

  lines.forEach((line) => {
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushSection();
      const level = heading[1].length;
      sectionHeading = cleanInlineMarkdown(heading[2]);
      headingStack = headingStack.slice(0, level);
      headingStack[level - 1] = sectionHeading;
      if (headingStack[0] !== title) {
        headingStack.unshift(title);
      }
      return;
    }

    sectionLines.push(line);
  });

  flushSection();
  return chunks;
}

function pathPlatform(pathParts) {
  return pathParts.includes("net") ? "net" : "";
}

function searchablePathParts(docPath, relativePath) {
  const normalizedDocPath = docPath.replace(/\\/g, "/");
  const knownRoots = [
    /^docs-net\//,
    /^net_versioned_docs\/version-[^/]+\//,
    /^i18n\/[^/]+\/docusaurus-plugin-content-docs-net\/current\//,
    /^i18n\/[^/]+\/docusaurus-plugin-content-docs-net\/version-[^/]+\//
  ];
  const withoutRoot = knownRoots.reduce(
    (value, pattern) => value.replace(pattern, ""),
    normalizedDocPath
  );

  if (withoutRoot !== normalizedDocPath) {
    return withoutRoot.split("/");
  }
  return relativePath.split("/");
}

function urlPathFromDocPath(relativePath, rootConfig) {
  const routeBasePath = rootConfig.routeBasePath || "/";
  const routePath = relativePath
    .replace(/(^|\/)index\.mdx$/, "$1")
    .replace(/\.mdx$/, "/");
  return withTrailingSlash(joinUrlPaths(routeBasePath, routePath));
}

function joinUrlPaths(...parts) {
  const pathValue = parts
    .filter(Boolean)
    .map((part) => String(part).replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");
  return `/${pathValue}`;
}

function withTrailingSlash(value) {
  return value.endsWith("/") ? value : `${value}/`;
}

function deterministicUuid(value) {
  const hash = crypto.createHash("sha256").update(value).digest();
  hash[6] = (hash[6] & 0x0f) | 0x50;
  hash[8] = (hash[8] & 0x3f) | 0x80;
  const hex = hash.subarray(0, 16).toString("hex");
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32)
  ].join("-");
}

async function embedTexts(texts, config) {
  const response = await fetch(config.embeddingsApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.embeddingsApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: config.embeddingsModel,
      input: texts
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Embedding request failed with ${response.status}: ${body.slice(0, 500)}`
    );
  }

  const json = await response.json();
  if (!Array.isArray(json.data)) {
    throw new Error("Embedding response does not contain a data array.");
  }

  return json.data.map((item) => item.embedding);
}

module.exports = {
  chunksFromMdxFile,
  embedTexts,
  listFiles
};
