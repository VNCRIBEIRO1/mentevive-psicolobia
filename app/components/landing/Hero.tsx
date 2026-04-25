"use client";
import Image from "next/image";
import { Leaf, ShieldCheck, Video, Calendar } from "lucide-react";
import { FloatingOrbs } from "./FloatingOrbs";

const heroImages = [
  { src: "/bia1.jpeg", alt: "Beatriz Ribeiro — Psicóloga Clínica, atendimento online", position: "30% 22%" },
  { src: "/bia2.png", alt: "Beatriz Ribeiro — editorial Ser Psicóloga", position: "50% 30%" },
  { src: "/bia3.png", alt: "Beatriz Ribeiro — retrato institucional Psicolobia", position: "70% 30%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden text-center px-4 md:px-8 pt-28 md:pt-32 pb-20">
      {/* ─── Background: 3 cards lado-a-lado cobrindo topo do hero (abaixo do header) ─── */}
      <div aria-hidden className="absolute inset-x-0 top-24 md:top-28 z-0 h-[42vh] sm:h-[46vh] md:h-[56vh] overflow-hidden">
        {/* Base cream caso a imagem não carregue */}
        <div className="absolute inset-0 bg-[#FBF6EF]" />

        {/* 3 fotos em grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className="relative h-full overflow-hidden hero-fade-in-scale"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 33vw"
                priority={i === 1}
                className="object-cover"
                style={{ objectPosition: img.position }}
              />
              {/* Seam softener vertical entre fotos (sutil) */}
              {i < heroImages.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-0 right-0 h-full w-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(251,246,239,0.35) 100%)",
                  }}
                />
              )}
              {i > 0 && (
                <div
                  aria-hidden
                  className="absolute top-0 left-0 h-full w-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to left, transparent 0%, rgba(251,246,239,0.35) 100%)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Hairlines verticais gold entre fotos */}
        <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
          <div className="border-r border-gold/25" />
          <div className="border-r border-gold/25" />
          <div />
        </div>

        {/* Fade inferior dissolvendo no cream (onde começa o texto) */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, rgba(251,246,239,0) 0%, #FBF6EF 85%)",
          }}
        />

        {/* Linha gold no limiar fotos→texto */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(201,160,80,0.55) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Fundo base cream para a parte inferior do hero (abaixo das fotos) */}
      <div aria-hidden className="absolute inset-0 top-[calc(42vh+6rem)] sm:top-[calc(46vh+6rem)] md:top-[calc(56vh+7rem)] z-0 bg-[#FBF6EF]" />

      <FloatingOrbs className="z-[1]" />

      {/* ─── Texto enquadrado logo abaixo das fotos ─── */}
      <div
        className="relative z-10 max-w-[720px] mx-auto hero-fade-in"
        style={{ marginTop: "clamp(200px, 46vh, 500px)" }}
      >
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[0.65rem] font-semibold text-teal-dark mb-6 hero-fade-in-scale border border-gold/30 bg-white/75 backdrop-blur-sm tracking-[0.15em] uppercase shadow-warm-sm"
          style={{ animationDelay: "0.45s" }}
        >
          <Leaf className="w-3 h-3 text-teal" />
          Beatriz Ribeiro · CRP 06/173961
        </div>

        <h1
          className="font-heading text-[2rem] sm:text-4xl md:text-[3.25rem] font-semibold leading-[1.08] mb-5 hero-fade-in text-txt"
          style={{ animationDelay: "0.55s" }}
        >
          Um espaço seguro para você
          <br className="hidden sm:block" />
          <span className="italic text-teal-dark font-medium">desacelerar</span>
          <span className="text-txt"> e cuidar da mente.</span>
        </h1>

        <p
          className="text-[0.95rem] md:text-base text-txt-light max-w-[560px] mx-auto mb-7 leading-relaxed hero-fade-in"
          style={{ animationDelay: "0.65s" }}
        >
          Atendimento psicológico online e acolhedor para ajudar você a lidar com a ansiedade, a exaustão e os desafios de viver uma vida hiperconectada. Sem julgamentos e no seu tempo.
        </p>

        <div
          className="flex gap-3 justify-center flex-wrap hero-fade-in mb-10"
          style={{ animationDelay: "0.72s" }}
        >
          <a href="#agendamento" className="btn-brand-primary">
            <Calendar className="w-4 h-4" /> Quero começar
          </a>
          <a href="#sobre" className="btn-brand-outline">Sobre mim</a>
        </div>

        {/* Trust bar — three pillars */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/15 border border-gold/20 max-w-[620px] mx-auto hero-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { icon: ShieldCheck, label: "CRP 06/173961", sub: "Registro ativo no e-Psí" },
            { icon: Video, label: "Videochamada segura", sub: "Ambiente criptografado" },
            { icon: Leaf, label: "Abordagem ACT", sub: "Terapia baseada em evidências" },
          ].map((item) => (
            <div key={item.label} className="bg-white/85 backdrop-blur-sm px-4 py-3.5 text-left">
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

