import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0f766e", dark: "#0a6158", light: "#14b8a6" },
        accent: { DEFAULT: "#c4956a", dark: "#a67c52", light: "#dbb896" },
        sage: { DEFAULT: "#e8f0ec", dark: "#c8ddd0" },
        bg: { DEFAULT: "#fafaf8", white: "#ffffff", soft: "#f3f1ee", warm: "#f7f5f2" },
        txt: { DEFAULT: "#1a1a1f", light: "#4a4a52", muted: "#71717a" },
        border: { DEFAULT: "#e4e4e7", light: "#f0f0f2" },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
        "brand-sm": "10px",
      },
      boxShadow: {
        "soft-sm": "0 1px 2px rgba(0,0,0,0.04)",
        "soft-md": "0 4px 12px rgba(0,0,0,0.06)",
        "soft-lg": "0 8px 24px rgba(0,0,0,0.08)",
        "soft-xl": "0 16px 40px rgba(0,0,0,0.1)",
        "glow-primary": "0 0 24px -6px rgba(15,118,110,0.2)",
        "glow-accent": "0 0 24px -6px rgba(196,149,106,0.25)",
      },
      keyframes: {
        "liquid-float": {
          "0%, 100%": { transform: "translateY(0) scale(1) rotate(0deg)" },
          "33%": { transform: "translateY(-6px) scale(1.01) rotate(0.5deg)" },
          "66%": { transform: "translateY(3px) scale(0.99) rotate(-0.5deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 12px -4px rgba(15,118,110,0.15)" },
          "50%": { boxShadow: "0 0 20px -4px rgba(15,118,110,0.3)" },
        },
        "mesh-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "liquid-float": "liquid-float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "mesh-shift": "mesh-shift 20s ease infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        reveal: "reveal 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
