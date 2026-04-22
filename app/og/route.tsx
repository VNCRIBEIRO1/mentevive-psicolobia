import { ImageResponse } from "next/og";
import { tenantConfig } from "@/lib/tenant.config";

export const runtime = "edge";

export async function GET() {
  const { professional, name, tagline } = tenantConfig;
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
          padding: 64,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Soft accents */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,160,191,0.35), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,165,116,0.4), transparent 70%)",
          }}
        />

        {/* Top row: brand */}
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
            <div style={{ fontSize: 28, color: "#3D2B1F", fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: 16, color: "#6B5445" }}>Psicóloga Clínica · Online</div>
          </div>
        </div>

        {/* Main block */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 72, maxWidth: 920 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              letterSpacing: 4,
              color: "#0a6158",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            CRP 06/173961 · +3.500 atendimentos
          </div>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              color: "#3D2B1F",
              fontWeight: 500,
              letterSpacing: -1,
            }}
          >
            {professional.name}
          </div>
          <div style={{ fontSize: 34, color: "#6B5445", marginTop: 10, lineHeight: 1.25 }}>
            {tagline} — escuta sensível, ética clínica, sem pressa.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <div style={{ fontSize: 20, color: "#7D6E62" }}>
            Terapia de Aceitação e Compromisso (ACT)
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
            }}
          >
            mentevive-psicolobia.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
