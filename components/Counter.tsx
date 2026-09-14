"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Counts up to a numeric value once it scrolls into view. Falls back to a
// plain, static render for anything that isn't a real number (e.g. an
// unfilled "[X]" placeholder) — count-up only where there's something
// meaningful to count.
export function Counter({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => {
    if (!match) return value;
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    return (decimals > 0 ? (0).toFixed(decimals) : "0") + match[2];
  });

  useEffect(() => {
    if (!match || !inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const duration = 1200;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((target * eased).toFixed(decimals) + suffix);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, match, prefersReducedMotion, value]);

  return <span ref={ref}>{display}</span>;
}
