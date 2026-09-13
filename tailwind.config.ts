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
          DEFAULT: "#0B132B",
          soft: "#1C2541",
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
        grain: "radial-gradient(circle at 1px 1px, rgba(11,19,43,0.06) 1px, transparent 0)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
