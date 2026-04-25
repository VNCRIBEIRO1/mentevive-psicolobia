"use client";
import Image from "next/image";
import { Calendar, ShieldCheck, Leaf, Video } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { FloatingOrbs } from "./FloatingOrbs";
import { FloatingSpirals } from "./FloatingSpirals";

export function HeroBio() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-24 px-4 md:px-8 bg-[#FBF6EF]" id="sobre">
      <FloatingOrbs className="z-[1]" />
      <FloatingSpirals />

      <div className="relative z-10 max-w-[1100px] mx-auto hero-fade-in mb-10 md:mb-16">
        <AnimatedSection direction="up" className="text-center w-full px-4 md:px-0">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-txt leading-[1.05] drop-shadow-sm">
            Prazer, Bea<br className="sm:hidden" /> sua nova <span className="text-accent italic font-semibold">psicanalista</span>
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center max-w-[1100px] mx-auto hero-fade-in">
        
        {/* Photo Column */}
        <AnimatedSection direction="left" staggerType="premium" className="relative max-w-[420px] mx-auto lg:mx-0 w-full mt-10 lg:mt-0">
          <div className="relative">
            {/* Thin gold frame */}
            <div className="absolute -inset-3 lg:-inset-4 border border-gold/30 rounded-[2px] pointer-events-none" aria-hidden />
            <div className="absolute -top-3 lg:-top-4 left-4 bg-white px-3 py-1 text-[0.65rem] tracking-[0.25em] uppercase text-teal-dark font-semibold shadow-sm z-20">
              Psicóloga · CRP 06/173961
            </div>
            
            <Image
              src="/perfilsobre.jpeg"
              alt="Beatriz Ribeiro — Psicóloga Clínica, atendimento online"
              width={520}
              height={680}
              className="w-full aspect-[3/4] sm:aspect-[4/5] object-cover object-center shadow-warm-lg"
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
            />
            
            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-white border border-gold/30 px-5 py-4 shadow-warm-md z-20">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-teal font-semibold mb-1">Trajetória clínica</p>
              <p className="font-heading text-xl font-bold text-txt leading-tight">+3.500 sessões</p>
              <p className="text-[0.7rem] text-txt-muted mt-0.5">realizadas clinicamente</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Content Column */}
        <AnimatedSection direction="right" staggerType="premium" staggerChildren={0.1} className="pt-6 lg:pt-0">
          <AnimatedItem direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[0.65rem] font-semibold text-teal-dark mb-5 border border-gold/40 bg-white/60 backdrop-blur-sm tracking-[0.15em] uppercase shadow-sm rounded-sm">
              <Leaf className="w-3 h-3 text-teal" />
              Terapia Individual Online
            </div>
            
            <h1 className="font-heading text-3xl sm:text-[2.6rem] md:text-[3.25rem] leading-[1.08] font-semibold text-txt mb-6">
              Um espaço seguro para você <span className="italic text-teal-dark font-medium">desacelerar</span> e cuidar da mente.
            </h1>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-[0.95rem] md:text-[1.05rem] text-txt-light leading-relaxed mb-4">
              Costumo receber pessoas que se sentem constantemente esgotadas e cobradas — profissionais digitais, criadores de conteúdo e quem sente o peso da ansiedade que o mundo hiperconectado impõe.
            </p>
            <p className="text-[0.95rem] md:text-[1.05rem] text-txt-light leading-relaxed mb-4">
              Meu papel é ajudar você a construir <strong className="text-txt font-bold">flexibilidade emocional</strong> para viver com mais acolhimento, sem os julgamentos do antigo formato de terapia.
            </p>
            <p className="text-[0.95rem] md:text-[1.05rem] text-txt-light leading-relaxed mb-8">
              Psicóloga <strong className="text-txt font-bold">CRP 06/173961</strong> com formação em Ansiedade e Depressão pelo <strong className="text-txt font-extrabold underline decoration-accent decoration-2 underline-offset-2">Albert Einstein</strong>.
            </p>
          </AnimatedItem>

          {/* Action Area */}
          <AnimatedItem direction="up">
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#agendamento" className="btn-brand-primary w-full sm:w-auto flex justify-center">
                <Calendar className="w-4 h-4" /> Começar processo
              </a>
              <a href="#servicos" className="btn-brand-outline w-full sm:w-auto flex justify-center bg-white/50 backdrop-blur-sm hover:bg-white">
                Ver áreas de atuação
              </a>
            </div>
            
            {/* Quick Trust Pillars row */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-gold/30 pt-6">
              <div className="flex gap-2.5 items-start">
                <ShieldCheck className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <div>
                  <p className="text-[0.75rem] font-semibold text-txt leading-tight">Ética e Sigilo</p>
                  <p className="text-[0.7rem] text-txt-muted">Protegido pela LGPD</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Video className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <div>
                  <p className="text-[0.75rem] font-semibold text-txt leading-tight">100% Online</p>
                  <p className="text-[0.7rem] text-txt-muted">Sessões em vídeo seguras</p>
                </div>
              </div>
              <div className="flex gap-2.5 items-start">
                <Leaf className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <div>
                  <p className="text-[0.75rem] font-semibold text-txt leading-tight">Abordagem ACT</p>
                  <p className="text-[0.7rem] text-txt-muted">Psicologia com evidências</p>
                </div>
              </div>
            </div>
          </AnimatedItem>

        </AnimatedSection>
      </div>
    </section>
  );
}
