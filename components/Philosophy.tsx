"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { philosophyPrinciples, philosophyIntro } from "@/lib/content";
import { Reveal } from "./Reveal";

// Alternating indent gives the list an asymmetric, hand-set rhythm instead
// of a uniform grid — odd principles sit further right.
const offsetByIndex = ["lg:ml-0", "lg:ml-16 xl:ml-28", "lg:ml-0", "lg:ml-16 xl:ml-28"];

function PrincipleRow({
  index,
  title,
  short,
  detail,
}: {
  index: number;
  title: string;
  short: string;
  detail: string;
}) {
  const [focused, setFocused] = useState(index === 0);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: focused ? 1 : 0.4, scale: focused ? 1 : 0.96 }}
      onViewportEnter={() => setFocused(true)}
      onViewportLeave={() => setFocused(false)}
      viewport={{ margin: "-42% 0px -42% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-3xl gap-6 sm:gap-10 ${offsetByIndex[index % offsetByIndex.length]}`}
    >
      {/* Small visual indicator — lights up gold only while this principle is focused */}
      <span
        aria-hidden
        className={`mt-2 w-px shrink-0 transition-colors duration-700 ${
          focused ? "bg-compass-gold" : "bg-paper/15"
        }`}
      />

      <div className="min-w-0">
        <p
          className={`font-display text-6xl leading-none transition-colors duration-700 sm:text-7xl md:text-8xl ${
            focused ? "text-compass-gold/90" : "text-paper/25"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3
          className={`mt-4 text-balance font-display text-2xl font-medium uppercase leading-[1.15] tracking-tight transition-colors duration-700 sm:text-3xl md:text-4xl ${
            focused ? "text-paper" : "text-paper/60"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-4 font-display text-lg italic leading-snug transition-colors duration-700 sm:text-xl ${
            focused ? "text-clarity-light" : "text-clarity-light/70"
          }`}
        >
          {short}
        </p>

        <p
          className={`mt-3 max-w-xl text-base leading-relaxed transition-colors duration-700 sm:text-lg ${
            focused ? "text-paper/80" : "text-paper/40"
          }`}
        >
          {detail}
        </p>
      </div>
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-20 text-paper sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise-dark opacity-[0.5]" />
      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-clarity-light">
            My Beliefs
          </p>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight sm:text-4xl md:text-[2.75rem]">
            {philosophyIntro}
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14 sm:mt-28 sm:gap-28">
          {philosophyPrinciples.map((p, i) => (
            <PrincipleRow
              key={p.key}
              index={i}
              title={p.title}
              short={p.short}
              detail={p.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
