"use client";

import { useState, useRef, useEffect } from "react";
import { smallCards } from "@/content/small-cards";
import SmallCard from "@/components/small-card";

const CARD_WIDTH = 316; // 280 min + 36 for padding/gap
const GAP = 16;

export default function SmallCardCarousel() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const canPrev = index > 0;
  const canNext = index < smallCards.length - 1;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(smallCards.length - 1, i + 1));

  useEffect(() => {
    if (!scrollRef.current) return;
    const offset = index * (CARD_WIDTH + GAP);
    scrollRef.current.scrollTo({ left: offset, behavior: "smooth" });
  }, [index]);

  return (
    <div className="my-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          Card {index + 1} of {smallCards.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            className="rounded-lg border border-sky-300 bg-white px-3 py-1.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ← Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            className="rounded-lg border border-sky-300 bg-white px-3 py-1.5 text-sm font-medium text-sky-700 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overscroll-x-contain pb-4 scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {smallCards.map((card, i) => (
          <div
            key={i}
            style={{ scrollSnapAlign: "start" }}
          >
            <SmallCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
