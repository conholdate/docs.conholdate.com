// @ts-check

const fs = require("fs");
const path = require("path");

const config = {
  title: "Conholdate.Total Documentation",
  tagline: "Aggregated .NET documentation prototype",
  url: "https://docs.conholdate.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "conholdate",
  projectName: "docs.conholdate.com",
  customFields: {
    docsOwnerSearchApiUrl:
      process.env.DOCS_OWNER_SEARCH_API_URL ||
      "http://127.0.0.1:3022/api/search",
    docsRoutes: discoverDocsRoutes(__dirname)
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en"
      },
      es: {
        label: "Español",
        htmlLang: "es"
      }
    }
  },
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "net",
        path: "docs-net",
        routeBasePath: "net",
        sidebarPath: require.resolve("./sidebars-net.js"),
        lastVersion: "current",
        versions: {
          current: {
            label: "26.7.0",
            banner: "none",
            badge: false
          }
        },
        showLastUpdateAuthor: false,
        showLastUpdateTime: false
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "java",
        path: "docs-java",
        routeBasePath: "java",
        sidebarPath: require.resolve("./sidebars-java.js"),
        lastVersion: "current",
        versions: {
          current: {
            label: "26.7.0",
            banner: "none",
            badge: false
          }
        },
        showLastUpdateAuthor: false,
        showLastUpdateTime: false
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: "Conholdate.Total Docs",
      items: [
        {
          type: "search",
          position: "left",
          className: "docs-search-navbar"
        },
        {
          type: "custom-platformDropdown",
          position: "right"
        },
        {
          type: "custom-versionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true
        },
        {
          type: "localeDropdown",
          position: "right"
        }
      ]
    },
    footer: {
      style: "light",
      copyright: `Copyright ${new Date().getFullYear()} Conholdate.`
    },
    prism: {
      additionalLanguages: ["csharp", "powershell", "bash", "docker"]
    }
  }
};

function discoverDocsRoutes(rootDir) {
  const routes = new Set();
  discoverCurrentDocsRoutes(rootDir, routes);
  discoverVersionedDocsRoutes(rootDir, routes);
  return Array.from(routes).sort();
}

function discoverCurrentDocsRoutes(rootDir, routes) {
  fs.readdirSync(rootDir, {withFileTypes: true})
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("docs-"))
    .forEach((entry) => {
      const platform = entry.name.slice("docs-".length);
      collectMdxRoutes(path.join(rootDir, entry.name), `/${platform}`, routes);
    });
}

function discoverVersionedDocsRoutes(rootDir, routes) {
  fs.readdirSync(rootDir, {withFileTypes: true})
    .filter((entry) => entry.isDirectory() && entry.name.endsWith("_versioned_docs"))
    .forEach((entry) => {
      const platform = entry.name.replace(/_versioned_docs$/, "");
      const versionedDocsRoot = path.join(rootDir, entry.name);
      fs.readdirSync(versionedDocsRoot, {withFileTypes: true})
        .filter((versionEntry) => versionEntry.isDirectory() && versionEntry.name.startsWith("version-"))
        .forEach((versionEntry) => {
          const version = versionEntry.name.slice("version-".length);
          collectMdxRoutes(
            path.join(versionedDocsRoot, versionEntry.name),
            `/${platform}/${version}`,
            routes
          );
        });
    });
}

function collectMdxRoutes(root, routePrefix, routes, baseRoot = root) {
  if (!fs.existsSync(root)) {
    return;
  }

  fs.readdirSync(root, {withFileTypes: true}).forEach((entry) => {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      collectMdxRoutes(absolute, routePrefix, routes, baseRoot);
      return;
    }
    if (!entry.isFile() || !entry.name.endsWith(".mdx")) {
      return;
    }

    const relative = path
      .relative(baseRoot, absolute)
      .replace(/\\/g, "/")
      .replace(/\.mdx$/, "")
      .replace(/\/index$/, "");
    const route = `${routePrefix}/${relative}`.replace(/\/+$/, "");
    routes.add(route || routePrefix);
  });
}

module.exports = config;
