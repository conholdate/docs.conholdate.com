const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");

function resolveFrom(base, value) {
  return path.isAbsolute(value) ? path.resolve(value) : path.resolve(base, value);
}

function toUrlPath(...parts) {
  return `/${parts
    .filter(Boolean)
    .map((part) => String(part).replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/")}`;
}

function versionFromDirectory(name) {
  const match = name.match(/^version-(.+)$/);
  return match ? match[1] : "";
}

function existingDirectory(root, relativePath) {
  const absolute = path.join(root, relativePath);
  return fs.existsSync(absolute) && fs.statSync(absolute).isDirectory()
    ? absolute
    : "";
}

function readDirectories(root) {
  if (!fs.existsSync(root)) {
    return [];
  }

  return fs
    .readdirSync(root, {withFileTypes: true})
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function parseDocsIndexRoots(targetRepo) {
  const raw = process.env.DOCS_INDEX_ROOTS || "";
  return raw
    .split(/[;,]/)
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => envDocsRootConfig(targetRepo, value));
}

function envDocsRootConfig(targetRepo, value) {
  const root = resolveFrom(targetRepo, value);
  const targetRelativePath = path.relative(targetRepo, root).replace(/\\/g, "/");
  const inferred = inferDocsRootRoute(targetRelativePath);
  return {
    root,
    source: "env",
    ...inferred
  };
}

function inferDocsRootRoute(targetRelativePath) {
  const currentNet = targetRelativePath.match(/^docs-net(?:\/(.*))?$/);
  if (currentNet) {
    return {
      locale: "en",
      platform: "net",
      totalVersion: "current",
      routeBasePath: toUrlPath("net", currentNet[1] || "")
    };
  }

  const versionedNet = targetRelativePath.match(
    /^net_versioned_docs\/version-([^/]+)(?:\/(.*))?$/
  );
  if (versionedNet) {
    return {
      locale: "en",
      platform: "net",
      totalVersion: versionedNet[1],
      routeBasePath: toUrlPath("net", versionedNet[1], versionedNet[2] || "")
    };
  }

  const localizedNet = targetRelativePath.match(
    /^i18n\/([^/]+)\/docusaurus-plugin-content-docs-net\/([^/]+)(?:\/(.*))?$/
  );
  if (localizedNet) {
    const totalVersion =
      localizedNet[2] === "current"
        ? "current"
        : versionFromDirectory(localizedNet[2]);
    return {
      locale: localizedNet[1],
      platform: "net",
      totalVersion,
      routeBasePath:
        totalVersion === "current"
          ? toUrlPath(localizedNet[1], "net", localizedNet[3] || "")
          : toUrlPath(
              localizedNet[1],
              "net",
              totalVersion,
              localizedNet[3] || ""
            )
    };
  }

  return {
    locale: "",
    platform: "",
    totalVersion: "",
    routeBasePath: ""
  };
}

function discoverDocsIndexRoots(targetRepo) {
  const configuredRoots = parseDocsIndexRoots(targetRepo);
  if (configuredRoots.length) {
    return configuredRoots;
  }

  const roots = [];
  const currentNetRoot = existingDirectory(targetRepo, "docs-net");
  if (currentNetRoot) {
    roots.push({
      root: currentNetRoot,
      source: "current",
      locale: "en",
      platform: "net",
      totalVersion: "current",
      routeBasePath: "/net"
    });
  }

  const versionedNetRoot = existingDirectory(targetRepo, "net_versioned_docs");
  readDirectories(versionedNetRoot).forEach((directory) => {
    const totalVersion = versionFromDirectory(directory);
    if (!totalVersion) {
      return;
    }

    roots.push({
      root: path.join(versionedNetRoot, directory),
      source: "versioned",
      locale: "en",
      platform: "net",
      totalVersion,
      routeBasePath: toUrlPath("net", totalVersion)
    });
  });

  const i18nRoot = existingDirectory(targetRepo, "i18n");
  readDirectories(i18nRoot).forEach((locale) => {
    const docsPluginRoot = existingDirectory(
      targetRepo,
      path.join("i18n", locale, "docusaurus-plugin-content-docs-net")
    );
    if (!docsPluginRoot) {
      return;
    }

    readDirectories(docsPluginRoot).forEach((directory) => {
      const root = path.join(docsPluginRoot, directory);
      const totalVersion =
        directory === "current" ? "current" : versionFromDirectory(directory);
      if (!totalVersion) {
        return;
      }

      roots.push({
        root,
        source: "localized",
        locale,
        platform: "net",
        totalVersion,
        routeBasePath:
          totalVersion === "current"
            ? toUrlPath(locale, "net")
            : toUrlPath(locale, "net", totalVersion)
      });
    });
  });

  return roots;
}

