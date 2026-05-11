"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function HeroBio() {
  return (
    <section id="sobre">

      {/* ─── MOBILE HERO (below md = 768 px) ─── */}
      <div className="md:hidden relative w-full min-h-[100svh] overflow-hidden bg-bg-warm">

        {/* Portrait botanical background — anchored top-left to keep leaf art
            visible and crop the abstract face-outline on the right edge */}
        <Image
          src="/planofundo.jpeg"
          alt=""
          fill
          className="object-cover object-left-top"
          priority
          sizes="100vw"
          aria-hidden="true"
        />

        {/* Warm gradient — brightens the top slightly, but mainly anchors the text and CTA area at the bottom */}
        <div
          className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-bg-warm/60 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-bg-warm via-bg-warm/95 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Beatriz full-body cutout (transparent PNG) — centered and prominent */}
        <div
          className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[115%] sm:w-[90%] h-[70%] sm:h-[75%] pointer-events-none select-none z-0"
          style={{
            filter: [
              "drop-shadow(0px 0px 32px rgba(249,237,227,1))",
              "drop-shadow(0px 0px 16px rgba(249,237,227,0.85))",
              "drop-shadow(0px 0px  8px rgba(212,165,116,0.30))",
              "sepia(0.10)",
              "saturate(0.97)",
            ].join(" "),
            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
          aria-hidden="true"
        >
          <Image
            src="/perfil_hero_final.png"
            alt=""
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 639px) 115vw, 90vw"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-end min-h-[100svh] px-5 sm:px-8 pb-10 sm:pb-12 pt-32">
          
          <div className="flex flex-col gap-5 text-center relative z-20 mt-auto">
            {/* Text block */}
            <div className="flex flex-col items-center">
              <p className="text-teal font-bold text-[10px] uppercase tracking-[0.2em] mb-3 leading-none drop-shadow-sm">
                Psicóloga Clínica
              </p>
              <h1 className="font-heading text-[1.6rem] sm:text-[1.85rem] leading-[1.2] font-bold text-txt mb-3 drop-shadow-md">
                A exaustão de estar sempre&nbsp;'on'{" "}
                <em className="not-italic text-teal-dark font-medium block mt-1">
                  não precisa ser sua única realidade.
                </em>
              </h1>
              <p className="text-[0.8rem] sm:text-[0.85rem] text-txt-light/95 leading-[1.6] font-medium max-w-[90%] mx-auto drop-shadow-sm">
                Especialista em saúde mental para criadores de conteúdo e profissionais digitais.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 mt-2">
              <a
                href="https://wa.me/5511988840525"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-primary inline-flex items-center justify-center gap-2 py-3.5 px-8 w-full sm:w-auto !rounded-full text-[0.95rem] font-semibold shadow-warm-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Fale comigo!
              </a>
              <a
                href="/o-que-e-act"
                className="text-teal-dark text-[0.85rem] font-bold hover:underline underline-offset-2 transition-all"
              >
                O que é ACT?&nbsp;→
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DESKTOP HERO (md = 768 px and above) ─── */}
      <div className="hidden md:block relative w-full leading-[0]">
        <Image
          src="/hero_final_composition.png"
          alt="Beatriz Matos — Psicóloga Clínica especialista em Criadores de Conteúdo"
          width={1920}
          height={1080}
          className="w-full h-auto block align-bottom"
          priority
          quality={100}
        />

        {/* Text overlay — flex-centered within the landscape image */}
        <div className="absolute inset-0 z-10 flex items-center pt-36 lg:pt-40">
          <div className="max-w-[1200px] mx-auto w-full px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              <AnimatedSection direction="left" staggerType="premium" staggerChildren={0.1}>

                <AnimatedItem direction="up">
                  <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold text-txt mb-6">
                    A exaustão de estar sempre&nbsp;'on'{" "}
                    <span className="italic text-teal-dark font-medium">
                      não precisa ser sua única realidade.
                    </span>
                  </h1>
                </AnimatedItem>

                <AnimatedItem direction="up">
                  <p className="text-base md:text-lg lg:text-xl text-txt-light leading-relaxed mb-8 max-w-xl">
                    Com anos de atuação direta no suporte a{" "}
                    <strong className="text-txt font-semibold">
                      criadores de conteúdo e profissionais digitais
                    </strong>
                    , ajudo você a navegar pelo burnout, pela pressão do algoritmo e pela ansiedade de performance.
                  </p>

                  <div className="mb-10 text-txt-muted text-sm lg:text-base max-w-xl border-l-2 border-accent/30 pl-4 py-1 italic">
                    Especialista em{" "}
                    <strong className="text-txt">
                      ACT (Terapia de Aceitação e Compromisso)
                    </strong>{" "}
                    aplicada à alta demanda da vida conectada.
                  </div>
                </AnimatedItem>

                <AnimatedItem direction="up">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/5511988840525"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brand-primary inline-flex items-center gap-3 px-8 py-3.5 !rounded-full shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      Fale comigo!
                    </a>
                    <a
                      href="/o-que-e-act"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/60 backdrop-blur-md text-txt-light border border-teal/20 rounded-full hover:bg-white transition-all font-medium"
                    >
                      O que é ACT?
                    </a>
                  </div>
                </AnimatedItem>

              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
