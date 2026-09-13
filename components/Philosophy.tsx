"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { philosophyPrinciples, philosophyIntro } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Philosophy() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="philosophy" className="scroll-mt-20 bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-compass-gold">
            My IELTS Philosophy
          </p>
          <h2 className="max-w-2xl text-balance font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            {philosophyIntro}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyPrinciples.map((p, i) => {
            const isActive = active === p.key;
            return (
              <Reveal key={p.key} delay={Math.min(i * 0.06, 0.3)}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : p.key)}
                  onMouseEnter={() => setActive(p.key)}
                  onMouseLeave={() => setActive((cur) => (cur === p.key ? null : cur))}
                  className="group relative flex h-full w-full flex-col rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 text-left transition-colors hover:border-compass-gold/60 hover:bg-paper/[0.08]"
                >
                  <span className="font-mono text-xs text-compass-gold/80">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-paper/60">{p.short}</p>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 overflow-hidden text-sm leading-relaxed text-paper/80"
                      >
                        {p.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <span className="mt-4 text-xs font-medium text-compass-gold/70 group-hover:text-compass-gold">
                    {isActive ? "Tap again to close" : "Tap to expand"}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
