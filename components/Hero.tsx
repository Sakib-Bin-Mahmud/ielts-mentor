"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { hero, scoreScale, mentor } from "@/lib/content";

export function Hero() {
  const [value, setValue] = useState(7.0);
  const percent =
    ((value - scoreScale.current) / (scoreScale.goal - scoreScale.current)) * 100;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pb-14 pt-24 sm:pb-14 sm:pt-32 lg:flex lg:min-h-[85vh] lg:items-center lg:pb-12 lg:pt-24"
    >
      <div className="relative mx-auto grid w-full max-w-content items-center gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* LEFT — statement */}
        <div className="order-2 lg:order-none">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-clarity-teal"
          >
            {mentor.shortName} · {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-[2.15rem] font-semibold leading-[1.1] text-ink sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-[3.4rem]"
          >
            {hero.title}
            <br />
            <span className="italic text-clarity-teal">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-md text-base text-ink-soft/80 sm:mt-6 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#final-cta"
              className="w-full rounded-full bg-navy px-8 py-3.5 text-center text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-clarity-teal hover:shadow-md sm:w-auto"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#story"
              className="w-full rounded-full border border-ink/20 px-8 py-3.5 text-center text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-paper sm:w-auto"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Trust markers — the same value props stated elsewhere on the
              site (Services, Compass Method, Philosophy), surfaced early */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ink-soft/70"
          >
            <li>1:1 Mentoring, Not a Course</li>
            <li className="hidden sm:list-item">·</li>
            <li>A Named Method</li>
            <li className="hidden sm:list-item">·</li>
            <li>Real Feedback, Not Templates</li>
          </motion.ul>

          {/* Compact interactive band-score element */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex max-w-md items-end gap-6"
          >
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
          </motion.div>
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
              <Image
                src="/images/mentor-portrait.jpg"
                alt={`${mentor.name}, ${mentor.role}`}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 384px, 100vw"
                className="object-cover"
              />

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

              {/* Subtle film-grain texture, ties the photo to the site's paper-grain motif */}
              <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.2]" />
            </div>

            {/* Print-style registration marks at the frame's corners */}
            <span aria-hidden className="pointer-events-none absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-ink/25" />
            <span aria-hidden className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-ink/25" />
            <span aria-hidden className="pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-ink/25" />
          </div>

          {/* Credential trust line, below the portrait */}
          <p className="mt-6 text-center text-xs text-ink-soft/50 lg:text-left">
            {mentor.credentials.map((c) => `${c.label}: ${c.value}`).join(" · ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
