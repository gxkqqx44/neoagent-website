import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NeoAgent — AI Receptionist & WhatsApp Automation for Clinics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0B0F0E",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#14B8A6",
              color: "#0B0F0E",
              fontSize: 28,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            N
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>NeoAgent</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>
            AI Receptionist &amp; WhatsApp Automation for Clinics
          </div>
          <div style={{ fontSize: 26, color: "#99A3A1", maxWidth: 850 }}>
            24/7 AI receptionist that answers WhatsApp, books appointments,
            sends reminders and automates follow-ups.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
