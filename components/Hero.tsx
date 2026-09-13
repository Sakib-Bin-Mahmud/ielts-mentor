"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { hero, scoreScale, mentor } from "@/lib/content";

function messageFor(value: number) {
  const sorted = [...scoreScale.messages].sort((a, b) => a.at - b.at);
  let match = sorted[0];
  for (const m of sorted) {
    if (value >= m.at) match = m;
  }
  return match.text;
}

export function Hero() {
  const [value, setValue] = useState(scoreScale.startDefault);
  const message = useMemo(() => messageFor(value), [value]);
  const percent =
    ((value - scoreScale.min) / (scoreScale.max - scoreScale.min)) * 100;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.35]" />

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
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
          className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl"
        >
          {hero.title}
          <br />
          <span className="italic text-clarity-teal">{hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-ink-soft/80"
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

        {/* Interactive band-score element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 max-w-xl rounded-xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
            {scoreScale.label}
          </p>

          <div className="relative mb-4 mt-2">
            <div className="h-1.5 w-full rounded-full bg-ink/10">
              <div
                className="h-1.5 rounded-full bg-clarity-teal transition-all"
                style={{ width: `${percent}%` }}
              />
            </div>
            <input
              type="range"
              min={scoreScale.min}
              max={scoreScale.max}
              step={0.5}
              value={value}
              onChange={(e) => setValue(parseFloat(e.target.value))}
              aria-label="Slide to explore your IELTS band goal"
              className="absolute inset-x-0 top-1/2 h-1.5 w-full -translate-y-1/2 cursor-pointer appearance-none bg-transparent
                [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-ink
                [&::-webkit-slider-thumb]:bg-paper [&::-webkit-slider-thumb]:shadow-md
                [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-ink [&::-moz-range-thumb]:bg-paper"
            />
          </div>

          <div className="mb-5 flex items-baseline justify-between font-mono text-xs text-ink-soft/60">
            <span>{scoreScale.min.toFixed(1)}</span>
            <span className="text-base font-semibold text-compass-gold">{value.toFixed(1)}</span>
            <span>{scoreScale.max.toFixed(1)}</span>
          </div>

          <motion.p
            key={message}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="font-display text-lg italic text-ink"
          >
            “{message}”
          </motion.p>
        </motion.div>

        <p className="mt-8 text-xs text-ink-soft/50">
          {mentor.credentials.map((c) => `${c.label}: ${c.value}`).join(" · ")}
        </p>
      </div>
    </section>
  );
}
