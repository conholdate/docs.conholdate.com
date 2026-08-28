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
    locales: ["en", "es", "fr", "de"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en"
      },
      es: {
        label: "Español",
        htmlLang: "es"
      },
      fr: {
        label: "Français",
        htmlLang: "fr"
      },
      de: {
        label: "Deutsch",
        htmlLang: "de"
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
