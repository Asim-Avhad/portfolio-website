import type { Config } from "tailwindcss";

// Colours are driven by CSS variables (see app/globals.css) so light/dark
// themes are a single class switch on <html>.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        elev: token("elev"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        "on-accent": token("on-accent"),
        ok: token("ok"),
        "photo-fg": token("photo-fg"),
        "photo-muted": token("photo-muted"),
        "photo-ink": token("photo-ink"),
        "photo-shade": token("photo-shade"),
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        display: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
