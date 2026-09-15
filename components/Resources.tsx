import { articles } from "@/lib/articles";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Resources & Insights"
          title="Writing worth reading, not a course catalog"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={Math.min(i * 0.06, 0.24)}>
              <a
                href={`/resources/${a.slug}`}
                className="group flex h-full flex-col rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-clarity-teal/40 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-clarity-teal">
                  {a.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium text-ink group-hover:underline">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft/70">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-clarity-teal">
                  Read the article
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
