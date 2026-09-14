import { mentorIntro, mentor } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

export function MentorIntro() {
  return (
    <section className="relative bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-ink/10 bg-ink/5 md:max-w-none">
              <Placeholder
                className="absolute inset-4 flex items-center justify-center rounded-lg border-2 border-dashed border-ink/15 bg-white/40 text-center"
                label="Add a natural teaching/speaking photo"
              >
                <span className="px-6 text-sm text-ink-soft/60">
                  [ Mentor / speaking photo ]
                </span>
              </Placeholder>
              {/* Subtle film-grain texture, matches the hero portrait's treatment */}
              <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />
            </div>

            {/* Credential stat, adjacent to (not overlapping) the photo */}
            <div className="mx-auto mt-4 flex max-w-sm items-baseline gap-2 md:max-w-none">
              <p className="font-mono text-lg font-semibold text-compass-gold">
                {mentor.credentials[0].value.split(" ")[0]}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/50">
                {mentor.credentials[0].label}
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                {mentorIntro.headline}
              </h2>
              <p className="mt-4 max-w-lg font-display text-xl italic text-clarity-teal">
                {mentorIntro.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 max-w-xl space-y-4">
              {mentorIntro.bio.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-soft/85">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-8 border-l-2 border-compass-gold pl-5">
              <p className="font-display text-2xl italic leading-snug text-ink">
                {mentorIntro.belief[0]}
                <br />
                {mentorIntro.belief[1]}
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8">
              <a
                href="#story"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-compass-gold decoration-2 underline-offset-4 transition-colors hover:text-clarity-teal"
              >
                {mentorIntro.cta} <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
