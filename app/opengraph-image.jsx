import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: "#93c5fd",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              background: "rgba(37,99,235,0.2)",
              border: "1px solid rgba(59,130,246,0.4)",
              borderRadius: 4,
              padding: "4px 12px",
            }}
          >
            Virginia, USA · Est. 2024
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            color: "#f8fafc",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 20,
            letterSpacing: -2,
          }}
        >
          LLAMA LLC
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#94a3b8",
            fontSize: 26,
            maxWidth: 760,
            lineHeight: 1.5,
          }}
        >
          Learning, Language, and Multicultural Advancement
        </div>

        {/* Domain pill */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 80,
            background: "#2563eb",
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 700,
            padding: "14px 32px",
            borderRadius: 8,
          }}
        >
          llamacoop.dev
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
