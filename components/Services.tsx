import { services } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Mentoring, Not a Course Marketplace"
          title="How we can work together"
          subtitle="A short list, on purpose. Every path is shaped around outcomes and experience, not a long feature list."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.key} delay={Math.min(i * 0.06, 0.3)}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper-dim p-6 transition-shadow hover:shadow-md">
                <h3 className="font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft/75">
                  {s.text}
                </p>
                <a
                  href="#final-cta"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-clarity-teal"
                >
                  Talk to me <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
