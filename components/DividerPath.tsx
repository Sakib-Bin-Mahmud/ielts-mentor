"use client";

import { motion } from "framer-motion";

/**
 * The connective thread inside a chapter-break bridge — a waypoint node
 * with the path line extending from it in both directions, echoing the
 * connected-path visual language from the Journey Map so a divider reads
 * as a step along the same journey rather than a plain color transition.
 */
export function DividerPath() {
  return (
    <div className="absolute inset-0 flex items-center px-5 sm:px-10" aria-hidden>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="h-0.5 origin-right flex-1 bg-compass-gold/70"
      />
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-3 h-2.5 w-2.5 shrink-0 rounded-full bg-compass-gold sm:mx-4"
      />
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="h-0.5 origin-left flex-1 bg-compass-gold/70"
      />
    </div>
  );
}
