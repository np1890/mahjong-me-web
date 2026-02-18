export const metadata = {
  title: "Strategy Coaching | MahjongMe",
};

export default function StrategyPage() {
  return (
    <div className="px-6 pb-16 pt-10 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <section
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "rgba(255, 255, 255, 0.68)",
            border: "2px solid rgba(127, 191, 255, 0.65)",
            boxShadow: "0 10px 32px rgba(109, 194, 233, 0.15)",
          }}
        >
          <h1
            className="text-4xl text-gray-900"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            Strategy Coaching
          </h1>
          <p className="mt-3 text-gray-700">
            This section is ready for your strategy framework, coaching drills, and tactical
            examples. Add your content when you are ready.
          </p>
          <p className="mt-4 inline-block rounded-full border border-sky-300 bg-white/80 px-4 py-2 text-sm text-gray-700">
            Coming Soon
          </p>
        </section>
      </div>
    </div>
  );
}
