import {
  goulashIntro,
  goulashPermissibleHands,
  goulashDoublesSections,
} from "@/content/goulash";
import CardTileExample from "@/components/card-tile-example";

export default function GoulashCard() {
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
          Goulash Reference
        </h3>
        <p className="mt-2 text-center text-sm text-gray-700">{goulashIntro}</p>
      </div>

      {/* Permissible Hands */}
      <div className="mb-8">
        <h4
          className="border-b border-amber-300/80 pb-1.5 text-base font-bold uppercase text-sky-800"
          style={{
            fontFamily: "var(--font-dm-serif-display), Georgia, serif",
          }}
        >
          Permissible Hands
        </h4>
        <p className="mt-2 text-sm italic text-gray-600">
          (i.e. Clean Hands that qualify for a score if 3 doubles are achieved)
        </p>
        <ul className="mt-3 space-y-4">
          {goulashPermissibleHands.map((hand, hi) => (
            <li
              key={hi}
              className="border-b border-amber-100/80 pb-4 last:border-0 last:pb-0"
            >
              <p className="font-semibold text-gray-900">{hand.name}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-gray-800">
                {hand.description}
              </p>
              <p className="mt-1 text-sm font-medium text-sky-800">
                {hand.doubles}
              </p>
              {hand.note && (
                <p className="mt-1 text-sm italic text-gray-600">{hand.note}</p>
              )}
              {hand.tiles && hand.tiles.length > 0 && (
                <CardTileExample groups={hand.tiles} />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Doubles */}
      <div>
        <h4
          className="border-b border-amber-300/80 pb-1.5 text-base font-bold uppercase text-sky-800"
          style={{
            fontFamily: "var(--font-dm-serif-display), Georgia, serif",
          }}
        >
          Doubles (3 required to Mahjong)
        </h4>
        <div className="mt-4 space-y-6">
          {goulashDoublesSections.map((section, si) => (
            <div key={si}>
              <h5 className="text-sm font-bold text-amber-900">
                {section.title}
              </h5>
              <ul className="mt-2 space-y-1">
                {section.items.map((item, ii) => (
                  <li key={ii} className="text-sm text-gray-800">
                    • {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
