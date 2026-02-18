import Link from "next/link";

type LessonNavProps = {
  prevLesson: { slug: string; title: string } | null;
  nextLesson: { slug: string; title: string } | null;
  currentIndex: number;
  totalLessons: number;
};

export default function LessonNav({
  prevLesson,
  nextLesson,
  currentIndex,
  totalLessons,
}: LessonNavProps) {
  return (
    <nav
      className="mt-10 flex flex-col gap-4 border-t border-sky-200/90 pt-8 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Lesson navigation"
    >
      <Link
        href="/tutorial"
        className="order-3 text-sm text-sky-700 hover:text-sky-900 sm:order-1"
      >
        ← Back to Menu
      </Link>

      <p className="order-1 text-center text-sm text-gray-500 sm:order-2">
        Lesson {currentIndex} of {totalLessons}
      </p>

      <div className="order-2 flex flex-row gap-4 sm:order-3">
        {prevLesson ? (
          <Link
            href={`/tutorial/${prevLesson.slug}`}
            className="text-sm text-sky-700 hover:text-sky-900"
          >
            ← Previous
          </Link>
        ) : (
          <span className="text-sm text-gray-400" aria-hidden>
            ← Previous
          </span>
        )}

        {nextLesson ? (
          <Link
            href={`/tutorial/${nextLesson.slug}`}
            className="text-sm text-sky-700 hover:text-sky-900"
          >
            Next →
          </Link>
        ) : (
          <span className="text-sm text-gray-400" aria-hidden>
            Next →
          </span>
        )}
      </div>
    </nav>
  );
}
