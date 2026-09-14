import { ReactNode } from "react";
import { studentStories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

function Stage({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/50">
        {eyebrow}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden className="my-5 text-ink-soft/25">
      ↓
    </div>
  );
}

export function StudentStories() {
  return (
    <section id="stories" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Student Stories"
          title="It's about transformation, not just a number."
          subtitle="Real journeys will replace these placeholders as soon as they're ready to share."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {studentStories.map((s, i) => (
            <Reveal key={s.key} delay={Math.min(i * 0.08, 0.24)}>
              <div className="flex h-full flex-col border-t border-ink/15 pt-6">
                <Stage eyebrow="Before">
                  <p className="font-display text-4xl font-normal leading-none text-ink-soft/70 sm:text-5xl">
                    {s.placeholder ? (
                      <Placeholder label="Add real starting band score">{s.startScore}</Placeholder>
                    ) : (
                      s.startScore
                    )}
                  </p>
                  <p className="mt-2 text-xs text-ink-soft/50">
                    {s.placeholder ? (
                      <Placeholder label="Add real starting section detail">{s.startDetail}</Placeholder>
                    ) : (
                      s.startDetail
                    )}
                  </p>
                </Stage>

                <FlowArrow />

                <Stage eyebrow="The Challenge">
                  <p className="font-display text-lg italic leading-snug text-ink">{s.challenge}</p>
                </Stage>

                <FlowArrow />

                <Stage eyebrow="The Turning Point">
                  <span className="inline-block rounded-full border border-clarity-teal/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-clarity-teal">
                    Mentoring
                  </span>
                  <p className="mt-3 font-display text-lg italic leading-snug text-ink">
                    {s.turningPoint}
                  </p>
                </Stage>

                <FlowArrow />

                <Stage eyebrow="After">
                  <p className="font-display text-5xl font-semibold leading-none text-compass-gold sm:text-6xl">
                    {s.placeholder ? (
                      <Placeholder label="Add real result band score">{s.resultScore}</Placeholder>
                    ) : (
                      s.resultScore
                    )}
                  </p>
                  <p className="mt-2 text-xs text-ink-soft/50">
                    {s.placeholder ? (
                      <Placeholder label="Add real result section detail">{s.resultDetail}</Placeholder>
                    ) : (
                      s.resultDetail
                    )}
                  </p>
                </Stage>

                <p className="mt-6 text-xs font-medium text-ink-soft/50">
                  {s.placeholder ? (
                    <Placeholder label="Add real student name (with permission)">{s.name}</Placeholder>
                  ) : (
                    s.name
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
