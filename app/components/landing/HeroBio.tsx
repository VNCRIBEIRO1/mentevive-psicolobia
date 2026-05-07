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

        {/* Warm gradient — brightens the text area at top and anchors the
            CTA area at the bottom so both layers are always legible */}
        <div
          className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-bg-warm/60 via-bg-warm/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-bg-warm/85 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Beatriz full-body cutout (transparent PNG) — anchored bottom-right,
            composited on top of the botanical background just like the desktop.
            Drop-shadow in bg-warm color creates a warm halo that softens the
            silhouette edges; mask gradient fades the left edge into the background. */}
        <div
          className="absolute bottom-0 right-0 w-[60%] sm:w-[55%] h-[62%] sm:h-[68%] pointer-events-none select-none"
          style={{
            filter: [
              "drop-shadow(0px 0px 32px rgba(249,237,227,1))",
              "drop-shadow(0px 0px 16px rgba(249,237,227,0.85))",
              "drop-shadow(0px 0px  8px rgba(212,165,116,0.30))",
              "sepia(0.10)",
              "saturate(0.97)",
            ].join(" "),
            maskImage:
              "linear-gradient(to right, transparent 0%, black 14%, black 100%)," +
              "linear-gradient(to bottom, transparent 0%, black 6%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 14%, black 100%)," +
              "linear-gradient(to bottom, transparent 0%, black 6%, black 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
          aria-hidden="true"
        >
          <Image
            src="/perfil_hero_final.png"
            alt=""
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 639px) 60vw, 55vw"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col min-h-[100svh] px-5 sm:px-8 pt-[7.5rem] sm:pt-36 pb-8">

          {/* Text block — constrained to the left clear area */}
          <div className="max-w-[54%] sm:max-w-[48%]">
            <p className="text-teal font-bold text-[10px] uppercase tracking-[0.2em] mb-3 leading-none">
              Psicóloga Clínica
            </p>
            <h1 className="font-heading text-[1.5rem] sm:text-[1.75rem] leading-[1.2] font-bold text-txt mb-2">
              A exaustão de estar sempre&nbsp;'on'{" "}
              <em className="not-italic text-teal-dark font-medium">
                não precisa ser sua única realidade.
              </em>
            </h1>
            <p className="text-[0.7rem] sm:text-xs text-txt-light leading-[1.6]">
              Especialista em saúde mental para criadores de conteúdo e profissionais digitais.
            </p>
          </div>

          {/* Spacer — pushes CTA to the bottom of the viewport */}
          <div className="flex-1" />

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5511988840525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand-primary inline-flex items-center gap-2 py-3.5 px-6 !rounded-full text-sm shadow-warm-lg self-start"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Fale comigo!
            </a>
            <a
              href="/act-para-criadores"
              className="text-teal-dark text-xs font-semibold self-start hover:underline underline-offset-2 transition-all"
            >
              O que é ACT?&nbsp;→
            </a>
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
                      href="/act-para-criadores"
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
