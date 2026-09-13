"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { compassDirections } from "@/lib/content";
import { Reveal } from "./Reveal";

type Position = "top" | "right" | "bottom" | "left";

const angleFor: Record<Position, number> = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

// Anchors each node flush to its edge of the diagram (matching the hub's spokes).
const nodePosClasses: Record<Position, string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-y-1/2",
};

// Positions each spoke so it runs from the diagram's center out to its edge.
const spokePosClasses: Record<Position, string> = {
  top: "left-1/2 bottom-1/2 -translate-x-1/2",
  bottom: "left-1/2 top-1/2 -translate-x-1/2",
  right: "top-1/2 left-1/2 -translate-y-1/2",
  left: "top-1/2 right-1/2 -translate-y-1/2",
};

// Dot sits nearer the hub, label sits further out — order and flex axis vary by side.
const nodeLayout: Record<Position, { flex: string; order: Array<"dot" | "label"> }> = {
  top: { flex: "flex flex-col items-center gap-2.5", order: ["label", "dot"] },
  bottom: { flex: "flex flex-col items-center gap-2.5", order: ["dot", "label"] },
  left: { flex: "flex flex-row items-center gap-2.5", order: ["label", "dot"] },
  right: { flex: "flex flex-row items-center gap-2.5", order: ["dot", "label"] },
};

const SPOKE_LENGTH = 110;

export function MentorCompass() {
  const [active, setActive] = useState<Position | string>(compassDirections[0].key);
  const current = compassDirections.find((d) => d.key === active)!;
  const activePosition = current.position as Position;

  return (
    <section className="relative overflow-hidden bg-navy py-20 text-paper sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise-dark opacity-[0.5]" />

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-light">
            The Mentor&rsquo;s Compass
          </p>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-[2.75rem]">
            Four directions. One mindset.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            This is the signature idea behind every session — pick a direction to see what it
            means.
          </p>
        </Reveal>

        {/* Desktop / tablet diagram */}
        <Reveal delay={0.1} className="mt-16 hidden justify-center sm:flex">
          <div className="relative h-[380px] w-[380px]">
            {/* Spokes */}
            {compassDirections.map((d) => {
              const position = d.position as Position;
              const isActive = active === d.key;
              const vertical = position === "top" || position === "bottom";
              return (
                <span
                  key={d.key}
                  aria-hidden
                  className={`absolute transition-colors duration-500 ${spokePosClasses[position]} ${
                    isActive ? "bg-clarity-teal" : "bg-paper/15"
                  }`}
                  style={
                    vertical
                      ? { width: isActive ? 2 : 1, height: SPOKE_LENGTH }
                      : { height: isActive ? 2 : 1, width: SPOKE_LENGTH }
                  }
                />
              );
            })}

            {/* Center identity mark — rotates gently to "orient" toward the active direction */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ rotate: angleFor[activePosition] }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full border border-compass-gold/50 bg-clarity-teal shadow-md"
              >
                <span
                  className="font-display text-lg italic text-paper"
                  style={{ transform: `rotate(${-angleFor[activePosition]}deg)` }}
                >
                  You
                </span>
                <span
                  aria-hidden
                  className="absolute left-1/2 top-0 h-2 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-compass-gold"
                />
              </motion.div>
            </div>

            {/* Direction nodes */}
            {compassDirections.map((d) => {
              const position = d.position as Position;
              const isActive = active === d.key;
              const layout = nodeLayout[position];
              const dot = (
                <span
                  key="dot"
                  aria-hidden
                  className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                    isActive ? "scale-125 bg-clarity-teal ring-2 ring-clarity-teal/30" : "bg-paper/30"
                  }`}
                />
              );
              const label = (
                <span
                  key="label"
                  className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-paper/50"
                  }`}
                >
                  {d.label}
                </span>
              );
              return (
                <button
                  key={d.key}
                  onMouseEnter={() => setActive(d.key)}
                  onClick={() => setActive(d.key)}
                  className={`absolute ${layout.flex} ${nodePosClasses[position]}`}
                >
                  {layout.order.map((part) => (part === "dot" ? dot : label))}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-paper/15 bg-navy-soft p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-clarity-light">
                {current.label}
              </p>
              <p className="mt-3 font-display text-xl italic leading-snug text-paper">
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
                onClick={() => setActive(d.key)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  isActive ? "border-clarity-teal bg-clarity-teal/10" : "border-paper/15"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-clarity-light">
                  {d.label}
                </p>
                <p className="mt-1 text-sm italic text-paper/70">“{d.insight}”</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
