import { storyTimeline } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function StoryTimeline() {
  return (
    <section id="story" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Story Behind the Mentor"
          title="Not a résumé. A path."
          subtitle="Every mentor's method is shaped by how they got here. This is that path, one chapter at a time."
        />

        <div className="relative mt-14">
          <div className="absolute left-[7px] top-1 hidden h-full w-px bg-ink/10 sm:block" />
          <ol className="space-y-10 sm:space-y-14">
            {storyTimeline.map((chapter, i) => (
              <li key={i} className="relative sm:pl-10">
                <Reveal delay={Math.min(i * 0.05, 0.3)}>
                  <span className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-compass-gold bg-paper sm:block" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-compass-gold">
                      {chapter.year}
                    </span>
                    <h3 className="font-display text-xl text-ink sm:text-2xl">
                      {chapter.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-2xl text-base text-ink-soft/80">
                    {chapter.text}
                  </p>
                  <p className="mt-2 max-w-2xl font-display text-base italic text-clarity-teal">
                    “{chapter.lesson}”
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
