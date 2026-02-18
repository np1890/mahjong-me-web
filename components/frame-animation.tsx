"use client";

import { useEffect, useState } from "react";

type FrameAnimationProps = {
  /** Frame indices (1-based, inclusive). e.g. [1,2,...,11] for frames 1-11 */
  frames: number[];
  /** Frames per second (can be fractional, e.g. 0.5 = one frame every 2 seconds) */
  fps?: number;
  /** Whether to loop the animation */
  loop?: boolean;
  /** Base path for images, e.g. /images */
  basePath?: string;
  /** File name pattern: {n} is replaced with frame number, {name} with frame name */
  fileNamePattern?: (n: number) => string;
  className?: string;
};

const DEALING_FRAME_NAMES: Record<number, string> = {
  1: "1_Shuffle",
  2: "2_Build Walls",
  3: "3_Wall Break",
  4: "4_Wall Break",
  5: "5_Wall Break",
  6: "6_Wall Break",
  7: "7_Wall Break",
  8: "8_Wall Break",
  9: "9_Wall Break",
  10: "10_Wall Break",
  11: "11_Flower Wall",
  12: "12_Deal",
  13: "13_Deal",
  14: "14_Deal",
  15: "15_Deal",
  16: "16_Deal",
  17: "17_Deal",
  18: "18_Deal",
  19: "19_Deal",
  20: "20_Deal",
  21: "21_Deal",
  22: "22_Deal",
  23: "23_Deal",
  24: "24_Deal",
  25: "25_Deal",
  26: "26_Deal",
  27: "27_Deal",
  28: "28_Deal",
};

export default function FrameAnimation({
  frames,
  fps = 12,
  loop = true,
  basePath = "/images",
  fileNamePattern,
  className = "",
}: FrameAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getFileName = (n: number) => {
    if (fileNamePattern) return fileNamePattern(n);
    const name = DEALING_FRAME_NAMES[n];
    return name ? `${name}.png` : `${n}.png`;
  };

  const imagePaths = frames.map((n) => `${basePath}/${getFileName(n)}`);
  const intervalMs = 1000 / fps;

  useEffect(() => {
    if (frames.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= frames.length) {
          return loop ? 0 : prev;
        }
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [frames.length, intervalMs, loop]);

  const currentFrame = frames[currentIndex];
  const fileName = getFileName(currentFrame);
  const src = `${basePath}/${encodeURIComponent(fileName)}`;

  return (
    <figure
      className={`my-6 overflow-hidden rounded-2xl border border-sky-200/80 bg-white/85 shadow-sm ${className}`}
    >
      <div className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="w-full rounded-xl border-0 object-contain"
        />
      </div>
    </figure>
  );
}
