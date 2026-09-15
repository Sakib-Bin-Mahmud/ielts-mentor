import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { ArticleBody } from "@/components/ArticleBody";
import { articles, getArticle } from "@/lib/articles";
import { mentor } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — ${mentor.name}`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <main>
      <Navbar />
      <article className="bg-paper pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal>
            <a
              href="/#resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft/60 transition-colors hover:text-clarity-teal"
            >
              <span aria-hidden>←</span> Resources &amp; Insights
            </a>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-teal">
              {article.category} · {article.readingTime} read
            </p>
            <h1 className="mt-3 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft/70">{article.excerpt}</p>

            <div className="mt-8 flex items-center gap-3 border-y border-ink/10 py-4 text-sm">
              <span className="font-display italic text-ink">{mentor.name}</span>
              <span aria-hidden className="text-ink-soft/30">
                ·
              </span>
              <span className="text-ink-soft/60">{mentor.role}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ArticleBody blocks={article.body} />
          </Reveal>
        </div>
      </article>
      <SectionDivider from="paper" to="navy" />
      <FinalCTA />
      <Footer />
    </main>
  );
}
