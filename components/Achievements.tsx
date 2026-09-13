import { achievements } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

export function Achievements() {
  return (
    <section className="bg-ink py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={Math.min(i * 0.05, 0.2)} className="text-center">
              <p className="font-display text-3xl font-semibold text-compass-gold sm:text-4xl">
                {a.placeholder ? (
                  <Placeholder label="Use a real number only">{a.value}</Placeholder>
                ) : (
                  a.value
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
