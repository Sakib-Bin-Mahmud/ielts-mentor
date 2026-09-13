"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { passportMilestones } from "@/lib/content";

export function MentorPassport() {
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set());
  const [open, setOpen] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const els = passportMilestones
      .map((m) => ({ m, el: document.getElementById(m.sectionId) }))
      .filter((x): x is { m: (typeof passportMilestones)[number]; el: HTMLElement } => !!x.el);

    const showObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || window.scrollY > 200),
      { threshold: 0 }
    );
    if (els[0]?.el) showObserver.observe(els[0].el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = els.find((x) => x.el === entry.target);
            if (found) {
              setUnlocked((prev) => {
                if (prev.has(found.m.key)) return prev;
                const next = new Set(prev);
                next.add(found.m.key);
                setJustUnlocked(found.m.key);
                window.setTimeout(() => setJustUnlocked(null), 2200);
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    els.forEach((x) => observer.observe(x.el));

    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      showObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const total = passportMilestones.length;
  const count = unlocked.size;

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-30 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {justUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute bottom-16 right-0 whitespace-nowrap rounded-lg bg-ink px-4 py-2 text-xs font-semibold text-paper shadow-lg"
          >
            ✦ Unlocked: {passportMilestones.find((m) => m.key === justUnlocked)?.label}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mentor passport progress"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-transform hover:scale-105"
        >
          <span className="font-mono text-xs font-semibold">
            {count}/{total}
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-64 rounded-2xl border border-ink/10 bg-paper p-5 shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft/50">
                Mentor Passport
              </p>
              <ul className="mt-3 space-y-2">
                {passportMilestones.map((m) => (
                  <li key={m.key} className="flex items-center gap-2 text-sm">
                    <span
                      className={
                        unlocked.has(m.key) ? "text-clarity-teal" : "text-ink-soft/30"
                      }
                    >
                      {unlocked.has(m.key) ? "✓" : "○"}
                    </span>
                    <span
                      className={
                        unlocked.has(m.key) ? "text-ink" : "text-ink-soft/50"
                      }
                    >
                      {m.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-ink-soft/40">
                Purely optional — nothing here is locked away from you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
