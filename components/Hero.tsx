"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { hero, scoreScale, mentor } from "@/lib/content";
import { Placeholder } from "./Placeholder";

export function Hero() {
  const [value, setValue] = useState(7.0);
  const percent =
    ((value - scoreScale.current) / (scoreScale.goal - scoreScale.current)) * 100;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pb-14 pt-24 sm:pb-14 sm:pt-32 lg:flex lg:min-h-[85vh] lg:items-center lg:pb-12 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.35]" />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* LEFT — statement */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-clarity-teal"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.title}
            <br />
            <span className="italic text-clarity-teal">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-lg text-ink-soft/80"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#final-cta"
              className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-clarity-teal"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#story"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-navy hover:bg-navy hover:text-paper"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 text-xs text-ink-soft/50"
          >
            {mentor.credentials.map((c) => `${c.label}: ${c.value}`).join(" · ")}
          </motion.p>
        </div>

        {/* RIGHT — editorial portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[6/7] w-full">
            {/* Solid offset backing panel — a mounted-card layer, no blur */}
            <div
              aria-hidden
              className="absolute -bottom-5 -right-5 h-full w-full rounded-xl bg-navy"
            />

            {/* Photo frame */}
            <div className="absolute inset-0 overflow-hidden rounded-xl border border-ink/10 bg-paper-dim">
              <Placeholder
                className="absolute inset-4 bottom-20 flex items-center justify-center rounded-lg border-2 border-dashed border-ink/15 bg-white/40 text-center sm:bottom-24"
                label="Add mentor's portrait photo"
              >
                <span className="px-6 text-sm text-ink-soft/60">
                  [ Editorial portrait ]
                </span>
              </Placeholder>

              {/* Passport-style identity plate */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-navy px-5 py-4">
                <div>
                  <p className="font-display text-base font-medium text-paper">
                    {mentor.name}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
                    {mentor.role}
                  </p>
                </div>
                <span aria-hidden className="font-mono text-xs text-compass-gold">
                  ✦
                </span>
              </div>
            </div>

            {/* Print-style registration marks at the frame's corners */}
            <span aria-hidden className="pointer-events-none absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-ink/25" />
            <span aria-hidden className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-ink/25" />
            <span aria-hidden className="pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-ink/25" />
          </div>

          {/* Compact interactive band-score element, adjacent to the portrait */}
          <div className="mt-6 flex items-end gap-6">
            <div className="shrink-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/50">
                {scoreScale.label}
              </p>
              <p className="mt-1 font-mono text-3xl font-semibold text-compass-gold">
                {scoreScale.goal.toFixed(1)}
              </p>
            </div>

            <div className="flex-1 pb-1">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/50">
                Current <span aria-hidden>→</span> Goal
              </p>
              <div className="relative">
                <div className="h-1 w-full rounded-full bg-ink/10">
                  <div
                    className="h-1 rounded-full bg-clarity-teal transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <input
                  type="range"
                  min={scoreScale.current}
                  max={scoreScale.goal}
                  step={0.5}
                  value={value}
                  onChange={(e) => setValue(parseFloat(e.target.value))}
                  aria-label="Drag to explore your journey from your current band to your goal band"
                  className="absolute inset-x-0 top-1/2 h-1 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent
                    [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-navy
                    [&::-webkit-slider-thumb]:bg-paper [&::-webkit-slider-thumb]:shadow-sm
                    [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-navy [&::-moz-range-thumb]:bg-paper"
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-ink-soft/50">
                <span>{scoreScale.current.toFixed(1)}</span>
                <span>{scoreScale.goal.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
