import React, {useEffect, useMemo, useState} from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useLocation} from "@docusaurus/router";
import ReactMarkdown from "react-markdown";

const defaultFilters = {
  platform: "all",
  product: "all",
  section: "all",
  totalVersion: "current"
};

export function DocsSearchBar({compact = false}) {
  const location = useLocation();
  const {i18n} = useDocusaurusContext();
  const currentQuery = useMemo(
    () => new URLSearchParams(location.search).get("q") || "",
    [location.search]
  );
  const currentUseAi = useMemo(
    () => new URLSearchParams(location.search).get("ai") === "1",
    [location.search]
  );
  const [query, setQuery] = useState(currentQuery);
  const [useAi, setUseAi] = useState(currentUseAi);

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  useEffect(() => {
    setUseAi(currentUseAi);
  }, [currentUseAi]);

  function goToSearch() {
    const nextQuery = query.trim();
    if (!nextQuery) {
      return;
    }

    const params = new URLSearchParams();
    params.set("q", nextQuery);
    if (useAi) {
      params.set("ai", "1");
    }

    window.location.assign(`${localizedSearchPath(i18n)}?${params}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    goToSearch();
  }

  return (
    <form
      className={compact ? "docs-search-bar docs-search-bar--compact" : "docs-search-bar"}
      role="search"
      onSubmit={handleSubmit}
    >
      <div className="docs-search-bar__field">
        <input
          className="docs-search-bar__input"
          type="search"
          aria-label="Search documentation"
          placeholder="Search docs"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              goToSearch();
            }
          }}
        />
        <button
          className="docs-search-bar__submit"
          type="submit"
          aria-label={useAi ? "Search docs with AI answer" : "Search docs"}
          title={useAi ? "Search docs with AI answer" : "Search docs"}
        />
      </div>
      <label className="docs-search-bar__ai" title="Include an AI answer">
        <input
          type="checkbox"
          checked={useAi}
          onChange={(event) => setUseAi(event.target.checked)}
        />
        <span>AI</span>
      </label>
    </form>
  );
}

export function DocsSearchPage() {
  const location = useLocation();
  const {siteConfig, i18n} = useDocusaurusContext();
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const query = params.get("q") || "";
  const [filters, setFilters] = useState(() => ({
    ...defaultFilters,
    ...filtersFromParams(params)
  }));
  const [useAi, setUseAi] = useState(params.get("ai") === "1");
  const [state, setState] = useState({
    loading: false,
    error: "",
    data: null
  });
  const apiUrl = siteConfig.customFields?.docsOwnerSearchApiUrl || "";

  useEffect(() => {
    if (!query) {
      setState({loading: false, error: "", data: null});
      return;
    }

    const controller = new AbortController();
    setState((current) => ({...current, loading: true, error: ""}));

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        locale: i18n.currentLocale || "en",
        platform: filterValue(filters.platform),
        product: filterValue(filters.product),
        section: filterValue(filters.section),
        totalVersion: filterValue(filters.totalVersion),
        ai: useAi,
        limit: 8
      }),
      signal: controller.signal
    })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok) {
          throw new Error(body.error?.message || "Search request failed.");
        }
        return body;
      })
      .then((data) => {
        setState({loading: false, error: "", data});
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
        setState({loading: false, error: error.message, data: null});
      });

    return () => controller.abort();
  }, [apiUrl, filters, i18n.currentLocale, query, useAi]);

  return (
    <main className="docs-search-page">
      <div className="container">
        <form className="docs-search-panel" action={localizedSearchPath(i18n)}>
          <input
            className="docs-search-page__input"
            type="search"
            name="q"
            aria-label="Search documentation"
            placeholder="Search documentation"
            defaultValue={query}
          />
          <SearchFilters filters={filters} onChange={setFilters} />
          <label className="docs-search-page__toggle">
            <input
              type="checkbox"
              name="ai"
              value="1"
              checked={useAi}
              onChange={(event) => setUseAi(event.target.checked)}
            />
            AI answer
          </label>
          <button className="button button--primary" type="submit">
            Search
          </button>
        </form>
        <SearchResults query={query} state={state} useAi={useAi} />
      </div>
    </main>
  );
}

function SearchFilters({filters, onChange}) {
  function updateFilter(key, value) {
    onChange((current) => ({
      ...current,
      [key]: value
    }));
  }

  return (
    <div className="docs-search-filters">
      <label>
        Platform
        <select
          name="platform"
          value={filters.platform}
          onChange={(event) => updateFilter("platform", event.target.value)}
        >
          <option value="all">All</option>
          <option value="net">.NET</option>
        </select>
      </label>
      <label>
        Product
        <select
          name="product"
          value={filters.product}
          onChange={(event) => updateFilter("product", event.target.value)}
        >
          <option value="all">All</option>
          <option value="viewer">Viewer</option>
          <option value="conversion">Conversion</option>
          <option value="metadata">Metadata</option>
        </select>
      </label>
      <label>
        Version
        <select
          name="totalVersion"
          value={filters.totalVersion}
          onChange={(event) => updateFilter("totalVersion", event.target.value)}
        >
          <option value="current">Current</option>
          <option value="26.6.0">26.6.0</option>
          <option value="all">All</option>
        </select>
      </label>
    </div>
  );
}

function SearchResults({query, state, useAi}) {
  if (!query) {
    return <p className="docs-search-empty">Enter a query to search the docs.</p>;
  }

  if (state.loading) {
    return <p className="docs-search-empty">Searching...</p>;
  }

  if (state.error) {
    return <p className="docs-search-error">{state.error}</p>;
  }

  const results = state.data?.results || [];
  if (!results.length) {
    return <p className="docs-search-empty">No results found.</p>;
  }

  return (
    <div className="docs-search-results">
      {useAi && state.data.answer ? (
        <SearchAnswer answer={state.data.answer} />
      ) : null}
      <p className="docs-search-results__count">
        {state.data.count} result{state.data.count === 1 ? "" : "s"}
      </p>
      {results.map((result) => {
        const href = resultHref(result.url);
        return (
          <article className="docs-search-result" key={`${href}-${result.heading}`}>
            <a className="docs-search-result__title" href={href}>
              {result.title}
            </a>
            <div className="docs-search-result__meta">
              <span>{result.platform || "docs"}</span>
              <span>{result.product || "product"}</span>
              <span>{result.totalVersion || "current"}</span>
              {result.productVersion ? <span>{result.productVersion}</span> : null}
            </div>
            <div className="docs-search-result__heading">{result.heading}</div>
            <p>{result.snippet}</p>
          </article>
        );
      })}
    </div>
  );
}

function SearchAnswer({answer}) {
  const text = typeof answer === "string" ? answer : answer.text;
  const citations = typeof answer === "string" ? [] : answer.citations || [];

  return (
    <section className="docs-search-answer">
      <h2>AI answer</h2>
      {answer.error ? (
        <p className="docs-search-answer__error">{answer.error}</p>
      ) : null}
      {text ? <ReactMarkdown>{text}</ReactMarkdown> : null}
      {citations.length ? (
        <ol className="docs-search-answer__citations">
          {citations.map((citation) => {
            const href = resultHref(citation.url);
            return (
              <li key={`${citation.id}-${href}`}>
                <a href={href}>{citation.title || "Documentation"}</a>
                {citation.heading ? <span> {citation.heading}</span> : null}
              </li>
            );
          })}
        </ol>
      ) : null}
    </section>
  );
}

function localizedSearchPath(i18n) {
  const locale = i18n.currentLocale || i18n.defaultLocale || "en";
  if (locale === (i18n.defaultLocale || "en")) {
    return "/search";
  }
  return `/${locale}/search`;
}

function filtersFromParams(params) {
  return ["platform", "product", "section", "totalVersion"].reduce(
    (filters, key) => {
      const value = params.get(key);
      if (value) {
        filters[key] = value;
      }
      return filters;
    },
    {}
  );
}

function filterValue(value) {
  return value && value !== "all" ? value : "";
}

function resultHref(url) {
  if (!url) {
    return "#";
  }

  try {
    const parsed = new URL(url);
    if (["127.0.0.1", "localhost"].includes(parsed.hostname)) {
      return `${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
  } catch {
    return url;
  }

  return url;
}
