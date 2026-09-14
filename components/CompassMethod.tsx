import { compassMethod } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CompassMethod() {
  return (
    <section id="method" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Mentoring Method"
          title={compassMethod.name}
          subtitle="A repeatable framework — adapted to each student, never applied as a rigid template."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {compassMethod.steps.map((step, i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex h-full flex-col rounded-xl border border-ink/10 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-clarity-teal/40">
                <span className="font-display text-4xl font-semibold text-compass-gold">
                  {step.letter}
                </span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">{step.word}</h3>
                <p className="mt-2 text-sm text-ink-soft/70">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
