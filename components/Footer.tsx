import { footer, mentor, nav } from "@/lib/content";
import { Placeholder } from "./Placeholder";

export function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/10 py-14">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {mentor.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft/70">
              {footer.statement}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft/50">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft/75 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft/50">
              Contact
            </p>
            <p className="mt-3 text-sm text-ink-soft/75">
              <Placeholder label="Add your real email">{footer.contact.email}</Placeholder>
            </p>
            <p className="mt-1 text-sm text-ink-soft/75">
              <Placeholder label="Add your real WhatsApp">
                {footer.contact.whatsapp}
              </Placeholder>
            </p>
            <div className="mt-4 flex gap-4">
              {footer.social.map((s) => (
                <Placeholder key={s.label} label={`Add real ${s.label} link`}>
                  <a href={s.href} className="text-sm text-ink-soft/75 hover:text-ink">
                    {s.label}
                  </a>
                </Placeholder>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-ink-soft/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {mentor.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
