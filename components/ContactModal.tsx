"use client";

import { AnimatePresence, motion } from "framer-motion";
import { footer, mentor } from "@/lib/content";

const PHONE_INTL = "8801748609302";

const channels = [
  {
    label: "WhatsApp",
    value: "Message directly, usually a same-day reply",
    href: `https://wa.me/${PHONE_INTL}`,
    external: true,
  },
  {
    label: "Email",
    value: footer.contact.email,
    href: `mailto:${footer.contact.email}`,
    external: false,
  },
  {
    label: "Call",
    value: footer.contact.phone,
    href: `tel:+${PHONE_INTL}`,
    external: false,
  },
];

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 px-5 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Contact options"
            className="relative w-full max-w-sm rounded-2xl bg-paper p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-lg text-ink-soft/40 transition-colors hover:text-ink"
            >
              &times;
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clarity-teal">
              Let&rsquo;s Connect
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-ink">
              Reach {mentor.shortName} directly.
            </h3>
            <p className="mt-2 text-sm text-ink-soft/70">
              No forms, no queues — pick whatever&rsquo;s easiest for you.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-xl border border-ink/10 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-clarity-teal/40 hover:shadow-md"
                >
                  <span>
                    <span className="block text-sm font-semibold text-ink">{c.label}</span>
                    <span className="mt-0.5 block text-xs text-ink-soft/60">{c.value}</span>
                  </span>
                  <span
                    aria-hidden
                    className="text-compass-gold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
