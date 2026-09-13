"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personas } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function WhoIHelp() {
  const [active, setActive] = useState(personas[0].key);
  const current = personas.find((p) => p.key === active)!;

  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who I Help"
          title="You might recognize yourself here."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {personas.map((p, i) => (
            <Reveal key={p.key} delay={Math.min(i * 0.05, 0.2)}>
              <button
                onClick={() => setActive(p.key)}
                className={`flex h-full w-full flex-col items-center gap-2 rounded-2xl border p-5 text-center transition-colors ${
                  active === p.key
                    ? "border-compass-gold bg-compass-gold/15"
                    : "border-paper/15 bg-paper/[0.04] hover:border-paper/30"
                }`}
              >
                <span className="text-2xl">{p.icon}</span>
                <span className="text-sm font-medium leading-snug">{p.title}</span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-paper/15 bg-paper/[0.05] p-6 text-center"
            >
              <p className="font-display text-lg italic text-paper/70">
                “{current.quote}”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper/85">
                {current.message}
              </p>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
