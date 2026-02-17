import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background: pastel blue gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #b2e0ff 0%, #a0d9f4 50%, #e8f6fc 100%)",
        }}
      />

      {/* Subtle vertical stripe overlay (Tile Back style) */}
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 3px,
            rgba(109, 194, 233, 0.3) 3px,
            rgba(109, 194, 233, 0.3) 6px
          )`,
        }}
      />

      {/* Decorative tiles - positioned around the content */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-[15%] opacity-40">
          <Image
            src="/images/Character_1.png"
            alt=""
            width={64}
            height={88}
            className="rotate-[-12deg] drop-shadow-lg"
          />
        </div>
        <div className="absolute right-[8%] top-[20%] opacity-40">
          <Image
            src="/images/Flower_1.png"
            alt=""
            width={64}
            height={88}
            className="rotate-[8deg] drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-[25%] left-[10%] opacity-35">
          <Image
            src="/images/Bamboo_5.png"
            alt=""
            width={56}
            height={76}
            className="rotate-[15deg] drop-shadow-lg"
          />
        </div>
        <div className="absolute bottom-[20%] right-[12%] opacity-35">
          <Image
            src="/images/Character_1.png"
            alt=""
            width={56}
            height={76}
            className="rotate-[-10deg] drop-shadow-lg"
          />
        </div>
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
        {/* Central content card with rounded corners */}
        <div
          className="flex max-w-lg flex-col items-center rounded-3xl px-10 py-12 text-center"
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            border: "2px solid rgba(127, 191, 255, 0.6)",
            boxShadow: "0 8px 32px rgba(109, 194, 233, 0.15)",
          }}
        >
          {/* Red Dragon logo */}
          <Image
            src="/images/Dragon_Red.png"
            alt="MahjongMe"
            width={100}
            height={140}
            priority
            className="mb-6 drop-shadow-md"
          />

          <h1
            className="font-display text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            MahjongMe
          </h1>

          <p className="mt-3 text-lg text-gray-700" style={{ fontFamily: "var(--font-dm-serif-text), Georgia, serif" }}>
            Mahjong Rules &amp; Strategy
          </p>

          <div
            className="mt-8 rounded-2xl px-8 py-4"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(127, 191, 255, 0.5)",
            }}
          >
            <span
              className="text-2xl font-normal text-gray-800 sm:text-3xl"
              style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
            >
              Coming Soon
            </span>
          </div>
        </div>

        {/* Footer */}
        <p
          className="mt-12 text-sm text-gray-600"
          style={{ fontFamily: "var(--font-dm-serif-text), Georgia, serif" }}
        >
          Learn • Practice • Master
        </p>
      </main>
    </div>
  );
}
