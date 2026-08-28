// @ts-check

const config = {
  title: "Conholdate.Total Documentation",
  tagline: "Aggregated .NET documentation prototype",
  url: "https://docs.conholdate.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "conholdate",
  projectName: "docs.conholdate.com",
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
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          versions: {
            current: {
              label: "26.6.0",
              banner: "none",
              badge: false
            }
          },
          showLastUpdateAuthor: false,
          showLastUpdateTime: false
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: "Conholdate.Total Docs",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs"
        },
        {
          href: "https://www.conholdate.com/products/total/net",
          label: "Conholdate.Total for .NET",
          position: "right"
        },
        {
          type: "docsVersionDropdown",
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
