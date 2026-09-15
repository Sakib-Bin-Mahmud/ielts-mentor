import { resources } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

export function Resources() {
  return (
    <section id="resources" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Resources & Insights"
          title="Writing worth reading, not a course catalog"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={Math.min(i * 0.06, 0.24)}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-clarity-teal/40 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-clarity-teal">
                  {r.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium text-ink group-hover:underline">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                  <Placeholder label="Write a real excerpt">{r.excerpt}</Placeholder>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
