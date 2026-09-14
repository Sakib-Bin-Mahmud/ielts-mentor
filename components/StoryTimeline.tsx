import { storyTimeline } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Placeholder } from "./Placeholder";

export function StoryTimeline() {
  return (
    <section id="story" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Story Behind the Mentor"
          title="Not a résumé. A path."
          subtitle="Every mentor's method is shaped by how they got here. This is that path, one chapter at a time."
        />
      </div>

      {/* Personal / journey photo — the site's one full-bleed editorial break */}
      <Reveal delay={0.1} className="my-12 sm:my-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[3/1]">
          <Placeholder
            className="absolute inset-0 flex items-center justify-center border-y border-ink/10 bg-paper-dim text-center"
            label="Add a candid, personal photo"
          >
            <span className="text-sm text-ink-soft/60">
              [ Personal / journey photo ]
            </span>
          </Placeholder>
          <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.25]" />
        </div>
      </Reveal>

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="relative">
          <div className="absolute left-[7px] top-1 hidden h-full w-px bg-ink/10 sm:block" />
          <ol className="space-y-10 sm:space-y-14">
            {storyTimeline.map((chapter, i) => (
              <li key={i} className="group relative sm:pl-10">
                <Reveal delay={Math.min(i * 0.05, 0.3)}>
                  <span className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-compass-gold bg-paper transition-transform duration-300 group-hover:scale-125 sm:block" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-compass-gold">
                      {chapter.year}
                    </span>
                    <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-clarity-teal sm:text-2xl">
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
