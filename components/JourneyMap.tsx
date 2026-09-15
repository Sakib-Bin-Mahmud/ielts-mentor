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

        {/* A connected path of waypoints, not a grid of feature cards —
            the arrows double as the "line" and hold up under wrapping. */}
        <div className="mt-16 overflow-x-auto pb-4">
          <ol className="flex min-w-[760px] items-start gap-2 sm:min-w-0 sm:flex-wrap sm:gap-y-10">
            {journeyMap.map((stage, i) => (
              <li key={stage.key} className="flex flex-1 items-start gap-2 sm:flex-none sm:basis-[calc(25%-0.375rem)]">
                <Reveal delay={Math.min(i * 0.04, 0.3)} className="flex-1 text-center">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border-2 border-compass-gold font-mono text-xs font-semibold text-compass-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-base font-medium uppercase tracking-tight text-ink">
                    {stage.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-ink-soft/70">
                    {stage.text}
                  </p>
                </Reveal>
                {i < journeyMap.length - 1 && (
                  <span className="hidden shrink-0 pt-2 text-ink/20 sm:block" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Band score as a real spectrum — a connected line with the
            starting point marked, not four isolated numbers. */}
        <div className="mt-20 border-t border-ink/10 pt-14">
          <div className="overflow-x-auto pb-2">
            <div className="relative flex min-w-[520px] justify-between sm:min-w-0">
              <div
                aria-hidden
                className="absolute left-[7px] right-[7px] top-[7px] h-px bg-ink/15"
              />
              {bandLanguage.map((b, i) => {
                const isStart = i === 0;
                return (
                  <Reveal
                    key={b.score}
                    delay={Math.min(i * 0.06, 0.3)}
                    className="relative flex-1 text-center"
                  >
                    <span
                      className={`relative z-10 mx-auto block h-3.5 w-3.5 rounded-full border-2 ${
                        isStart
                          ? "border-compass-gold bg-compass-gold"
                          : "border-ink/25 bg-paper"
                      }`}
                    />
                    <p className="mt-4 font-mono text-4xl font-semibold text-ink sm:text-5xl">
                      {b.score}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-teal">
                      {b.label}
                    </p>
                    {isStart && (
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-ink-soft/50">
                        You are here
                      </p>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
