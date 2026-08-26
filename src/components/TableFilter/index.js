import React, {useEffect, useId, useState} from "react";

export default function TableFilter({
  placeholder = "Start typing to filter",
  forumUrl
}) {
  const [query, setQuery] = useState("");
  const inputId = useId();

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) {
      return;
    }

    const rows = Array.from(article.querySelectorAll("tbody tr"));
    const normalizedQuery = query.trim().toLowerCase();

    rows.forEach((row) => {
      const matches =
        !normalizedQuery ||
        row.textContent.toLowerCase().includes(normalizedQuery);
      row.hidden = !matches;
    });

    return () => {
      rows.forEach((row) => {
        row.hidden = false;
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
        <a className="table-filter__link" href={forumUrl} rel="nofollow">
          Ask on forum
        </a>
      ) : null}
    </div>
  );
}
