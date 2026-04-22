import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Psicolobia — Beatriz Ribeiro · Psicóloga Clínica Online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #FFF5EE 0%, #F9EDE3 45%, #FDE8D8 100%)",
          padding: "64px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 360,
            height: 360,
            borderRadius: 360,
            background:
              "radial-gradient(circle, rgba(232,160,191,0.35), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 320,
            height: 320,
            borderRadius: 320,
            background:
              "radial-gradient(circle, rgba(212,165,116,0.4), transparent 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "linear-gradient(135deg, #D4A574, #0f766e)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, color: "#3D2B1F", fontWeight: 600 }}>
              Psicolobia
            </div>
            <div style={{ fontSize: 16, color: "#6B5445" }}>
              Psicologa Clinica - Online
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 72,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: 4,
              color: "#0a6158",
              fontWeight: 700,
              marginBottom: 18,
              display: "flex",
            }}
          >
            CRP 06/173961 - +3.500 ATENDIMENTOS
          </div>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              color: "#3D2B1F",
              fontWeight: 500,
              letterSpacing: -1,
              display: "flex",
            }}
          >
            Beatriz Ribeiro
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#6B5445",
              marginTop: 10,
              lineHeight: 1.25,
              display: "flex",
            }}
          >
            Terapia online com escuta sensivel, etica clinica, sem pressa.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <div style={{ fontSize: 20, color: "#7D6E62", display: "flex" }}>
            Terapia de Aceitacao e Compromisso (ACT)
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#0a6158",
              fontWeight: 700,
              letterSpacing: 2,
              border: "1px solid rgba(15,118,110,0.35)",
              padding: "10px 18px",
              borderRadius: 999,
              display: "flex",
            }}
          >
            mentevive-psicolobia.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
