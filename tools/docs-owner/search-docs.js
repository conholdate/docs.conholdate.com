const {
  getSearchConfig,
  requireSearchConfig
} = require("./search-config");
const {embedTexts} = require("./search-utils");

const filterArgs = new Set([
  "locale",
  "platform",
  "product",
  "section",
  "total-version",
  "totalVersion",
  "limit"
]);

function parseArgs(args) {
  const filters = {};
  const queryParts = [];
  let limit = null;

  args.forEach((arg) => {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (!match || !filterArgs.has(match[1])) {
      queryParts.push(arg);
      return;
    }

    const key = match[1];
    const value = match[2].trim();
    if (!value) {
      return;
    }
    if (key === "limit") {
      limit = Number(value);
      return;
    }
    if (key === "total-version" || key === "totalVersion") {
      filters.totalVersion = value;
      return;
    }
    filters[key] = value;
  });

  return {
    query: queryParts.join(" ").trim(),
    filters,
    limit
  };
}

function formatScore(score) {
  return Number(score || 0).toFixed(4);
}

function snippet(text, maxLength = 360) {
  const compact = String(text || "").replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) {
    return compact;
  }
  return `${compact.slice(0, maxLength - 1)}...`;
}

async function run() {
  const {query, filters, limit} = parseArgs(process.argv.slice(2));
  if (!query) {
    throw new Error(
      'Usage: npm.cmd run search:query -- "your docs question" ' +
        "[--locale=en] [--platform=net] [--product=viewer]"
    );
  }

  const config = getSearchConfig();
  requireSearchConfig(config);
  if (limit && !Number.isNaN(limit)) {
    config.searchLimit = limit;
  }

  const [vector] = await embedTexts([query], config);
  const results = await searchQdrant(vector, config, filters);

  if (!results.length) {
    console.log("No results found.");
    return;
  }

  results.forEach((result, index) => {
    const payload = result.payload || {};
    console.log(`\n${index + 1}. ${payload.title || "Untitled"}`);
    console.log(`   Score: ${formatScore(result.score)}`);
    console.log(`   Heading: ${payload.heading_path || payload.heading || ""}`);
    console.log(`   URL: ${payload.url || payload.url_path || ""}`);
    console.log(
      `   Scope: ${payload.locale || "-"} / ${payload.platform || "-"} / ` +
        `${payload.totalVersion || payload.version || "-"} / ` +
        `${payload.product || "-"} / ${payload.section || "-"}`
    );
    console.log(`   ${snippet(payload.text)}`);
  });
}

function qdrantFilter(filters) {
  const must = Object.entries(filters)
    .filter(([, value]) => value)
    .map(([key, value]) => ({
      key,
      match: {
        value
      }
    }));

  return must.length ? {must} : undefined;
}

async function searchQdrant(vector, config, filters = {}) {
  const endpoint = new URL(
    `/collections/${encodeURIComponent(config.qdrantCollection)}/points/search`,
    config.qdrantUrl
  );
  const filter = qdrantFilter(filters);
  const body = {
    vector,
    limit: config.searchLimit,
    with_payload: true
  };
  if (filter) {
    body.filter = filter;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Qdrant search failed with ${response.status}: ${body.slice(0, 500)}`
    );
  }

  const json = await response.json();
  return json.result || [];
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
