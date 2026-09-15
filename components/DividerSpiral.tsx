"use client";

import { motion } from "framer-motion";

const RING_COUNT = 16;

/**
 * A row of coil loops threaded along the seam between two sections — a
 * literal spiral-notebook binding standing in for a plain color
 * transition, in keeping with the site's journal / "Mentor Notes"
 * identity. Every other loop is hidden below `sm` so spacing stays
 * legible on narrow screens instead of crowding.
 */
export function DividerSpiral() {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2" aria-hidden>
      {/* Faint groove shadow — the coil pressing a crease into the paper */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 bg-gradient-to-b from-navy/10 via-transparent to-navy/10" />

      <div className="relative mx-auto flex max-w-content justify-between px-5 sm:px-8">
        {Array.from({ length: RING_COUNT }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.025, ease: [0.22, 1, 0.36, 1] }}
            className={`relative block h-5 w-3 shrink-0 rounded-full bg-compass-gold shadow-sm sm:h-6 sm:w-3.5 ${
              i % 2 !== 0 ? "hidden sm:block" : ""
            }`}
          >
            {/* Punched hole through the middle of the loop */}
            <span className="absolute left-1/2 top-1/2 h-2 w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy/25" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}
