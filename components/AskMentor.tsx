import { askMentor } from "@/lib/content";
import { Reveal } from "./Reveal";

export function AskMentor() {
  return (
    <section className="bg-clarity-teal py-20 text-paper sm:py-24">
      <div className="mx-auto max-w-content px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">{askMentor.title}</h2>
          <div className="mx-auto mt-5 max-w-md space-y-1 text-paper/85">
            {askMentor.lines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
          <a
            href="#final-cta"
            className="mt-8 inline-block rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            {askMentor.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
