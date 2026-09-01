import React, {useEffect, useId, useState} from "react";

export default function TableFilter({
  placeholder = "Start typing to filter",
  forumUrl
}) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const forumLinkAttrs = externalLinkAttrs(forumUrl);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) {
      return;
    }

    const tables = Array.from(article.querySelectorAll("table"));
    const normalizedQuery = query.trim().toLowerCase();
    const controlledNodes = new Set();

    tables.forEach((table) => {
      const tableBlock = tableSectionBlock(table);
      const rows = Array.from(table.querySelectorAll("tbody tr"));
      const matchingRows = rows.filter((row) =>
        row.textContent.toLowerCase().includes(normalizedQuery)
      );
      const matchingRowsSet = new Set(matchingRows);
      const shouldShowTable = !normalizedQuery || matchingRows.length > 0;
      const sectionNodes = sectionNodesForTableBlock(tableBlock);

      sectionNodes.forEach((node) => {
        setElementVisibility(node, shouldShowTable);
        controlledNodes.add(node);
      });
      tableOfContentsNodes(sectionNodes).forEach((node) => {
        setElementVisibility(node, shouldShowTable);
        controlledNodes.add(node);
      });

      rows.forEach((row) => {
        setElementVisibility(
          row,
          !normalizedQuery || matchingRowsSet.has(row)
        );
      });
    });

    return () => {
      article.querySelectorAll("tbody tr").forEach((row) => {
        setElementVisibility(row, true);
      });
      controlledNodes.forEach((node) => {
        setElementVisibility(node, true);
      });
    };
  }, [query]);

  return (
    <div className="table-filter">
      <label className="table-filter__label" htmlFor={inputId}>
        Filter formats
      </label>
      <input
        id={inputId}
        className="table-filter__input"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {forumUrl ? (
        <a className="table-filter__link" href={forumUrl} {...forumLinkAttrs}>
          Ask on forum
        </a>
      ) : null}
    </div>
  );
}

function tableSectionBlock(table) {
  const parent = table.parentElement;
  if (
    parent &&
    parent !== table.closest("article") &&
    parent.children.length === 1 &&
    parent.tagName.toLowerCase() === "div"
  ) {
    return parent;
  }
  return table;
}

function sectionNodesForTableBlock(tableBlock) {
  const heading = previousSectionHeading(tableBlock);
  if (!heading) {
    return [tableBlock];
  }

  const nodes = [];
  let current = heading;
  while (current) {
    if (current !== heading && isSectionHeading(current)) {
      break;
    }
    nodes.push(current);
    current = current.nextElementSibling;
  }
  return nodes;
}

function previousSectionHeading(element) {
  let current = element.previousElementSibling;
  while (current) {
    if (isSectionHeading(current)) {
      return current;
    }
    current = current.previousElementSibling;
  }
  return null;
}

function isSectionHeading(element) {
  return /^H[2-6]$/i.test(element.tagName);
}

function setElementVisibility(element, isVisible) {
  element.hidden = !isVisible;
  element.style.display = isVisible ? "" : "none";
}

function tableOfContentsNodes(sectionNodes) {
  return sectionNodes
    .filter(isSectionHeading)
    .flatMap((heading) => tableOfContentsNodesForHeading(heading));
}

function tableOfContentsNodesForHeading(heading) {
  if (!heading.id) {
    return [];
  }

  return Array.from(
    document.querySelectorAll(
      ".table-of-contents a[href], .theme-doc-toc-desktop a[href]"
    )
  )
    .filter((link) => urlHash(link.href) === heading.id)
    .map((link) => link.closest("li") || link);
}

function urlHash(href) {
  try {
    return decodeURIComponent(new URL(href, window.location.href).hash.slice(1));
  } catch {
    return "";
  }
}

function externalLinkAttrs(href) {
  if (!href || isDocsConholdateUrl(href)) {
    return {};
  }
  if (isConholdateUrl(href)) {
    return {target: "_blank"};
  }
  return {target: "_blank", rel: "nofollow noopener noreferrer"};
}

function isDocsConholdateUrl(href) {
  try {
    const url = new URL(href);
    return url.hostname.toLowerCase() === "docs.conholdate.com";
  } catch {
    return false;
  }
}

function isConholdateUrl(href) {
  try {
    const hostname = new URL(href).hostname.toLowerCase();
    return hostname === "conholdate.com" ||
      hostname.endsWith(".conholdate.com") ||
      hostname === "conholdate.app" ||
      hostname.endsWith(".conholdate.app");
  } catch {
    return false;
  }
}
