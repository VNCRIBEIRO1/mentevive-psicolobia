"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function HeroBio() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-warm" id="sobre">
      {/* 
         Using a relative container with the image defining the aspect ratio 
         to ensure the "complete hero" is anchored to the bottom divider.
      */}
      <div className="relative w-full leading-[0] flex flex-col justify-end">
        <Image
          src="/hero_final_composition.png"
          alt="Beatriz Matos — Psicóloga Clínica especialista em Criadores de Conteúdo"
          width={1920}
          height={1080}
          className="w-full h-auto block align-bottom"
          priority
          quality={100}
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center pt-16 md:pt-24 lg:pt-28">
          <div className="max-w-[1200px] mx-auto w-full px-4 md:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              <AnimatedSection direction="left" staggerType="premium" staggerChildren={0.1}>
                <AnimatedItem direction="up">
                  <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold text-txt mb-4 md:mb-6">
                    A exaustão de estar sempre 'on' <span className="italic text-teal-dark font-medium">não precisa ser sua única realidade.</span>
                  </h1>
                </AnimatedItem>

                <AnimatedItem direction="up">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-txt-light leading-relaxed mb-4 md:mb-8 max-w-xl">
                    Com anos de atuação direta no suporte a <strong className="text-txt font-semibold">criadores de conteúdo e profissionais digitais</strong>, ajudo você a navegar pelo burnout, pela pressão do algoritmo e pela ansiedade de performance.
                  </p>
                  
                  <div className="hidden md:block mb-6 lg:mb-10 text-txt-muted text-xs md:text-sm lg:text-base max-w-xl border-l-2 border-accent/30 pl-4 py-1 italic">
                    Especialista em <strong className="text-txt">ACT (Terapia de Aceitação e Compromisso)</strong> aplicada à alta demanda da vida conectada.
                  </div>
                </AnimatedItem>

                <AnimatedItem direction="up">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://wa.me/5511988840525" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-brand-primary inline-flex items-center gap-2 md:gap-3 px-5 md:px-8 py-2 md:py-3.5 !rounded-full shadow-lg transition-all text-xs md:text-base"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                      Fale comigo!
                    </a>
                    <a 
                      href="/act-para-criadores"
                      className="inline-flex items-center gap-2 px-5 md:px-8 py-2 md:py-3.5 bg-white/60 backdrop-blur-md text-txt-light border border-teal/20 rounded-full hover:bg-white transition-all text-xs md:text-base font-medium"
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
