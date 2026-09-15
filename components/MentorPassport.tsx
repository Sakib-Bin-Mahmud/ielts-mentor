"use client";

import { useEffect, useState } from "react";
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
                window.setTimeout(() => setJustUnlocked(null), 2000);
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
  const percent = total > 0 ? Math.round((count / total) * 100) : 0;

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-30 sm:bottom-8 sm:right-8">
      {/* Unlock cue — quiet, no "unlocked" language, no confetti.
          Text toast only on larger screens: on mobile it can land on top of
          whatever section is underneath, so the badge's own pulse (below)
          carries the cue instead. */}
      <AnimatePresence>
        {justUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-14 right-0 hidden items-center gap-2 whitespace-nowrap rounded-lg border border-compass-gold/25 bg-navy px-4 py-2 text-xs font-medium text-paper shadow-md sm:flex"
          >
            <span className="text-compass-gold">✓</span>
            {passportMilestones.find((m) => m.key === justUnlocked)?.label}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Small floating indicator — a gold ring only appears once there's real progress */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mentor passport — track of what you've explored"
          aria-expanded={open}
          whileHover={{ scale: 1.05 }}
          animate={justUnlocked ? { scale: [1, 1.18, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-navy text-paper shadow-md transition-shadow duration-300 sm:h-12 sm:w-12 ${
            count > 0 ? "ring-1 ring-compass-gold/50 ring-offset-2 ring-offset-paper" : ""
          }`}
        >
          <span className="font-mono text-[11px] font-medium">
            {count}/{total}
          </span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 w-[min(18rem,calc(100vw-2.5rem))] rounded-xl border border-ink/10 bg-paper p-5 shadow-xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft/50">
                Mentor Passport
              </p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-semibold text-compass-gold">
                  {percent}%
                </span>
                <span className="text-xs text-ink-soft/50">Journey explored</span>
              </div>

              <div className="mt-3 h-1 w-full rounded-full bg-ink/10">
                <div
                  className="h-1 rounded-full bg-compass-gold transition-all duration-700 ease-out"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <ul className="mt-4 space-y-2">
                {passportMilestones.map((m) => {
                  const done = unlocked.has(m.key);
                  return (
                    <li key={m.key} className="flex items-center gap-2 text-sm">
                      <span className={done ? "text-compass-gold" : "text-ink-soft/30"}>
                        {done ? "✓" : "○"}
                      </span>
                      <span className={done ? "text-ink" : "text-ink-soft/50"}>{m.label}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-4 text-[11px] leading-relaxed text-ink-soft/40">
                Entirely optional — nothing on this site is hidden behind it.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
