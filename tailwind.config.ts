import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surface color for full-bleed dark sections, primary buttons, and
        // dark badges/panels.
        navy: {
          DEFAULT: "#0B132B",
          soft: "#1C2541",
        },
        // Text color — kept distinct from `navy` so type always reads as
        // ink on paper, never as a tinted surface.
        ink: {
          DEFAULT: "#111827",
          soft: "#4B5563",
        },
        paper: {
          DEFAULT: "#F7F5F0",
          dim: "#EFEAE0",
        },
        compass: {
          gold: "#F2C94C",
          light: "#F6DA82",
        },
        clarity: {
          teal: "#2563EB",
          light: "#7CC7FF",
        },
      },
      fontFamily: {
        // Loaded via next/font/google in app/layout.tsx as CSS variables;
        // the stacks below are the fallback chain if a variable is unset.
        display: [
          "var(--font-playfair)",
          "Iowan Old Style",
          "Palatino Linotype",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-dm-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
