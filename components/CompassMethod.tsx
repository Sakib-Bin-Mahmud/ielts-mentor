import { compassMethod } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function CompassMethod() {
  return (
    <section id="method" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Approach"
          title={compassMethod.name}
          subtitle="A repeatable framework — adapted to each student, never applied as a rigid template."
        />

        <div className="mt-14 border-t border-ink/10">
          {compassMethod.steps.map((step, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.28)}>
              <div className="flex items-start gap-5 border-b border-ink/10 py-6 transition-colors duration-300 hover:bg-paper-dim/40 sm:gap-8 sm:py-7">
                <span className="w-8 shrink-0 font-display text-3xl font-semibold leading-none text-compass-gold sm:w-10 sm:text-4xl">
                  {step.letter}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                    {step.word}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-soft/70 sm:text-base">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
