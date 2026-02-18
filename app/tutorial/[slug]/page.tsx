import { notFound } from "next/navigation";
import { getTutorialLesson, getTutorialLessons } from "@/lib/content";
import LessonContent from "@/components/lesson-content";
import LessonNav from "@/components/lesson-nav";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const lessons = await getTutorialLessons();
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = await getTutorialLesson(slug);

  if (!lesson) {
    return { title: "Lesson | MahjongMe" };
  }

  return {
    title: `${lesson.title} | Tutorial | MahjongMe`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const [lesson, lessons] = await Promise.all([
    getTutorialLesson(slug),
    getTutorialLessons(),
  ]);

  if (!lesson) {
    notFound();
  }

  const currentIndex = lessons.findIndex((l) => l.slug === slug) + 1;
  const prevLesson =
    currentIndex > 1
      ? { slug: lessons[currentIndex - 2].slug, title: lessons[currentIndex - 2].title }
      : null;
  const nextLesson =
    currentIndex < lessons.length
      ? { slug: lessons[currentIndex].slug, title: lessons[currentIndex].title }
      : null;

  return (
    <div className="px-6 pb-16 pt-10 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <article
          className="rounded-3xl p-8 sm:p-10 lg:p-12"
          style={{
            background: "rgba(255, 255, 255, 0.72)",
            border: "2px solid rgba(127, 191, 255, 0.65)",
            boxShadow: "0 10px 32px rgba(109, 194, 233, 0.15)",
          }}
        >
          <p className="text-xs uppercase tracking-[0.16em] text-sky-700/90">Tutorial</p>
          <h1
            className="mt-2 text-4xl leading-tight text-gray-900 sm:text-5xl"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            {lesson.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-700">{lesson.description}</p>
          <div className="mt-6 border-t border-sky-200/90" />

          <div className="lesson-prose mt-8 text-gray-800">
            <LessonContent content={lesson.content} />
          </div>

          <LessonNav
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            currentIndex={currentIndex}
            totalLessons={lessons.length}
          />
        </article>
      </div>
    </div>
  );
}
