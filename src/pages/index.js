import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const content = {
  en: {
    title: "Conholdate.Total Docs",
    description:
      "Documentation for Conholdate.Total APIs, examples, and migration guidance across supported platforms.",
    docsLabel: "Browse .NET docs",
    searchLabel: "Search docs",
    sections: [
      {
        title: ".NET API documentation",
        text:
          "Find current guides for document viewing, conversion, annotation, comparison, signing, metadata, and related workflows."
      },
      {
        title: "Localized content",
        text:
          "Use the language selector to read available documentation in your preferred locale."
      },
      {
        title: "Product-focused guides",
        text:
          "Open focused sections for each included product, version, and platform from one documentation site."
      }
    ]
  },
  es: {
    title: "Documentación de Conholdate.Total",
    description:
      "Documentación de las API de Conholdate.Total, ejemplos y guías de migración para las plataformas disponibles.",
    docsLabel: "Ver documentación .NET",
    searchLabel: "Buscar en la documentación",
    sections: [
      {
        title: "Documentación de la API .NET",
        text:
          "Encuentre guías actuales para visualización, conversión, anotación, comparación, firma, metadatos y flujos relacionados."
      },
      {
        title: "Contenido localizado",
        text:
          "Use el selector de idioma para leer la documentación disponible en su idioma preferido."
      },
      {
        title: "Guías por producto",
        text:
          "Abra secciones específicas para cada producto, versión y plataforma desde un solo sitio de documentación."
      }
    ]
  }
};

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale || i18n.defaultLocale || "en";
  const copy = content[locale] || content.en;
  const docsPath = localizedPath("/net/viewer/getting-started/", locale, i18n.defaultLocale);
  const searchPath = localizedPath("/search", locale, i18n.defaultLocale);

  return (
    <Layout title={copy.title} description={copy.description}>
      <main className="container margin-vert--xl">
        <header className="margin-bottom--xl">
          <h1>{copy.title}</h1>
          <p className="hero__subtitle">{copy.description}</p>
          <div className="button-group">
            <Link className="button button--primary" to={docsPath}>
              {copy.docsLabel}
            </Link>
            <Link className="button button--secondary" to={searchPath}>
              {copy.searchLabel}
            </Link>
          </div>
        </header>
        <section className="row">
          {copy.sections.map((section) => (
            <article className="col col--4 margin-bottom--lg" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}

function localizedPath(pathname, locale, defaultLocale) {
  if (!locale || locale === defaultLocale) {
    return pathname;
  }
  return `/${locale}${pathname}`;
}
