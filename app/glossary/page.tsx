import { glossaryEntries } from "@/content/glossary";
import GlossarySearch from "@/components/glossary-search";

export const metadata = {
  title: "Glossary | MahjongMe",
};

export default function GlossaryPage() {
  return (
    <div className="px-6 pb-16 pt-10 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <section
          className="rounded-3xl p-8 sm:p-10 lg:p-12"
          style={{
            background: "rgba(255, 255, 255, 0.68)",
            border: "2px solid rgba(127, 191, 255, 0.65)",
            boxShadow: "0 10px 32px rgba(109, 194, 233, 0.15)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.16em] text-sky-700/90">Reference</p>
          <h1
            className="mt-2 text-4xl text-gray-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            Glossary of Terms
          </h1>
          <p className="mt-3 text-base leading-7 text-gray-700">
            {glossaryEntries.length} rulebook-aligned terms.
          </p>

          <GlossarySearch entries={glossaryEntries} />
        </section>
      </div>
    </div>
  );
}
