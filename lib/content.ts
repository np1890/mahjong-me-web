import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { lessonOrder } from "@/content/tutorial/index";

export type TutorialLesson = {
  slug: string;
  title: string;
  description: string;
  order: number;
  content: string;
};

const lessonsDir = path.join(process.cwd(), "content", "tutorial", "lessons");

function sortLessons(a: TutorialLesson, b: TutorialLesson): number {
  const aOrderIndex = lessonOrder.indexOf(a.slug);
  const bOrderIndex = lessonOrder.indexOf(b.slug);

  if (aOrderIndex !== -1 || bOrderIndex !== -1) {
    if (aOrderIndex === -1) return 1;
    if (bOrderIndex === -1) return -1;
    return aOrderIndex - bOrderIndex;
  }

  return a.order - b.order;
}

export async function getTutorialLessons(): Promise<TutorialLesson[]> {
  const files = await fs.readdir(lessonsDir);
  const lessonFiles = files.filter((file) => file.endsWith(".md"));

  const lessons = await Promise.all(
    lessonFiles.map(async (file) => {
      const fullPath = path.join(lessonsDir, file);
      const source = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(source);
      const slug = file.replace(/\.md$/, "");

      return {
        slug,
        title: typeof data.title === "string" ? data.title : "Untitled lesson",
        description:
          typeof data.description === "string"
            ? data.description
            : "Add your lesson description in this file frontmatter.",
        order: typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
        content,
      };
    }),
  );

  return lessons.sort(sortLessons);
}

export async function getTutorialLesson(slug: string): Promise<TutorialLesson | null> {
  const lessons = await getTutorialLessons();
  return lessons.find((lesson) => lesson.slug === slug) ?? null;
}
