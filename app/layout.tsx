import type { Metadata } from "next";
import { Playfair_Display, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { mentor } from "@/lib/content";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

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
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
