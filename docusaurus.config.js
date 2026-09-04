// @ts-check

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
      "http://127.0.0.1:3022/api/search"
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
          type: "docSidebar",
          docsPluginId: "net",
          sidebarId: "docsSidebar",
          position: "left",
          label: ".NET"
        },
        {
          type: "docSidebar",
          docsPluginId: "java",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Java"
        },
        {
          type: "search",
          position: "left",
          className: "docs-search-navbar"
        },
        {
          href: "https://www.conholdate.com/products/total/net",
          label: "Conholdate.Total for .NET",
          position: "right"
        },
        {
          type: "docsVersionDropdown",
          docsPluginId: "net",
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

module.exports = config;
