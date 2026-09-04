export const docsPlatforms = [
  {
    key: "net",
    label: ".NET",
    defaultProduct: "conversion",
    defaultRest: ["getting-started"],
    products: ["conversion", "metadata", "viewer"]
  },
  {
    key: "java",
    label: "Java",
    defaultProduct: "viewer",
    defaultRest: ["getting-started"],
    products: ["viewer"]
  }
];

export const docsVersions = [
  {
    key: "current",
    label: "26.7.0",
    pathSegment: "",
    productsByPlatform: {
      net: ["conversion", "metadata", "viewer"],
      java: ["viewer"]
    }
  },
  {
    key: "26.6.0",
    label: "26.6.0",
    pathSegment: "26.6.0",
    productsByPlatform: {
      net: ["conversion", "viewer"]
    }
  }
];

const localePattern = /^[a-z]{2}(?:-[a-z]{2})?$/i;

export function parseDocsPath(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const locale = localePattern.test(parts[0]) ? parts.shift() : "";
  const platform = docsPlatforms.some((item) => item.key === parts[0])
    ? parts.shift()
    : "";
  const version = versionFromPathPart(parts[0]);
  if (version.key !== "current") {
    parts.shift();
  }
  const product = parts.shift() || "";
  return {
    locale,
    platform,
    version: version.key,
    product,
    rest: parts
  };
}

export function platformByKey(key) {
  return docsPlatforms.find((item) => item.key === key);
}

export function versionByKey(key) {
  return docsVersions.find((item) => item.key === key) || docsVersions[0];
}

export function availableVersionsForPlatform(platformKey) {
  return docsVersions.filter((version) =>
    availableProducts(platformKey, version.key).length > 0
  );
}

export function targetPathForPlatform(pathname, targetPlatform, knownRoutes = []) {
  const parsed = parseDocsPath(pathname);
  const version = versionAvailableForPlatform(parsed.version, targetPlatform.key)
    ? parsed.version
    : "current";
  const products = availableProducts(targetPlatform.key, version);
  if (!products.includes(parsed.product)) {
    return defaultPath(targetPlatform.key, version, parsed.locale);
  }

  const targetPath = buildDocsPath({
    locale: parsed.locale,
    platform: targetPlatform.key,
    version,
    product: parsed.product,
    rest: parsed.rest,
    trailingSlash: pathname.endsWith("/")
  });
  return routeExists(targetPath, knownRoutes)
    ? targetPath
    : defaultPath(targetPlatform.key, version, parsed.locale);
}

export function targetPathForVersion(pathname, targetVersion, knownRoutes = []) {
  const parsed = parseDocsPath(pathname);
  const platform = parsed.platform || docsPlatforms[0].key;
  const products = availableProducts(platform, targetVersion.key);
  if (!products.includes(parsed.product)) {
    return defaultPath(platform, targetVersion.key, parsed.locale);
  }

  const targetPath = buildDocsPath({
    locale: parsed.locale,
    platform,
    version: targetVersion.key,
    product: parsed.product,
    rest: parsed.rest,
    trailingSlash: pathname.endsWith("/")
  });
  return routeExists(targetPath, knownRoutes)
    ? targetPath
    : defaultPath(platform, targetVersion.key, parsed.locale);
}

export function defaultPath(platformKey, versionKey = "current", locale = "") {
  const platform = platformByKey(platformKey) || docsPlatforms[0];
  const products = availableProducts(platform.key, versionKey);
  const product = products.includes(platform.defaultProduct)
    ? platform.defaultProduct
    : products[0] || platform.defaultProduct;
  return buildDocsPath({
    locale,
    platform: platform.key,
    version: versionKey,
    product,
    rest: platform.defaultRest,
    trailingSlash: true
  });
}

export function pathWithLocale(pathname, basePath) {
  const parsed = parseDocsPath(pathname);
  return withLocalePrefix(parsed.locale, basePath);
}

function availableProducts(platformKey, versionKey) {
  const version = versionByKey(versionKey);
  return version.productsByPlatform[platformKey] || [];
}

function versionAvailableForPlatform(versionKey, platformKey) {
  return availableProducts(platformKey, versionKey).length > 0;
}

function buildDocsPath({locale, platform, version, product, rest, trailingSlash}) {
  const versionSegment = versionByKey(version).pathSegment;
  const parts = [platform, versionSegment, product, ...rest].filter(Boolean);
  const path = `/${parts.join("/")}`;
  return withLocalePrefix(locale, `${path}${trailingSlash ? "/" : ""}`);
}

function versionFromPathPart(value) {
  return docsVersions.find((item) => item.pathSegment && item.pathSegment === value) ||
    docsVersions[0];
}

function routeExists(pathname, knownRoutes) {
  if (!knownRoutes.length) {
    return true;
  }
  const normalizedRoutes = new Set(knownRoutes.map(normalizeRoutePath));
  return normalizedRoutes.has(normalizeRoutePath(pathname));
}

function normalizeRoutePath(pathname) {
  const parsed = parseDocsPath(pathname);
  const path = buildDocsPath({
    locale: "",
    platform: parsed.platform,
    version: parsed.version,
    product: parsed.product,
    rest: parsed.rest,
    trailingSlash: false
  });
  return path.replace(/\/+$/, "") || "/";
}

function withLocalePrefix(locale, pathname) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return locale ? `/${locale}${normalized}` : normalized;
}
