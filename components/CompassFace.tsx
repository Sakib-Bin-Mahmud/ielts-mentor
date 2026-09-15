"use client";

import { motion } from "framer-motion";

const MAJOR_DEGREES = [0, 90, 180, 270];
const TICK_COUNT = 24;
// A quiet extra marking between two ticks — invisible at a glance, a little
// clearer on hover. For anyone who's ever looked for a hidden platform.
const HIDDEN_DEGREE = 45;

/**
 * The compass's own instrument face — engraved rings, degree ticks, and a
 * brass needle pivoting to the active direction. Deliberately its own
 * material (navy + brass) rather than the site's teal content accent, so
 * it reads as a crafted object rather than another UI control.
 */
export function CompassFace({
  size,
  angle,
  detailed = true,
}: {
  size: number;
  angle: number;
  detailed?: boolean;
}) {
  const radius = size / 2;
  const tickOuter = radius - 3;
  const tickInner = radius - (detailed ? 10 : 7);
  const labelRadius = radius - 20;
  const needleLength = size * 0.72;

  return (
    <div
      className="group relative shrink-0 rounded-full border border-compass-gold/30 bg-navy-soft shadow-inner"
      style={{ width: size, height: size }}
    >
      {/* Engraved concentric rings */}
      <div className="absolute inset-[12%] rounded-full border border-compass-gold/15" />
      {detailed && <div className="absolute inset-[24%] rounded-full border border-compass-gold/10" />}

      {/* Degree ticks around the rim */}
      {Array.from({ length: TICK_COUNT }).map((_, i) => {
        const deg = i * (360 / TICK_COUNT);
        const major = deg % 90 === 0;
        if (!detailed && !major) return null;
        return (
          <span
            key={i}
            aria-hidden
            className={major ? "absolute left-1/2 top-1/2 bg-compass-gold/70" : "absolute left-1/2 top-1/2 bg-paper/20"}
            style={{
              width: major ? 2 : 1,
              height: major ? 9 : 5,
              transform: `translate(-50%, -${tickOuter}px) rotate(${deg}deg)`,
              transformOrigin: `50% ${tickOuter}px`,
            }}
          />
        );
      })}

      {/* Tiny coordinate-style degree labels at the cardinal ticks */}
      {detailed &&
        MAJOR_DEGREES.map((deg) => (
          <span
            key={deg}
            aria-hidden
            className="absolute left-1/2 top-1/2 font-mono text-[8px] tracking-widest text-compass-gold/45"
            style={{
              transform: `rotate(${deg}deg) translateY(-${labelRadius}px) rotate(${-deg}deg) translate(-50%, -50%)`,
            }}
          >
            {String(deg).padStart(3, "0")}&deg;
          </span>
        ))}

      {detailed && (
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 font-mono text-[7px] tracking-widest text-compass-gold/15 transition-colors duration-500 group-hover:text-compass-gold/60"
          style={{
            transform: `rotate(${HIDDEN_DEGREE}deg) translateY(-${labelRadius}px) rotate(${-HIDDEN_DEGREE}deg) translate(-50%, -50%)`,
          }}
        >
          9&frac34;&deg;
        </span>
      )}

      {/* Brass needle — positioning (centering) and rotation are kept on
          separate elements: Framer's `animate` writes its own inline
          transform, which would otherwise silently drop a Tailwind
          translate class sharing the same node. */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: Math.max(6, size * 0.045), height: needleLength }}
      >
        <motion.div
          animate={{ rotate: angle }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-t from-compass-gold/70 to-compass-gold"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-paper/25 to-paper/5"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
          />
        </motion.div>
      </div>

      {/* Pivot — a restrained brass glow that warms slightly on hover */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy shadow-[0_0_10px_rgba(193,98,45,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_18px_rgba(193,98,45,0.55)]"
        style={{ width: size * 0.09, height: size * 0.09 }}
      >
        <span className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-compass-gold" />
      </div>
    </div>
  );
}
