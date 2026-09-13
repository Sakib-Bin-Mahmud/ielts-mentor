import { journeyMap, bandLanguage } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function JourneyMap() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="The IELTS Journey"
          title="It's rarely a straight line. It's this."
        />

        <div className="mt-14 overflow-x-auto pb-4">
          <ol className="flex min-w-[720px] items-stretch gap-3 sm:min-w-0 sm:flex-wrap sm:gap-4">
            {journeyMap.map((stage, i) => (
              <li key={stage.key} className="flex flex-1 items-center gap-3">
                <Reveal delay={Math.min(i * 0.04, 0.3)} className="flex-1">
                  <div className="h-full rounded-xl border border-ink/10 bg-paper-dim px-4 py-5">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-compass-gold">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-base text-ink">{stage.title}</p>
                    <p className="mt-1 text-xs leading-snug text-ink-soft/70">
                      {stage.text}
                    </p>
                  </div>
                </Reveal>
                {i < journeyMap.length - 1 && (
                  <span className="hidden shrink-0 text-ink/20 sm:block" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Band score as visual language */}
        <div className="mt-20 grid grid-cols-2 gap-4 border-t border-ink/10 pt-14 sm:grid-cols-4">
          {bandLanguage.map((b, i) => (
            <Reveal key={b.score} delay={Math.min(i * 0.06, 0.3)} className="text-center">
              <p className="font-mono text-4xl font-semibold text-ink sm:text-5xl">
                {b.score}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-teal">
                {b.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
