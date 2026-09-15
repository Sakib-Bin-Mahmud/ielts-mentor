import { Reveal } from "./Reveal";
import { DividerSpiral } from "./DividerSpiral";

type Tone = "paper" | "paper-dim" | "navy" | "accent";

const bgClass: Record<Tone, string> = {
  paper: "bg-paper",
  "paper-dim": "bg-paper-dim",
  navy: "bg-navy",
  accent: "bg-clarity-teal",
};

const textClass: Record<Tone, string> = {
  paper: "text-ink",
  "paper-dim": "text-ink",
  navy: "text-paper",
  accent: "text-paper",
};

const mutedTextClass: Record<Tone, string> = {
  paper: "text-ink-soft/50",
  "paper-dim": "text-ink-soft/50",
  navy: "text-paper/50",
  accent: "text-paper/60",
};

const lineClass: Record<Tone, string> = {
  paper: "bg-ink/15",
  "paper-dim": "bg-ink/15",
  navy: "bg-paper/15",
  accent: "bg-paper/20",
};

const grainClass: Record<Tone, string> = {
  paper: "",
  "paper-dim": "",
  navy: "bg-noise-dark",
  accent: "bg-noise-dark",
};

// "light" vs "dark" grouping decides whether a boundary gets the full
// spiral-bound seam treatment (a real tonal shift) or stays a quiet line
// (paper <-> paper-dim: same family, nothing to announce).
const isLight = (t: Tone) => t === "paper" || t === "paper-dim";

/**
 * A chapter break between major sections — a spiral-notebook seam binding
 * the two tones together, so adjacent sections read as pages in the same
 * journal rather than stacked, unrelated blocks. `label` is optional: the
 * closing transition into the footer omits it for a quieter finish.
 */
export function SectionDivider({
  index,
  label,
  from,
  to,
}: {
  index?: string;
  label?: string;
  from: Tone;
  to: Tone;
}) {
  const major = isLight(from) !== isLight(to);

  if (!major) {
    // Same tonal family (e.g. paper -> paper-dim): a quiet marker only.
    return (
      <div className={`relative ${bgClass[from]}`}>
        <div className="mx-auto flex max-w-content items-center gap-4 px-5 py-8 sm:px-8">
          <span className={`h-px flex-1 ${lineClass[from]}`} aria-hidden />
          {index && (
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] ${mutedTextClass[from]}`}
            >
              {index}
            </span>
          )}
          <span className={`h-px flex-1 ${lineClass[from]}`} aria-hidden />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Solid "from" zone carries the chapter mark, so text always sits on a known-contrast background */}
      <div className={`relative overflow-hidden ${bgClass[from]}`}>
        {grainClass[from] && (
          <div className={`pointer-events-none absolute inset-0 ${grainClass[from]} opacity-[0.4]`} />
        )}
        {label && (
          <Reveal className="relative mx-auto max-w-content px-5 py-10 text-center sm:px-8 sm:py-14">
            <p
              className={`font-display text-2xl italic leading-none sm:text-3xl ${textClass[from]}`}
            >
              {label}
            </p>
          </Reveal>
        )}
        <div className={`mx-auto h-8 w-px ${lineClass[from]}`} aria-hidden />
      </div>

      {/* Spiral-bound seam — a coil of rings straddling the exact
          "navy -> paper" boundary, like two notebook pages bound together */}
      <div className="relative h-12 w-full sm:h-16">
        <div className={`absolute inset-x-0 top-0 h-1/2 ${bgClass[from]}`} />
        <div className={`absolute inset-x-0 bottom-0 h-1/2 ${bgClass[to]}`} />
        <DividerSpiral />
      </div>
    </div>
  );
}
