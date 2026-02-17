import type { Metadata } from "next";
import { DM_Serif_Display, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MahjongMe | Mahjong Rules & Strategy",
  description:
    "Learn Mahjong rules and strategy. Interactive lessons and AI coaching coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSerifText.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
