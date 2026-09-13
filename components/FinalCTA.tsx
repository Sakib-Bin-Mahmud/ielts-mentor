import { finalCta } from "@/lib/content";
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
          <h2 className="text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-paper/75">
            {finalCta.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#ask"
              className="rounded-full bg-compass-gold px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {finalCta.primary}
            </a>
            <a
              href="#ask"
              className="rounded-full border border-paper/30 px-8 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {finalCta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
