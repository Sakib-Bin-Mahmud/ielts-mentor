"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-teal">
            Mentoring, Not a Course Marketplace
          </p>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-medium uppercase leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Ways We Can Work Together
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
            A short list, on purpose. Every path is shaped around outcomes and experience, not a
            long feature list.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-ink/10">
          {services.map((s, i) => {
            const isHovered = hovered === s.key;
            return (
              <Reveal key={s.key} delay={Math.min(i * 0.05, 0.2)}>
                <a
                  href="#final-cta"
                  onMouseEnter={() => setHovered(s.key)}
                  onMouseLeave={() => setHovered((cur) => (cur === s.key ? null : cur))}
                  className="group flex items-start justify-between gap-6 border-b border-ink/10 py-7 transition-colors hover:bg-paper-dim/50 sm:py-8"
                >
                  <div className="flex gap-5 sm:gap-8">
                    <span className="font-mono text-sm text-compass-gold/80 sm:text-base">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-clarity-teal sm:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm text-ink-soft/70 sm:text-base">
                        {s.short}
                      </p>

                      <AnimatePresence initial={false}>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-md overflow-hidden"
                          >
                            <p className="mt-3 text-sm leading-relaxed text-ink-soft/60">
                              {s.detail}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-xl text-ink-soft/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-clarity-teal"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
