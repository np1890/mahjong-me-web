"use client";

import { useState, useMemo } from "react";
import type { GlossaryEntry } from "@/content/glossary";

type GlossarySearchProps = {
  entries: GlossaryEntry[];
};

function groupByLetter(entries: GlossaryEntry[]): Record<string, GlossaryEntry[]> {
  return entries
    .slice()
    .sort((a, b) => a.term.localeCompare(b.term))
    .reduce<Record<string, GlossaryEntry[]>>((acc, entry) => {
      const key = entry.term.charAt(0).toUpperCase();
      if (!acc[key]) acc[key] = [];
      acc[key].push(entry);
      return acc;
    }, {});
}

export default function GlossarySearch({ entries }: GlossarySearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return entries;
    const q = query.trim().toLowerCase();
    return entries.filter(
      (e) =>
        e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q)
    );
  }, [entries, query]);

  const grouped = useMemo(() => groupByLetter(filtered), [filtered]);

  return (
    <>
      <div className="mt-6">
        <label htmlFor="glossary-search" className="sr-only">
          Search terms
        </label>
        <input
          id="glossary-search"
          type="search"
          placeholder="Search terms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-sky-200/80 bg-white/80 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
          aria-describedby="glossary-search-hint"
        />
        <p id="glossary-search-hint" className="mt-1.5 text-sm text-gray-600">
          {query.trim()
            ? `Showing ${filtered.length} of ${entries.length} terms`
            : `Search by term or definition`}
        </p>
      </div>

      {Object.keys(grouped).length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-xl border border-sky-200/80 bg-white/80 px-3 py-2">
          <div className="flex min-w-max gap-2">
            {Object.keys(grouped).map((letter) => (
              <a
                key={letter}
                href={`#glossary-${letter}`}
                className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 space-y-7">
        {Object.keys(grouped).length === 0 ? (
          <p className="rounded-2xl border border-sky-200/80 bg-white/80 px-5 py-8 text-center text-gray-600">
            No matching terms. Try a different search.
          </p>
        ) : (
          Object.entries(grouped).map(([letter, letterEntries]) => (
            <section key={letter} id={`glossary-${letter}`}>
              <h2
                className="text-2xl text-gray-900 sm:text-[1.8rem]"
                style={{
                  fontFamily: "var(--font-dm-serif-display), Georgia, serif",
                }}
              >
                {letter}
              </h2>
              <dl className="mt-3 space-y-3">
                {letterEntries.map((entry) => (
                  <div
                    key={entry.term}
                    className="rounded-2xl border border-sky-200/80 bg-white/80 px-5 py-4 shadow-sm"
                  >
                    <dt
                      className="text-xl text-gray-900 sm:text-2xl"
                      style={{
                        fontFamily:
                          "var(--font-dm-serif-display), Georgia, serif",
                      }}
                    >
                      {entry.term}
                    </dt>
                    <dd className="mt-1 text-gray-700">{entry.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))
        )}
      </div>
    </>
  );
}
