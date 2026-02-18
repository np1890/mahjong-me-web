import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/tutorial", label: "Tutorial" },
  { href: "/glossary", label: "Glossary" },
  { href: "/strategy", label: "Strategy" },
  { href: "/play", label: "Scoring" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-sky-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-gray-900">
          <Image src="/images/Dragon_Red.png" alt="MahjongMe" width={28} height={40} />
          <span
            className="text-xl tracking-tight"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            MahjongMe
          </span>
        </Link>

        <nav className="flex items-center gap-2 text-sm sm:gap-4 sm:text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-gray-800 transition hover:bg-white/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
