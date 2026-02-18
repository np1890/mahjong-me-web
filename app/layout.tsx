import type { Metadata } from "next";
import { DM_Serif_Display, DM_Serif_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteBackground from "@/components/site-background";
import SiteHeader from "@/components/site-header";
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
    "Learn Mahjong through structured lessons, glossary terms, strategy coaching, and AI gameplay.",
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
        <SiteBackground />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
