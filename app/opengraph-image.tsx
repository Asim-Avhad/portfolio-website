import { ImageResponse } from "next/og";

export const alt = "Asim Avhad, AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0a",
          color: "#f5f5f3",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#989896" }}>
          <div style={{ width: 44, height: 44, borderRadius: 44, background: "#e10600", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontStyle: "italic", fontSize: 30 }}>
            a
          </div>
          Asim Avhad · Melbourne
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, lineHeight: 1, letterSpacing: -2 }}>I teach machines to</div>
          <div style={{ fontSize: 104, lineHeight: 1.05, letterSpacing: -2, color: "#ff5c52", fontStyle: "italic" }}>read, see &amp; plan.</div>
        </div>
        <div style={{ fontSize: 28, color: "#989896" }}>AI Engineer · Master of AI, Monash University</div>
      </div>
    ),
    size,
  );
}
