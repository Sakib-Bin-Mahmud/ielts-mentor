import { Reveal } from "./Reveal";

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
  paper: "bg-noise",
  "paper-dim": "bg-noise",
  navy: "bg-noise-dark",
  accent: "bg-noise-dark",
};

// "light" vs "dark" grouping decides whether a boundary gets the full
// gradient-bridge treatment (a real tonal shift) or stays a quiet line
// (paper <-> paper-dim: same family, nothing to announce).
const isLight = (t: Tone) => t === "paper" || t === "paper-dim";

// Tailwind's scanner needs full literal class strings — from-${x} to-${y}
// interpolation would never match anything in the compiled CSS. Only the
// cross-tone (light <-> dark) pairs are ever rendered as a real gradient.
const gradientClass: Record<string, string> = {
  "paper->navy": "bg-gradient-to-b from-paper to-navy",
  "paper->accent": "bg-gradient-to-b from-paper to-clarity-teal",
  "paper-dim->navy": "bg-gradient-to-b from-paper-dim to-navy",
  "paper-dim->accent": "bg-gradient-to-b from-paper-dim to-clarity-teal",
  "navy->paper": "bg-gradient-to-b from-navy to-paper",
  "navy->paper-dim": "bg-gradient-to-b from-navy to-paper-dim",
  "accent->paper": "bg-gradient-to-b from-clarity-teal to-paper",
  "accent->paper-dim": "bg-gradient-to-b from-clarity-teal to-paper-dim",
};

/**
 * A chapter break between major sections — a thin "journey line" threaded
 * through a short color bridge, so adjacent sections read as one continuous
 * scroll rather than stacked, unrelated blocks. `label` is optional: the
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
        <div className={`pointer-events-none absolute inset-0 ${grainClass[from]} opacity-[0.4]`} />
        {label && (
          <Reveal className="relative mx-auto max-w-content px-5 py-10 text-center sm:px-8 sm:py-14">
            {index && (
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${mutedTextClass[from]}`}
              >
                Chapter {index}
              </p>
            )}
            <p
              className={`mt-2 font-display text-2xl italic leading-none sm:text-3xl ${textClass[from]}`}
            >
              {label}
            </p>
          </Reveal>
        )}
        <div className={`mx-auto h-8 w-px ${lineClass[from]}`} aria-hidden />
      </div>

      {/* Short gradient bridge — the literal "navy -> paper" color transition */}
      <div
        aria-hidden
        className={`relative h-14 w-full sm:h-20 ${gradientClass[`${from}->${to}`] ?? bgClass[to]}`}
      >
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-compass-gold" />
      </div>
    </div>
  );
}
