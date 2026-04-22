"use client";
import Image from "next/image";
import { Leaf, ShieldCheck, Video, Calendar } from "lucide-react";
import { FloatingOrbs } from "./FloatingOrbs";

const heroImages = [
  { src: "/bia1.jpeg", alt: "Beatriz Ribeiro — Psicóloga Clínica, atendimento online", position: "left" as const },
  { src: "/bia2.png", alt: "Beatriz Ribeiro — editorial Ser Psicóloga", position: "center" as const },
  { src: "/bia3.png", alt: "Beatriz Ribeiro — retrato institucional Psicolobia", position: "right" as const },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 md:px-8 pt-32 pb-20 relative overflow-hidden">
      {/* ─── Background photo gallery (3 fotos em fade horizontal) ─── */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden">
        {/* Camada 1 — base warm cream */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FBF6EF] to-white" />

        {/* Camada 2 — 3 fotos distribuídas horizontalmente em fade suave */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className="relative h-full overflow-hidden"
              style={{
                animation: `hero-photo-in 1.2s ease-out ${0.1 + i * 0.18}s both`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 1}
                className="object-cover object-center opacity-[0.38] md:opacity-[0.42] scale-[1.02]"
                style={{
                  objectPosition:
                    img.position === "left"
                      ? "30% 35%"
                      : img.position === "center"
                      ? "50% 30%"
                      : "70% 35%",
                }}
              />
              {/* Vertical seam softener entre fotos */}
              {i < heroImages.length - 1 && (
                <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-r from-transparent via-[#FBF6EF]/40 to-[#FBF6EF]/80" />
              )}
              {i > 0 && (
                <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-l from-transparent via-[#FBF6EF]/40 to-[#FBF6EF]/80" />
              )}
            </div>
          ))}
        </div>

        {/* Camada 3 — fade radial central escurecendo bordas e clareando o centro onde o texto fica */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(255,253,249,0.92) 0%, rgba(251,246,239,0.78) 35%, rgba(251,246,239,0.55) 60%, rgba(255,255,255,0.35) 100%)",
          }}
        />

        {/* Camada 4 — fade vertical (topo e base dissolvem nas seções vizinhas) */}
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Camada 5 — hairlines verticais gold separando as fotos (sutis) */}
        <div className="absolute inset-0 hidden md:grid grid-cols-3 pointer-events-none">
          <div className="border-r border-gold/12" />
          <div className="border-r border-gold/12" />
          <div />
        </div>

        {/* Camada 6 — grão sutil institucional */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-multiply pointer-events-none"
        >
          <filter id="hero-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" />
        </svg>
      </div>

      <FloatingOrbs className="z-[1]" />

      <div className="relative z-10 max-w-[720px] hero-fade-in">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[0.65rem] font-semibold text-teal-dark mb-8 hero-fade-in-scale border border-gold/40 bg-white/85 backdrop-blur-md tracking-[0.15em] uppercase shadow-warm-sm"
          style={{ animationDelay: "0.2s" }}
        >
          <Leaf className="w-3 h-3 text-teal" />
          Beatriz Ribeiro · CRP 06/173961
        </div>

        <h1
          className="font-heading text-[2rem] sm:text-4xl md:text-[3.25rem] font-semibold leading-[1.08] mb-5 hero-fade-in text-txt"
          style={{ animationDelay: "0.3s", textShadow: "0 1px 2px rgba(255,253,249,0.6)" }}
        >
          Terapia online para quem
          <br className="hidden sm:block" />
          <span className="italic text-teal-dark font-medium">vive no ritmo da internet</span>
          <span className="text-txt"> — e precisa de um lugar onde o mundo desacelera.</span>
        </h1>

        <p
          className="text-[0.95rem] md:text-base text-txt-light max-w-[560px] mx-auto mb-7 leading-relaxed hero-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          Escuta clínica ética, <strong className="text-txt font-semibold">+3.500 sessões</strong> conduzidas pessoalmente e base em Terapia de Aceitação e Compromisso (ACT). Sem pressa, sem moldes, sem máscaras.
        </p>

        <div
          className="flex gap-3 justify-center flex-wrap hero-fade-in mb-10"
          style={{ animationDelay: "0.55s" }}
        >
          <a href="#agendamento" className="btn-brand-primary">
            <Calendar className="w-4 h-4" /> Agendar primeira sessão
          </a>
          <a href="#sobre" className="btn-brand-outline">Conhecer a Bea</a>
        </div>

        {/* Trust bar — three pillars */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/20 border border-gold/25 max-w-[620px] mx-auto hero-fade-in shadow-warm-sm"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { icon: ShieldCheck, label: "CRP 06/173961", sub: "Registro ativo no e-Psí" },
            { icon: Video, label: "Videochamada segura", sub: "Ambiente criptografado" },
            { icon: Leaf, label: "Abordagem ACT", sub: "Terapia baseada em evidências" },
          ].map((item) => (
            <div key={item.label} className="bg-white/90 backdrop-blur-md px-4 py-3.5 text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <item.icon className="w-3.5 h-3.5 text-teal" strokeWidth={1.6} />
                <p className="text-[0.72rem] font-semibold text-txt">{item.label}</p>
              </div>
              <p className="text-[0.66rem] text-txt-muted leading-tight">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

