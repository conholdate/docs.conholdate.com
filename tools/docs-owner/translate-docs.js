const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const {getTranslationConfig, requireTranslationConfig} = require("./search-config");
const {listFiles} = require("./search-utils");

const TARGET_ROOT_PREFIX = "i18n";
const TRANSLATABLE_FRONTMATTER = new Set([
  "title",
  "sidebar_label",
  "description"
]);

const LOCALE_NAMES = {
  es: "Spanish",
  fr: "French",
  de: "German"
};

const GLOSSARY_TERMS = [
  "GroupDocs.Viewer.CrossPlatform",
  "GroupDocs.Viewer for .NET",
  "Conholdate.Total for .NET",
  "Conholdate.Viewer App",
  "GroupDocs.Viewer App",
  "GroupDocs.Viewer"
];

function parseArgs(argv) {
  const options = {
    dryRun: false,
    force: false,
    file: "",
    limit: 0,
    locale: ""
  };

  argv.forEach((arg) => {
    if (arg === "--dry-run") {
      options.dryRun = true;
      return;
    }
    if (arg === "--force") {
      options.force = true;
      return;
    }
    if (arg.startsWith("--file=")) {
      options.file = arg.slice("--file=".length).replace(/\\/g, "/");
      return;
    }
    if (arg.startsWith("--limit=")) {
      options.limit = Number(arg.slice("--limit=".length));
      return;
    }
    if (arg.startsWith("--locale=")) {
      options.locale = arg.slice("--locale=".length);
    }
  });

  return options;
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return {entries: [], body: text};
  }

  const entries = match[1].split(/\r?\n/).map((line) => {
    const property = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!property) {
      return {key: "", value: "", raw: line};
    }

    return {
      key: property[1],
      value: unquoteYamlValue(property[2].trim()),
      raw: line
    };
  });

  return {entries, body: text.slice(match[0].length)};
}

function unquoteYamlValue(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function yamlString(value) {
  return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function buildFrontmatter(entries, additions) {
  const seen = new Set();
  const lines = entries.map((entry) => {
    if (!entry.key) {
      return entry.raw;
    }
    seen.add(entry.key);
    if (Object.prototype.hasOwnProperty.call(additions, entry.key)) {
      return `${entry.key}: ${yamlString(additions[entry.key])}`;
    }
    if (TRANSLATABLE_FRONTMATTER.has(entry.key)) {
      return `${entry.key}: ${yamlString(entry.value)}`;
    }
    return entry.raw;
  });

  Object.entries(additions).forEach(([key, value]) => {
    if (!seen.has(key)) {
      lines.push(`${key}: ${yamlString(value)}`);
    }
  });

  return `---\n${lines.join("\n")}\n---\n\n`;
}

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function targetPathFor(sourceFile, sourceRoot, config, locale) {
  const relative = path.relative(sourceRoot, sourceFile);
  const targetRoot = config.translationTargetRootPattern
    ? config.translationTargetRootPattern.replace("{locale}", locale)
    : path.join(
        TARGET_ROOT_PREFIX,
        locale,
        "docusaurus-plugin-content-docs",
        "current",
        "total",
        "net",
        "viewer",
        "v26.5",
        "getting-started"
      );
  return path.resolve(config.targetRepo, targetRoot, relative);
}

function getFrontmatterValue(entries, key) {
  const entry = entries.find((item) => item.key === key);
  return entry ? entry.value : "";
}

function protectMdx(text) {
  const protectedValues = [];

  function store(value, kind) {
    const token = `@@DOCS_OWNER_PROTECTED_${String(protectedValues.length).padStart(
      4,
      "0"
    )}@@`;
    protectedValues.push({token, value, kind});
    return token;
  }
  const storeBlock = (value) => store(value, "block");
  const storeInline = (value) => store(value, "inline");

  let output = text;

  output = output.replace(/```[\s\S]*?```/g, storeBlock);
  output = output.replace(/^import\s+.+?;\s*$/gm, storeBlock);
  output = output.replace(/^export\s+.+?;\s*$/gm, storeBlock);
  output = output.replace(/!\[[^\]]*]\([^)]+\)/g, storeBlock);
  output = output.replace(/`[^`\n]+`/g, storeInline);
  output = output.replace(/^:::[A-Za-z0-9_-]*\s*$/gm, storeBlock);
  output = output.replace(/^:::\s*$/gm, storeBlock);
  output = output.replace(/<TableFilter\b[^>]*\/>/g, storeBlock);
  output = output.replace(/<\/?(?:Tabs|TabItem)\b[^>]*>/g, storeBlock);
  output = output.replace(/<br\s*\/?>/gi, storeInline);
  output = output.replace(/<a\b[^>]*>/gi, storeInline);
  output = output.replace(/<\/a>/gi, storeInline);
  output = output.replace(/\s\{#[A-Za-z0-9_-]+}\s*$/gm, storeInline);
  output = output.replace(
    /(\[[^\]]+])(\([^)]+\))/g,
    (_match, label, destination) => `${label}${storeInline(destination)}`
  );

  return {text: output, protectedValues};
}

function restoreMdx(text, protectedValues) {
  let output = text;
  protectedValues.forEach(({token, value}) => {
    output = output.split(token).join(value);
  });
  return output;
}

function addExplicitHeadingIds(body) {
  const seen = new Map();

  return body.replace(/^(#{2,6}\s+)(.+)$/gm, (match, prefix, headingText) => {
    if (/\s\{#[A-Za-z0-9_-]+}\s*$/.test(headingText)) {
      return match;
    }

    const baseId = slugifyHeading(headingText);
    if (!baseId) {
      return match;
    }

    const seenCount = seen.get(baseId) || 0;
    seen.set(baseId, seenCount + 1);
    const id = seenCount === 0 ? baseId : `${baseId}-${seenCount}`;
    return `${prefix}${headingText} {#${id}}`;
  });
}

