"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personas } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WhoIHelp() {
  const [active, setActive] = useState(personas[0].key);
  const current = personas.find((p) => p.key === active)!;

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-paper sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise-dark opacity-[0.5]" />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-light">
            Who I Help
          </p>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-[2.75rem]">
            You might recognize yourself here.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Choose the one that sounds like you.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Selector — a large vertical list of identities, not a card grid */}
          <div className="flex flex-col divide-y divide-paper/10 border-y border-paper/10">
            {personas.map((p, i) => {
              const isActive = p.key === active;
              return (
                <button
                  key={p.key}
                  onClick={() => setActive(p.key)}
                  className="group flex items-baseline justify-between gap-4 py-5 text-left sm:gap-5"
                >
                  <span className="flex items-baseline gap-4 sm:gap-5">
                    <span
                      className={`font-mono text-xs shrink-0 transition-colors duration-300 ${
                        isActive ? "text-compass-gold" : "text-paper/30"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`text-balance font-display uppercase leading-tight tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-2xl font-medium text-paper sm:text-3xl"
                          : "text-xl text-paper/35 group-hover:text-paper/60 sm:text-2xl"
                      }`}
                    >
                      {p.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-lg transition-all duration-300 group-hover:translate-x-1 ${
                      isActive ? "text-compass-gold" : "text-paper/0 group-hover:text-paper/40"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reveal panel — quote, mentor's response, and a relevant CTA */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-paper/15 bg-navy-soft p-7 sm:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clarity-light">
                  {current.title}
                </p>
                <p className="mt-4 text-balance font-display text-2xl italic leading-snug text-paper sm:text-3xl">
                  “{current.quote}”
                </p>

                <div className="mt-7 border-l-2 border-compass-gold pl-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-compass-gold/80">
                    Mentor response
                  </p>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
                    {current.message}
                  </p>
                </div>

                <a
                  href="#final-cta"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors hover:text-clarity-light"
                >
                  {current.cta}{" "}
                  <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
