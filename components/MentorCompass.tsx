"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { compassDirections } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const posClasses: Record<string, string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-y-1/2",
};

export function MentorCompass() {
  const [active, setActive] = useState(compassDirections[0].key);
  const current = compassDirections.find((d) => d.key === active)!;

  return (
    <section className="relative overflow-hidden bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Mentor's Compass"
          title="Four directions. One mindset."
          subtitle="This is the signature idea behind every session — pick a direction to see what it means."
        />

        {/* Desktop / tablet compass */}
        <Reveal className="mt-16 hidden justify-center sm:flex">
          <div className="relative h-[340px] w-[340px]">
            <div className="absolute inset-10 rounded-full border border-dashed border-ink/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-ink text-paper shadow-lg">
                <span className="font-display text-lg italic">You</span>
              </div>
            </div>

            {compassDirections.map((d) => (
              <button
                key={d.key}
                onClick={() => setActive(d.key)}
                className={`absolute ${posClasses[d.position]} flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 text-center transition-all ${
                  active === d.key
                    ? "border-compass-gold bg-compass-gold text-ink shadow-lg scale-110"
                    : "border-ink/15 bg-white/70 text-ink-soft hover:border-compass-gold/60"
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide">
                  {d.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-ink/10 bg-white/70 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-compass-gold">
                {current.label}
              </p>
              <p className="mt-3 font-display text-xl italic leading-snug text-ink">
                “{current.insight}”
              </p>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        {/* Mobile: stacked, touch-friendly */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:hidden">
          {compassDirections.map((d) => {
            const isActive = active === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setActive(isActive ? d.key : d.key)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  isActive
                    ? "border-compass-gold bg-compass-gold/10"
                    : "border-ink/10 bg-white/60"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-compass-gold">
                  {d.label}
                </p>
                <p className="mt-1 text-sm italic text-ink-soft/80">
                  “{d.insight}”
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
