import { studentStories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

export function StudentStories() {
  return (
    <section id="stories" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Student Stories"
          title="It's about transformation, not just a number."
          subtitle="Real journeys will replace these placeholders as soon as they're ready to share."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {studentStories.map((s) => (
            <Reveal key={s.key}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/70 p-6">
                <p className="text-sm italic text-ink-soft/70">{s.before}</p>
                <div className="my-4 flex items-center gap-2 text-compass-gold">
                  <span className="h-px flex-1 bg-compass-gold/30" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Turning point
                  </span>
                  <span className="h-px flex-1 bg-compass-gold/30" />
                </div>
                <p className="text-sm italic text-ink-soft/70">{s.turningPoint}</p>
                <div className="mt-5 rounded-xl bg-ink px-4 py-4 text-paper">
                  <p className="font-display text-2xl font-semibold">
                    {s.placeholder ? (
                      <Placeholder label="Add real band score">{s.afterScore}</Placeholder>
                    ) : (
                      s.afterScore
                    )}
                  </p>
                  <p className="mt-1 text-xs text-paper/70">{s.afterDetail}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-ink-soft/50">
                  {s.placeholder ? (
                    <Placeholder label="Add real student name (with permission)">
                      {s.name}
                    </Placeholder>
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
