import { footer, mentor, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy py-20 text-paper sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-noise-dark opacity-[0.5]" />

      <div className="relative mx-auto max-w-content px-5 text-center sm:px-8">
        <p className="font-display text-2xl font-medium uppercase tracking-tight sm:text-3xl">
          {mentor.name}
        </p>
        <p className="mt-3 text-sm text-paper/60">{footer.statement}</p>

        <p className="mx-auto mt-10 max-w-sm font-display text-xl italic leading-snug text-clarity-light sm:text-2xl">
          Your next chapter starts with direction.
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-paper/60"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-paper/60">
          {footer.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-paper/60">
          <a href={`mailto:${footer.contact.email}`} className="transition-colors hover:text-paper">
            {footer.contact.email}
          </a>
          <a href="tel:+8801748609302" className="transition-colors hover:text-paper">
            {footer.contact.phone}
          </a>
        </div>

        <p className="mx-auto mt-14 max-w-xs border-t border-paper/10 pt-6 text-xs text-paper/40">
          © {new Date().getFullYear()} {mentor.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
