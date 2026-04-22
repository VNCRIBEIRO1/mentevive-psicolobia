"use client";
import Image from "next/image";
import { Leaf, ShieldCheck, Video, Calendar } from "lucide-react";
import { FloatingOrbs } from "./FloatingOrbs";

const heroImages = [
  { src: "/bia.png", alt: "Beatriz Ribeiro — atendimento online", mt: "mt-8" },
  { src: "/bia2.png", alt: "Beatriz Ribeiro — sessão de terapia online", mt: "" },
  { src: "/bia3.webp", alt: "Beatriz Ribeiro — consultório online Psicolobia", mt: "mt-6" },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4 md:px-8 pt-32 pb-20 relative overflow-hidden">
      <FloatingOrbs className="z-0" />

      <div className="relative z-10 max-w-[720px] hero-fade-in">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[0.65rem] font-semibold text-teal-dark mb-8 hero-fade-in-scale border border-gold/30 bg-white/60 backdrop-blur-sm tracking-[0.15em] uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          <Leaf className="w-3 h-3 text-teal" />
          Beatriz Ribeiro · CRP 06/173961
        </div>

        <h1
          className="font-heading text-[2rem] sm:text-4xl md:text-[3.25rem] font-semibold leading-[1.08] mb-5 hero-fade-in text-txt"
          style={{ animationDelay: "0.3s" }}
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/15 border border-gold/20 max-w-[620px] mx-auto mb-12 hero-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { icon: ShieldCheck, label: "CRP 06/173961", sub: "Registro ativo no e-Psí" },
            { icon: Video, label: "Videochamada segura", sub: "Ambiente criptografado" },
            { icon: Leaf, label: "Abordagem ACT", sub: "Terapia baseada em evidências" },
          ].map((item) => (
            <div key={item.label} className="bg-white/80 backdrop-blur-sm px-4 py-3.5 text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <item.icon className="w-3.5 h-3.5 text-teal" strokeWidth={1.6} />
                <p className="text-[0.72rem] font-semibold text-txt">{item.label}</p>
              </div>
              <p className="text-[0.66rem] text-txt-muted leading-tight">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-5 flex-wrap">
          {heroImages.map((img, i) => (
            <div
              key={img.src}
              className={`${img.mt} hero-fade-in-scale relative`}
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={150}
                height={200}
                className="w-[140px] h-[185px] md:w-[150px] md:h-[200px] object-cover shadow-warm-md ring-1 ring-gold/25 transition-shadow duration-500 hover:shadow-gold-glow"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

