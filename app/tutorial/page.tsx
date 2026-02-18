import Link from "next/link";
import { getTutorialLessons } from "@/lib/content";

export const metadata = {
  title: "Tutorial | MahjongMe",
};

export default async function TutorialPage() {
  const lessons = await getTutorialLessons();

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
          <p className="text-xs uppercase tracking-[0.16em] text-sky-700/90">Learning Path</p>
          <h1
            className="mt-2 text-4xl text-gray-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            Tutorial
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-700">
            A structured beginner path for Indian Traditional Mahjong.
          </p>
          <div className="mt-4 max-w-2xl space-y-3 text-base leading-7 text-gray-700">
            <p>
              Mahjong is a four-player strategic tile game that combines skill, memory, probability, and tactical decision-making. Played with a set of 144 tiles, the goal is to build a complete hand of four sets and one pair before your opponents do.
            </p>
            <p>
              The Indian Traditional format follows a structured four-round system — East, South, West, and North — each introducing its own scoring style and strategic variation. While it shares roots with classical Chinese Mahjong, the Indian format has developed distinct gameplay elements, scoring mechanics, and round structures that make it uniquely dynamic and deeply strategic.
            </p>
            <p>
              This course teaches the Indian Traditional 144-tile version in a clear, step-by-step format designed for complete beginners.
            </p>
          </div>

          <div className="mt-7 border-t border-sky-200/90" />
          <ol className="mt-7 space-y-4">
            {lessons.map((lesson, index) => (
              <li key={lesson.slug}>
                <Link
                  href={`/tutorial/${lesson.slug}`}
                  className="block rounded-2xl border border-sky-200/80 bg-white/80 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  <p className="text-xs uppercase tracking-wide text-sky-700">Lesson {index + 1}</p>
                  <p
                    className="mt-1 text-2xl text-gray-900"
                    style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
                  >
                    {lesson.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-700">{lesson.description}</p>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
