"use client";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function HeroBio() {
  return (
    <section className="relative w-full overflow-hidden bg-bg-warm" id="sobre">
      {/* 
         Using a relative container with the image defining the aspect ratio 
         to ensure the "complete hero" (full body) is always visible.
      */}
      <div className="relative w-full">
        <Image
          src="/hero_final_composition.png"
          alt="Beatriz Matos — Psicóloga Clínica"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
          quality={100}
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center pt-20 md:pt-28 lg:pt-32">
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
                    Psicóloga online especialista no impacto emocional da vida digital: ansiedade, burnout e autoconhecimento.
                  </p>
                  
                  <div className="hidden md:block mb-6 lg:mb-10 text-txt-muted text-xs md:text-sm lg:text-base max-w-xl border-l-2 border-accent/30 pl-4 py-1 italic">
                    Abordagem com <strong className="text-txt">ACT</strong> — para quem vive da internet e ainda se sente constantemente no limite.
                  </div>
                </AnimatedItem>

                <AnimatedItem direction="up">
                  <a 
                    href="https://wa.me/5511988840525" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-brand-primary inline-flex items-center gap-2 md:gap-3 px-5 md:px-8 py-2 md:py-3.5 !rounded-full shadow-lg transition-all text-xs md:text-base"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    Fale comigo!
                  </a>
                </AnimatedItem>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
