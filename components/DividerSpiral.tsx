"use client";

import { motion } from "framer-motion";

const RING_COUNT = 16;

/**
 * A row of coil rings threaded along the seam between two sections — a
 * literal spiral-notebook binding standing in for a plain color
 * transition, in keeping with the site's journal / "Mentor Notes"
 * identity. Every other ring is hidden below `sm` so spacing stays
 * legible on narrow screens instead of crowding.
 */
export function DividerSpiral() {
  return (
    <div
      className="absolute inset-x-0 top-1/2 mx-auto flex max-w-content -translate-y-1/2 justify-between px-5 sm:px-8"
      aria-hidden
    >
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35, delay: i * 0.025, ease: [0.22, 1, 0.36, 1] }}
          className={`h-4 w-4 shrink-0 rounded-full border-2 border-compass-gold sm:h-5 sm:w-5 ${
            i % 2 !== 0 ? "hidden sm:block" : ""
          }`}
        />
      ))}
    </div>
  );
}
