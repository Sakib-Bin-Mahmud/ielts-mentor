import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

export function Testimonials() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="What Students Say" title="In their own words" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={Math.min(i * 0.08, 0.3)}>
              <figure className="flex h-full flex-col rounded-xl border border-ink/10 bg-paper-dim p-7">
                <span className="font-display text-4xl leading-none text-compass-gold">
                  “
                </span>
                <blockquote className="mt-1 flex-1 font-display text-lg italic leading-snug text-ink">
                  <Placeholder label="Add a real testimonial">{t.quote}</Placeholder>
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-ink">
                    <Placeholder label="Add student name">{t.name}</Placeholder>
                  </span>
                  <span className="text-ink-soft/60">
                    {" "}
                    · <Placeholder label="Add goal">{t.goal}</Placeholder>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
