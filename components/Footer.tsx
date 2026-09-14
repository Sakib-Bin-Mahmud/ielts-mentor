import { footer, mentor, nav } from "@/lib/content";
import { Placeholder } from "./Placeholder";

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
            <Placeholder key={s.label} label={`Add real ${s.label} link`}>
              <a href={s.href} className="transition-colors hover:text-paper">
                {s.label}
              </a>
            </Placeholder>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-paper/60">
          <Placeholder label="Add your real email">{footer.contact.email}</Placeholder>
          <Placeholder label="Add your real WhatsApp">{footer.contact.whatsapp}</Placeholder>
        </div>

        <p className="mx-auto mt-14 max-w-xs border-t border-paper/10 pt-6 text-xs text-paper/40">
          © {new Date().getFullYear()} {mentor.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
