import { bigCardTitle, bigCardSections } from "@/content/big-card";

export default function BigCard() {
  return (
    <div
      className="my-8 overflow-hidden rounded-xl border-2 border-gray-300 bg-amber-50/95 px-6 py-6 shadow-md sm:px-8 sm:py-8"
      style={{
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      <div className="mb-6 border-b-2 border-amber-200/80 pb-4">
        <h3
          className="text-center text-xl font-bold uppercase tracking-wide text-gray-900 sm:text-2xl"
          style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
        >
          {bigCardTitle}
        </h3>
      </div>

      <div className="space-y-6">
        {bigCardSections.map((section, si) => (
          <div key={si}>
            <h4
              className="border-b border-amber-300/80 pb-1.5 text-base font-bold uppercase text-sky-800"
              style={{
                fontFamily: "var(--font-dm-serif-display), Georgia, serif",
              }}
            >
              {section.title}
            </h4>
            {section.note && (
              <p className="mt-2 text-sm italic text-gray-600">
                ~{section.note}~
              </p>
            )}
            <ul className="mt-3 space-y-4">
              {section.hands.map((hand, hi) => (
                <li key={hi} className="border-b border-amber-100/80 pb-3 last:border-0 last:pb-0">
                  <p className="font-semibold text-gray-900">{hand.name}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-gray-800">
                    {hand.description}
                  </p>
                  {hand.extra && (
                    <p className="mt-1 text-sm text-gray-600">
                      ({hand.extra})
                    </p>
                  )}
                  {hand.jokers && (
                    <p className="mt-1 text-sm font-medium text-sky-800">
                      Jokers: {hand.jokers}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