function loadDotEnv() {
  const envPath = path.join(repoRoot, ".env");
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

function getSearchConfig() {
  loadDotEnv();
  const targetRepo = path.resolve(process.env.DOCS_OWNER_TARGET_REPO || repoRoot);
  const docsIndexRoots = discoverDocsIndexRoots(targetRepo);

  return {
    repoRoot,
    targetRepo,
    docsIndexRoots,
    docsIndexRoot: docsIndexRoots[0]?.root || targetRepo,
    docsSiteBaseUrl: process.env.DOCS_SITE_BASE_URL || "http://127.0.0.1:3000",
    qdrantUrl: process.env.QDRANT_URL || "http://localhost:6333",
    qdrantCollection:
      process.env.QDRANT_COLLECTION || "conholdate_docs_pre_alpha",
    qdrantVectorSize: Number(process.env.QDRANT_VECTOR_SIZE || 4096),
    embeddingsApiUrl: process.env.EMBEDDINGS_API_URL || "",
    embeddingsApiKey: process.env.EMBEDDINGS_API_KEY || "",
    embeddingsModel: process.env.EMBEDDINGS_MODEL || "qwen3-embedding-8b",
    embeddingBatchSize: Number(process.env.EMBEDDING_BATCH_SIZE || 8),
    searchLimit: Number(process.env.SEARCH_LIMIT || 5)
  };
}

function chatCompletionsUrlFromEmbeddingsUrl(embeddingsApiUrl) {
  if (!embeddingsApiUrl) {
    return "";
  }
  return embeddingsApiUrl.replace(/\/embeddings\/?$/, "/chat/completions");
}

function getTranslationConfig() {
  loadDotEnv();
  const targetRepo = path.resolve(process.env.DOCS_OWNER_TARGET_REPO || repoRoot);

  const translationApiUrl =
    process.env.TRANSLATION_API_URL ||
    process.env.CHAT_COMPLETIONS_API_URL ||
    chatCompletionsUrlFromEmbeddingsUrl(process.env.EMBEDDINGS_API_URL || "");

  return {
    repoRoot,
    targetRepo,
    translationSourceRoot: resolveFrom(
      targetRepo,
      process.env.TRANSLATION_SOURCE_ROOT ||
        process.env.DOCS_OWNER_TARGET_DOCS_ROOT ||
        "docs/total/net/viewer/v26.5/getting-started"
    ),
    translationTargetRootPattern:
      process.env.TRANSLATION_TARGET_ROOT_PATTERN ||
      process.env.DOCS_OWNER_TARGET_LOCALE_ROOT_PATTERN ||
      "i18n/{locale}/docusaurus-plugin-content-docs/current/total/net/viewer/v26.5/getting-started",
    translationTargetLocale: process.env.TRANSLATION_TARGET_LOCALE || "es",
    translationApiUrl,
    translationApiKey:
      process.env.TRANSLATION_API_KEY || process.env.EMBEDDINGS_API_KEY || "",
    translationModel: process.env.TRANSLATION_MODEL || "qwen3-next",
    translationMaxChars: Number(process.env.TRANSLATION_MAX_CHARS || 12000),
    translationRetries: Number(process.env.TRANSLATION_RETRIES || 2),
    translationRetryDelayMs: Number(
      process.env.TRANSLATION_RETRY_DELAY_MS || 3000
    )
  };
}

function requireSearchConfig(config) {
  const missing = [];
  if (!config.embeddingsApiUrl) {
    missing.push("EMBEDDINGS_API_URL");
  }
  if (!config.embeddingsApiKey) {
    missing.push("EMBEDDINGS_API_KEY");
  }
  if (!config.qdrantVectorSize || Number.isNaN(config.qdrantVectorSize)) {
    missing.push("QDRANT_VECTOR_SIZE");
  }

  if (missing.length) {
    throw new Error(
      `Missing required search configuration: ${missing.join(", ")}. ` +
        "Create a local .env from .env.example and fill in the private values."
    );
  }
}

function requireTranslationConfig(config) {
  const missing = [];
  if (!config.translationApiUrl) {
    missing.push("TRANSLATION_API_URL");
  }
  if (!config.translationApiKey) {
    missing.push("TRANSLATION_API_KEY");
  }
  if (!config.translationModel) {
    missing.push("TRANSLATION_MODEL");
  }

  if (missing.length) {
    throw new Error(
      `Missing required translation configuration: ${missing.join(", ")}. ` +
        "Create a local .env from .env.example and fill in the private values."
    );
  }
}

module.exports = {
  getSearchConfig,
  getTranslationConfig,
  requireSearchConfig,
  requireTranslationConfig
};
