import type { Metadata } from "next";
import "./globals.css";
import { mentor } from "@/lib/content";

// Note: this build intentionally avoids next/font/google so the project
// builds with zero external network calls. The font stacks in
// tailwind.config.ts use polished system-font fallbacks. To use a real
// Google Font (e.g. Fraunces + Inter, as originally designed), re-add
// next/font/google imports here once you have network access — see
// README.md "Fonts" section for the exact snippet.

export const metadata: Metadata = {
  title: `${mentor.name} — IELTS Mentor in Dhaka | Clarity, Strategy, Confidence`,
  description:
    "Personalized IELTS mentoring built around strategy, clarity, confidence, and your individual goals. IELTS Academic 8.0 Overall. Meet your mentor and start your IELTS journey.",
  keywords: [
    "IELTS mentor",
    "IELTS mentor in Bangladesh",
    "IELTS preparation",
    "IELTS Writing mentor",
    "IELTS Speaking mentor",
    "IELTS Band 7 mentor",
    "IELTS guidance",
    "IELTS strategy",
    "IELTS study abroad guidance",
  ],
  openGraph: {
    title: `${mentor.name} — IELTS Mentor`,
    description:
      "IELTS isn't just a test. It's a journey. Personalized IELTS mentoring built around strategy, clarity, and confidence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
