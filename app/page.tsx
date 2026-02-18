import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/feature-card";

export default function Home() {
  return (
    <div className="px-6 pb-16 pt-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section
          className="rounded-3xl px-6 py-10 text-center sm:px-12"
          style={{
            background: "rgba(255, 255, 255, 0.68)",
            border: "2px solid rgba(127, 191, 255, 0.65)",
            boxShadow: "0 10px 32px rgba(109, 194, 233, 0.15)",
          }}
        >
          <Image
            src="/images/Dragon_Red.png"
            alt="MahjongMe Dragon mark"
            width={96}
            height={134}
            priority
            className="mx-auto mb-5 drop-shadow-md"
          />
          <h1
            className="text-4xl tracking-tight text-gray-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            Learn Mahjong.
            <br />
            Master the Game.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
            Structured lessons, a searchable glossary, strategy coaching,
            <br />
            and scoring tools.
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="/tutorial"
              className="rounded-full border border-sky-300 bg-white/90 px-6 py-2.5 text-gray-900 transition hover:bg-white"
            >
              Start with Tutorial
            </Link>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2">
          <FeatureCard
            title="Tutorial"
            description="Step-by-step lessons that teach you the Indian Mahjong rules"
            href="/tutorial"
            cta="Open lessons"
          />
          <FeatureCard
            title="Glossary of Terms"
            description="A quick reference for terms, tile names, and game vocabulary."
            href="/glossary"
            cta="Browse glossary"
          />
          <FeatureCard
            title="Strategy Coaching"
            description="Practical coaching notes, decision frameworks, and tactical play ideas."
            href="/strategy"
            cta="Explore strategy"
            comingSoon
          />
          <FeatureCard
            title="Scoring Calculator"
            description="Enter your hand and the round, calculate your score."
            href="/play"
            cta="View score mode"
            comingSoon
          />
        </section>

        <p className="pt-1 text-center text-sm text-gray-700">Learn • Practice • Master</p>
      </div>
    </div>
  );
}
