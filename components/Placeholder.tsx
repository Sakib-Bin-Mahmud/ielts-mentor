import { ReactNode } from "react";

/**
 * Visually flags draft/placeholder content so it's obvious, right in the
 * live site, what still needs to be replaced with real material before
 * publishing. Remove the wrapper (keep the children) once real content
 * is in place.
 */
export function Placeholder({
  children,
  className = "",
  label = "Placeholder — personalize this",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <span className={`group relative inline-block ${className}`}>
      <span className="rounded border border-dashed border-compass-gold/60 bg-compass-gold/5 px-1">
        {children}
      </span>
      <span className="pointer-events-none absolute -top-6 left-0 whitespace-nowrap rounded bg-ink px-2 py-0.5 text-[10px] font-sans font-medium tracking-wide text-paper opacity-0 transition-opacity group-hover:opacity-100 z-20">
        {label}
      </span>
    </span>
  );
}
