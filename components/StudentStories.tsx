"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { studentStories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Placeholder } from "./Placeholder";

type Story = (typeof studentStories)[number];

function Stage({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/50">
        {eyebrow}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden className="my-5 text-ink-soft/25">
      ↓
    </div>
  );
}

function StoryContent({ s }: { s: Story }) {
  return (
    <>
      <Stage eyebrow="Before">
        <p className="font-display text-4xl font-normal leading-none text-ink-soft/70 sm:text-5xl">
          {s.placeholder ? (
            <Placeholder label="Add real starting band score">{s.startScore}</Placeholder>
          ) : (
            s.startScore
          )}
        </p>
        <p className="mt-2 text-xs text-ink-soft/50">
          {s.placeholder ? (
            <Placeholder label="Add real starting section detail">{s.startDetail}</Placeholder>
          ) : (
            s.startDetail
          )}
        </p>
      </Stage>

      <FlowArrow />

      <Stage eyebrow="The Challenge">
        <p className="font-display text-lg italic leading-snug text-ink">{s.challenge}</p>
      </Stage>

      <FlowArrow />

      <Stage eyebrow="The Turning Point">
        <span className="inline-block rounded-full border border-clarity-teal/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-clarity-teal">
          Mentoring
        </span>
        <p className="mt-3 font-display text-lg italic leading-snug text-ink">
          {s.turningPoint}
        </p>
      </Stage>

      <FlowArrow />

      <Stage eyebrow="After">
        <p className="font-display text-5xl font-semibold leading-none text-compass-gold sm:text-6xl">
          {s.placeholder ? (
            <Placeholder label="Add real result band score">{s.resultScore}</Placeholder>
          ) : (
            s.resultScore
          )}
        </p>
        <p className="mt-2 text-xs text-ink-soft/50">
          {s.placeholder ? (
            <Placeholder label="Add real result section detail">{s.resultDetail}</Placeholder>
          ) : (
            s.resultDetail
          )}
        </p>
      </Stage>

      <p className="mt-6 text-xs font-medium text-ink-soft/50">
        {s.placeholder ? (
          <Placeholder label="Add real student name (with permission)">{s.name}</Placeholder>
        ) : (
          s.name
        )}
      </p>
    </>
  );
}

export function StudentStories() {
  const [active, setActive] = useState(0);
  const current = studentStories[active];

  return (
    <section id="stories" className="scroll-mt-20 bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="It's about transformation, not just a number."
          subtitle="Real journeys will replace these placeholders as soon as they're ready to share."
        />

        {/* Mobile / tablet — one story at a time, picked by tab, so three full
            flows don't stack into a very long scroll on a narrow screen. */}
        <div className="mt-10 lg:hidden">
          <div className="flex border-b border-ink/10">
            {studentStories.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                aria-current={active === i}
                className={`min-h-[44px] flex-1 border-b-2 text-center font-mono text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  active === i
                    ? "border-clarity-teal text-clarity-teal"
                    : "border-transparent text-ink-soft/40"
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col pt-7"
            >
              <StoryContent s={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop — full three-column comparison */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {studentStories.map((s, i) => (
            <Reveal key={s.key} delay={Math.min(i * 0.08, 0.24)}>
              <div className="flex h-full flex-col border-t border-ink/15 pt-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-clarity-teal/40">
                <StoryContent s={s} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