function slugifyHeading(headingText) {
  return headingText
    .replace(/<[^>]+>/g, "")
    .replace(/!\[([^\]]*)]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/&amp;/g, "and")
    .replace(/&[A-Za-z]+;/g, "")
    .replace(/[*_]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitIntoChunks(text, maxChars) {
  const blocks = text.split(/(\n{2,})/);
  const chunks = [];
  let current = "";

  blocks.forEach((block) => {
    if (!block) {
      return;
    }

    const next = current ? `${current}${block}` : block;
    if (next.length <= maxChars) {
      current = next;
      return;
    }

    if (current.trim()) {
      chunks.push(current);
      current = "";
    }

    if (block.length <= maxChars) {
      current = block;
      return;
    }

    splitLongBlock(block, maxChars).forEach((piece) => chunks.push(piece));
  });

  if (current.trim()) {
    chunks.push(current);
  }

  return chunks;
}

function splitLongBlock(block, maxChars) {
  const pieces = [];
  let current = "";
  block.split(/(\n)/).forEach((part) => {
    const next = current ? `${current}${part}` : part;
    if (next.length <= maxChars) {
      current = next;
      return;
    }
    if (current) {
      pieces.push(current);
    }
    current = part;
  });
  if (current) {
    pieces.push(current);
  }
  return pieces;
}

async function translateFragment(fragment, locale, config) {
  if (!fragment.trim()) {
    return fragment;
  }

  const glossary = protectGlossaryTerms(fragment);
  const languageName = LOCALE_NAMES[locale] || locale;
  const requestBody = {
    model: config.translationModel,
    temperature: 0,
    messages: [
      {
        role: "system",
        content:
          "You translate technical documentation. Preserve Markdown, MDX, HTML, JSX, table structure, line breaks, placeholders, product names, API names, package names, file paths, URLs, and code identifiers exactly. Return only the translated text."
      },
      {
        role: "user",
        content:
          `Translate this MDX documentation fragment to ${languageName}.\n` +
          "Keep every @@DOCS_OWNER_PROTECTED_0000@@-style placeholder exactly unchanged.\n" +
          "Keep every @@DOCS_OWNER_TERM_0000@@-style placeholder exactly unchanged.\n" +
          "Keep Markdown table pipes and row counts unchanged.\n\n" +
          glossary.text
      }
    ]
  };

  const response = await fetchWithRetry(config, requestBody);

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Translation request failed with ${response.status}: ${body.slice(0, 500)}`
    );
  }

  const json = await response.json();
  const content = json.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("Translation response does not contain choices[0].message.content.");
  }

  const translated = stripThinking(content).trim();
  assertTokenSequence(
    glossary.text,
    translated,
    /@@DOCS_OWNER_TERM_\d{4}@@/g,
    "glossary"
  );
  return restoreProtectedValues(translated, glossary.protectedValues);
}

async function fetchWithRetry(config, requestBody) {
  let lastError;
  const attempts = Math.max(1, config.translationRetries + 1);

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(config.translationApiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.translationApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        return response;
      }

      const body = await response.text();
      lastError = new Error(
        `Translation request failed with ${response.status}: ${body.slice(
          0,
          500
        )}`
      );
      if (response.status < 500 || attempt === attempts) {
        throw lastError;
      }
    } catch (error) {
      lastError = error;
      if (attempt === attempts) {
        throw lastError;
      }
    }

    await delay(config.translationRetryDelayMs * attempt);
  }

  throw lastError;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stripThinking(content) {
  return content.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
}

function protectGlossaryTerms(text) {
  const protectedValues = [];
  let output = text;

  GLOSSARY_TERMS.forEach((term) => {
    output = output.split(term).join(storeProtectedValue(protectedValues, term));
  });

  return {text: output, protectedValues};
}

function storeProtectedValue(protectedValues, value) {
  const token = `@@DOCS_OWNER_TERM_${String(protectedValues.length).padStart(
    4,
    "0"
  )}@@`;
  protectedValues.push({token, value});
  return token;
}

function restoreProtectedValues(text, protectedValues) {
  let output = text;
  protectedValues.forEach(({token, value}) => {
    output = output.split(token).join(value);
  });
  return output;
}

function assertTokenSequence(source, translated, tokenPattern, label) {
  const sourceTokens = source.match(tokenPattern) || [];
  const translatedTokens = translated.match(tokenPattern) || [];
  if (sourceTokens.join("\n") !== translatedTokens.join("\n")) {
    throw new Error(
      `Translation changed ${label} placeholder sequence. ` +
        `Expected ${sourceTokens.length}, received ${translatedTokens.length}.`
    );
  }
}

function splitAroundBlockTokens(text, protectedValues) {
  const blockTokens = new Set(
    protectedValues
      .filter((item) => item.kind === "block")
      .map((item) => item.token)
  );
  const parts = [];
  let current = "";

  text.split(/(@@DOCS_OWNER_PROTECTED_\d{4}@@)/g).forEach((part) => {
    if (!part) {
      return;
    }

    if (blockTokens.has(part)) {
      if (current) {
        parts.push({kind: "text", value: current});
        current = "";
      }
      parts.push({kind: "block", value: part});
      return;
    }

    current += part;
  });

  if (current) {
    parts.push({kind: "text", value: current});
  }

  return parts;
}

async function translateTextPart(text, locale, config) {
  if (!text.trim()) {
    return text;
  }

  const leading = text.match(/^\s*/)[0];
  const trailing = text.match(/\s*$/)[0];
  const core = text.slice(leading.length, text.length - trailing.length);
  const translatedChunks = [];
  const chunks = splitIntoChunks(core, config.translationMaxChars);
  for (const chunk of chunks) {
    translatedChunks.push(await translateInlineSafeChunk(chunk, locale, config));
  }
  return `${leading}${translatedChunks.join("\n\n")}${trailing}`;
}

async function translateInlineSafeChunk(chunk, locale, config) {
  const translated = await translateFragment(chunk, locale, config);
  try {
    assertTokenSequence(
      chunk,
      translated,
      /@@DOCS_OWNER_PROTECTED_\d{4}@@/g,
      "MDX"
    );
    return translated;
  } catch (error) {
    if (!String(error.message).includes("placeholder sequence")) {
      throw error;
    }
    return translateAroundInlineTokens(chunk, locale, config);
  }
}

async function translateAroundInlineTokens(chunk, locale, config) {
  const parts = chunk.split(/(@@DOCS_OWNER_PROTECTED_\d{4}@@)/g);
  const translatedParts = [];

  for (const part of parts) {
    if (!part) {
      continue;
    }
    if (/^@@DOCS_OWNER_PROTECTED_\d{4}@@$/.test(part)) {
      translatedParts.push(part);
      continue;
    }
    translatedParts.push(await translatePlainTextPreservingWhitespace(part, locale, config));
  }

  return translatedParts.join("");
}

async function translatePlainTextPreservingWhitespace(text, locale, config) {
  if (!text.trim()) {
    return text;
  }
  const leading = text.match(/^\s*/)[0];
  const trailing = text.match(/\s*$/)[0];
  const core = text.slice(leading.length, text.length - trailing.length);
  return `${leading}${await translateFragment(core, locale, config)}${trailing}`;
}

async function translateBody(body, locale, config) {
  const {text, protectedValues} = protectMdx(addExplicitHeadingIds(body));
  const translated = [];
  const parts = splitAroundBlockTokens(text, protectedValues);

  for (const part of parts) {
    if (part.kind === "block") {
      translated.push(part.value);
      continue;
    }
    translated.push(await translateTextPart(part.value, locale, config));
  }

  const restored = restoreMdx(translated.join(""), protectedValues);
  const remainingPlaceholder = restored.match(/@@DOCS_OWNER_PROTECTED_\d{4}@@/);
  if (remainingPlaceholder) {
    throw new Error(`Unrestored placeholder found: ${remainingPlaceholder[0]}`);
  }
  return restored.replace(/\n{3,}/g, "\n\n");
}

async function translateFrontmatter(entries, locale, config, dryRun) {
  const translated = {};

  for (const entry of entries) {
    if (!TRANSLATABLE_FRONTMATTER.has(entry.key)) {
      continue;
    }

    translated[entry.key] = dryRun
      ? entry.value
      : await translateFragment(entry.value, locale, config);
  }

  return translated;
}

function targetIsCurrent(targetFile, sourceHash) {
  if (!fs.existsSync(targetFile)) {
    return false;
  }
  const {entries} = parseFrontmatter(fs.readFileSync(targetFile, "utf8"));
  return getFrontmatterValue(entries, "translation_source_sha256") === sourceHash;
}

async function translateFile(sourceFile, sourceRoot, config, options) {
  const raw = fs.readFileSync(sourceFile, "utf8");
  const sourceHash = sha256(raw);
  const locale = options.locale || config.translationTargetLocale;
  const targetFile = targetPathFor(sourceFile, sourceRoot, config, locale);
  const relative = path.relative(sourceRoot, sourceFile).replace(/\\/g, "/");

  if (!options.force && targetIsCurrent(targetFile, sourceHash)) {
    return {relative, targetFile, status: "skipped"};
  }

  const {entries, body} = parseFrontmatter(raw);
  const protectedBody = protectMdx(body);
  const chunkCount = splitIntoChunks(
    protectedBody.text,
    config.translationMaxChars
  ).length;

  if (options.dryRun) {
    return {relative, targetFile, status: "planned", chunkCount};
  }

  const frontmatterTranslations = await translateFrontmatter(
    entries,
    locale,
    config,
    false
  );
  const translatedBody = await translateBody(body, locale, config);
  const frontmatter = buildFrontmatter(entries, {
    ...frontmatterTranslations,
    locale,
    translated_from: "en",
    translation_model: config.translationModel,
    translation_source_sha256: sourceHash,
    translation_updated_at: new Date().toISOString(),
    translation_status: "ai-draft"
  });

  fs.mkdirSync(path.dirname(targetFile), {recursive: true});
  fs.writeFileSync(targetFile, `${frontmatter}${translatedBody.trim()}\n`, "utf8");
  return {relative, targetFile, status: "translated", chunkCount};
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const config = getTranslationConfig();
  const locale = options.locale || config.translationTargetLocale;
  const sourceRoot = config.translationSourceRoot;

  if (!options.dryRun) {
    requireTranslationConfig(config);
  }

  let files = listFiles(sourceRoot, ".mdx");
  if (options.file) {
    files = files.filter((file) =>
      path.relative(sourceRoot, file).replace(/\\/g, "/").includes(options.file)
    );
  }
  if (options.limit > 0) {
    files = files.slice(0, options.limit);
  }

  if (!files.length) {
    throw new Error("No MDX files matched the translation input.");
  }

  console.log(
    `${options.dryRun ? "Planning" : "Translating"} ${files.length} file(s) ` +
      `from ${path.relative(config.targetRepo, sourceRoot)} to locale ${locale}.`
  );

  for (const file of files) {
    const result = await translateFile(file, sourceRoot, config, {
      ...options,
      locale
    });
    const target = path.relative(config.targetRepo, result.targetFile).replace(/\\/g, "/");
    const chunks = result.chunkCount ? `, ${result.chunkCount} chunk(s)` : "";
    console.log(`- ${result.status}: ${result.relative} -> ${target}${chunks}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
