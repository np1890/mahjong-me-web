import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  comingSoon?: boolean;
};

export default function FeatureCard({
  title,
  description,
  href,
  cta,
  comingSoon = false,
}: FeatureCardProps) {
  return (
    <article
      className="rounded-2xl p-6"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        border: "1px solid rgba(127, 191, 255, 0.7)",
        boxShadow: "0 8px 24px rgba(109, 194, 233, 0.15)",
      }}
    >
      <h3
        className="text-2xl text-gray-900"
        style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-gray-700">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-block rounded-full border border-sky-300 bg-white/85 px-4 py-2 text-sm text-gray-900 transition hover:bg-white"
      >
        {cta}
      </Link>
      {comingSoon ? (
        <p className="mt-2 text-xs uppercase tracking-wide text-gray-600">Coming soon</p>
      ) : null}
    </article>
  );
}
