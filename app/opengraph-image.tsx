import { ImageResponse } from "next/og";
import { tokens } from "@/lib/tokens";

export const alt = "Asim Avhad, AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const t = tokens;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: t.dark.bg,
          color: t.dark.fg,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: t.dark.muted }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 44,
              background: t.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: t.onAccent,
              fontStyle: "italic",
              fontSize: 30,
            }}
          >
            a
          </div>
          Asim Avhad, Melbourne
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -2 }}>I teach machines</div>
          <div style={{ fontSize: 104, lineHeight: 1.05, letterSpacing: -2, color: t.accentInk, fontStyle: "italic" }}>to read, see &amp; plan.</div>
        </div>
        <div style={{ fontSize: 28, color: t.dark.muted }}>AI engineer and Master of AI student at Monash University</div>
      </div>
    ),
    size,
  );
}
