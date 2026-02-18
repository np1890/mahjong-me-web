import type { SmallCard as SmallCardType } from "@/content/small-cards";
import CardTileExample from "@/components/card-tile-example";

type SmallCardProps = {
  card: SmallCardType;
};

export default function SmallCard({ card }: SmallCardProps) {
  return (
    <div
      className="flex h-full min-w-[280px] max-w-[340px] flex-shrink-0 flex-col rounded-xl border-2 border-gray-300 bg-amber-50/95 px-5 py-4 shadow-md"
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      <h3
        className="border-b border-amber-200/80 pb-2 text-center text-base font-bold uppercase tracking-wide text-gray-900"
        style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
      >
        {card.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-800">
        {card.rules}
      </p>
      {card.tiles && card.tiles.length > 0 && (
        <CardTileExample groups={card.tiles} />
      )}
      {card.limit && (
        <p className="mt-3 text-sm font-medium text-sky-800">
          {card.limit}
        </p>
      )}
    </div>
  );
}
