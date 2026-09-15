"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, mentor } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-paper shadow-sm" : "bg-transparent"
        }`}
      >
        <nav
          className={`relative mx-auto flex max-w-content items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a
            href="#top"
            className={`font-display font-bold tracking-tight text-ink transition-all duration-300 ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            {mentor.shortName}
            <span className="ml-1 text-compass-gold">.</span>
          </a>

          <ul className="absolute left-1/2 hidden w-max -translate-x-1/2 items-center gap-8 xl:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-block py-1 text-sm font-bold text-ink-soft/80 transition-colors hover:text-ink"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-clarity-teal transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <a
              href="#final-cta"
              className="hidden rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-clarity-teal hover:shadow-md xl:inline-block"
            >
              Start Your Journey
            </a>

            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 transition-opacity hover:opacity-70 xl:hidden"
            >
              <span className="h-0.5 w-6 bg-ink" />
              <span className="h-0.5 w-6 bg-ink" />
              <span className="h-0.5 w-6 bg-ink" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden
              className="fixed inset-0 z-40 bg-navy/40 xl:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(85vw,340px)] flex-col bg-paper px-6 py-6 shadow-xl xl:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  {mentor.shortName}
                  <span className="ml-1 text-compass-gold">.</span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="-mr-2 flex h-11 w-11 items-center justify-center text-xl text-ink transition-opacity hover:opacity-70"
                >
                  ✕
                </button>
              </div>

              <ul className="mt-10 flex flex-col">
                {nav.map((item) => (
                  <li key={item.href} className="border-b border-ink/[0.06]">
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-base font-bold text-ink transition-colors hover:text-clarity-teal"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#final-cta"
                onClick={() => setOpen(false)}
                className="mt-8 block rounded-md bg-navy px-5 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-clarity-teal"
              >
                Start Your Journey
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
