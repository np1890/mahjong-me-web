"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import FrameAnimation from "@/components/frame-animation";
import SmallCardCarousel from "@/components/small-card-carousel";
import BigCard from "@/components/big-card";
import GoulashCard from "@/components/goulash-card";
import EastRoundCard from "@/components/east-round-card";

type LessonContentProps = {
  content: string;
};

function parseAnimationConfig(content: string): { frames: number[]; fps: number } | null {
  const lines = content.trim().split("\n");
  if (lines.length === 0) return null;
  const rangeMatch = lines[0].trim().match(/^(\d+)-(\d+)$/);
  if (!rangeMatch) return null;
  const start = parseInt(rangeMatch[1], 10);
  const end = parseInt(rangeMatch[2], 10);
  const frames = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const fps = lines[1] ? parseFloat(lines[1].trim()) || 12 : 12;
  return { frames, fps };
}

export default function LessonContent({ content }: LessonContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h2
            className="mt-10 text-3xl text-gray-900 first:mt-0 sm:text-[2rem]"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            {children}
          </h2>
        ),
        h2: ({ children }) => (
          <h3
            className="mt-8 border-t border-sky-100 pt-6 text-2xl text-gray-900 sm:text-[1.65rem]"
            style={{ fontFamily: "var(--font-dm-serif-display), Georgia, serif" }}
          >
            {children}
          </h3>
        ),
        h3: ({ children }) => (
          <h4 className="mt-6 text-xl font-semibold text-gray-900">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="mt-4 leading-8 text-gray-800">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mt-4 list-disc space-y-2.5 pl-6">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-4 list-decimal space-y-2.5 pl-6">{children}</ol>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-6 rounded-2xl border border-dashed border-sky-300 bg-sky-50/75 px-5 py-4 text-gray-800">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-10 border-sky-200/80" />,
        div: ({ node, children, ...props }) => {
          const className = node?.properties?.className;
          const classStr = Array.isArray(className) ? className.join(" ") : String(className ?? "");
          const classes = ["my-4"];
          if (classStr.includes("text-center")) classes.push("text-center");
          if (classStr.includes("tile-pair-examples")) classes.push("tile-pair-examples");
          return (
            <div className={classes.join(" ")} {...props}>
              {children}
            </div>
          );
        },
        table: ({ children }) => (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-sky-200/80 bg-white/80 shadow-sm">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-sky-50/70 text-gray-900">{children}</thead>
        ),
        th: ({ children }) => (
          <th className="border-b border-sky-200 px-3 py-2 font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border-b border-sky-100 px-3 py-2 align-top">
            {children}
          </td>
        ),
        pre: ({ node, children }) => {
          const codeNode = node?.children?.[0] as {
            properties?: { className?: string[] };
            children?: Array<{ type?: string; value?: string }>;
          } | undefined;
          const cls = codeNode?.properties?.className ?? [];
          const classStr = Array.isArray(cls) ? cls.join(" ") : String(cls);
          if (classStr.includes("language-animation")) {
            const textNode = codeNode?.children?.[0];
            const content =
              textNode && "value" in textNode && typeof textNode.value === "string"
                ? textNode.value
                : null;
            if (content) {
              const config = parseAnimationConfig(content);
              if (config) {
                return (
                  <FrameAnimation
                    frames={config.frames}
                    fps={config.fps}
                    loop
                  />
                );
              }
            }
          }
          if (classStr.includes("language-small-cards")) {
            return <SmallCardCarousel />;
          }
          if (classStr.includes("language-big-card")) {
            return <BigCard />;
          }
          if (classStr.includes("language-goulash")) {
            return <GoulashCard />;
          }
          if (classStr.includes("language-east-round")) {
            return <EastRoundCard />;
          }
          return (
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-sky-200/80 bg-sky-50/50 p-4 text-sm">
              {children}
            </pre>
          );
        },
        img: ({ src, alt, title }) => {
          if (!src || typeof src !== "string") return null;
          const isTile =
            /\/images\/(Bamboo|Character|Dot|Dragon|Flower|Season|Wind)_/.test(
              src
            );
          if (isTile) {
            return (
              <span className="my-2 mr-1 inline-flex">
                <img
                  src={src}
                  alt={alt ?? ""}
                  className="h-16 w-auto rounded border border-sky-100 shadow-sm"
                />
              </span>
            );
          }
          return (
            <figure className="mt-8 rounded-2xl border border-sky-200/80 bg-white/85 p-3 shadow-sm">
              <img
                src={src}
                alt={alt ?? ""}
                className="w-full rounded-xl border border-sky-100"
              />
              {(title || alt) && (
                <figcaption className="mt-3 text-sm text-gray-700">
                  {title || alt}
                </figcaption>
              )}
            </figure>
          );
        },
        a: ({ href, children }) => {
          if (!href) return <>{children}</>;
          const isInternal = href.startsWith("/");
          if (isInternal) {
            return (
              <Link
                href={href}
                className="text-sky-700 underline underline-offset-2 hover:text-sky-800"
              >
                {children}
              </Link>
            );
          }
          return (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-800"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
