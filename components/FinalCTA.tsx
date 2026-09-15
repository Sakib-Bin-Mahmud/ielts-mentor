import { finalCta, bandLanguage } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="scroll-mt-20 relative overflow-hidden bg-navy py-24 text-paper sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise-dark opacity-[0.5]" />

      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            {finalCta.title} <span className="italic text-compass-gold">{finalCta.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/75">{finalCta.subtitle}</p>
        </Reveal>

        {/* Subtle journey line, leading down toward the CTA */}
        <Reveal delay={0.2} className="flex flex-col items-center">
          <span aria-hidden className="mt-8 h-10 w-px bg-paper/20" />
          <span aria-hidden className="-mt-0.5 h-1.5 w-1.5 rounded-full bg-compass-gold" />
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a
              href="#final-cta"
              className="w-full max-w-xs rounded-full bg-compass-gold px-8 py-3.5 text-center text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:max-w-none"
            >
              {finalCta.primary}
            </a>
            <a
              href="#final-cta"
              className="w-full max-w-xs rounded-full border border-paper/30 px-8 py-3.5 text-center text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper hover:text-ink sm:w-auto sm:max-w-none"
            >
              {finalCta.secondary}
            </a>
          </div>

          {/* Band-score marker — an illustrative range, not a promised outcome */}
          <div className="mx-auto mt-16 flex max-w-sm items-center gap-3">
            <span className="font-mono text-xs text-paper/35">{bandLanguage[0].score}</span>
            <span aria-hidden className="h-px flex-1 bg-paper/15" />
            <span className="font-mono text-xs text-paper/35">{bandLanguage[1].score}</span>
            <span aria-hidden className="h-px flex-1 bg-paper/15" />
            <span className="font-mono text-xs text-paper/35">{bandLanguage[2].score}</span>
            <span aria-hidden className="h-px flex-1 bg-paper/15" />
            <span className="font-mono text-xs text-paper/35">{bandLanguage[3].score}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
