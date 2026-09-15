import { achievements } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";
import { Counter } from "./Counter";

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-paper sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise-dark opacity-[0.5]" />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-10 lg:grid-cols-5">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={Math.min(i * 0.05, 0.2)} className="text-center">
              <p className="font-mono text-3xl font-semibold text-compass-gold sm:text-4xl">
                {a.placeholder ? (
                  <Placeholder label="Use a real number only">{a.value}</Placeholder>
                ) : (
                  <Counter value={a.value} />
                )}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-paper/60">
                {a.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
