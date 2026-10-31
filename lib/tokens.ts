/**
 * The palette for places CSS variables can't reach: the browser's theme-color
 * meta and the generated social-preview image. Mirrors the tokens in app/globals.css.
 */
export const tokens = {
  dark: { bg: "#0b0a0a", fg: "#f5f4f3", muted: "#9a9796" },
  light: { bg: "#f7f6f5" },
  accent: "#e10600",
  accentInk: "#ff5c52",
  onAccent: "#ffffff",
} as const;
