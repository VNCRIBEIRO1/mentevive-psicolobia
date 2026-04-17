"use client";
import Image from "next/image";
import { ArrowRight, Shield, Video, CalendarCheck } from "lucide-react";
import { FloatingOrbs } from "./FloatingOrbs";

const stats = [
  { value: "3.500+", label: "Atendimentos" },
  { value: "98%", label: "Satisfação" },
  { value: "5+", label: "Anos de Experiência" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16 lg:pb-24">
      <FloatingOrbs className="z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <div
              className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-primary mb-6 hero-fade-in-scale"
              style={{ animationDelay: "0.15s" }}
            >
              <Shield className="w-3.5 h-3.5" />
              CRP 06/173961 · Atendimento 100% Online
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.1] mb-5 hero-fade-in text-balance"
              style={{ animationDelay: "0.25s", letterSpacing: "-0.03em" }}
            >
              Especialista no{" "}
              <span className="text-primary">emocional</span> de quem vive da{" "}
              <span className="text-accent">internet</span>
            </h1>

            <p
              className="text-base lg:text-lg text-txt-light leading-relaxed mb-8 max-w-md hero-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Terapia online acolhedora com escuta sensível. Cada história merece espaço, profundidade e presença real.
            </p>

            <div
              className="flex gap-3 flex-wrap mb-10 hero-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <a href="#agendamento" className="btn-brand-primary shimmer-btn">
                Agendar Sessão <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#sobre" className="btn-brand-outline">Conheça a Profissional</a>
            </div>

            {/* Trust badges */}
            <div
              className="flex items-center gap-5 text-xs text-txt-muted hero-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-primary" /> Videochamada segura
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarCheck className="w-3.5 h-3.5 text-primary" /> Agenda flexível
              </span>
            </div>
          </div>

          {/* Right — Photo + Stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative hero-fade-in-scale"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="relative">
                <Image
                  src="/pefilsobrre.jpeg"
                  alt="Beatriz — Psicóloga Clínica Psicolobia"
                  width={420}
                  height={520}
                  className="rounded-3xl shadow-soft-xl object-cover object-top w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] lg:w-[420px] lg:h-[520px]"
                  priority
                />
                {/* Decorative gradient behind */}
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/8 via-sage to-accent/8" />
              </div>

              {/* Floating stat card */}
              <div className="glass-strong absolute -left-6 bottom-12 sm:-left-10 sm:bottom-16 p-4 rounded-2xl shadow-soft-lg max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-txt leading-tight">3.500+</div>
                    <div className="text-[0.68rem] text-txt-muted">Atendimentos realizados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 lg:mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 hero-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-txt-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
