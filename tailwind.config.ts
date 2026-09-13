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
        ink: {
          DEFAULT: "#14171F",
          soft: "#2A2E3A",
        },
        paper: {
          DEFAULT: "#FAF7F0",
          dim: "#F1ECE0",
        },
        compass: {
          gold: "#C79A4B",
          light: "#E6C88A",
        },
        clarity: {
          teal: "#1F6E63",
          light: "#2F8F80",
        },
        confidence: {
          coral: "#C4573B",
        },
      },
      fontFamily: {
        // Editorial serif stack for headings/display copy (no external font
        // fetch required — swap in a self-hosted or Google Font at deploy
        // time by adding it to this stack, see README "Fonts" section).
        display: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Georgia",
          "ui-serif",
          "serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(20,23,31,0.06) 1px, transparent 0)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
