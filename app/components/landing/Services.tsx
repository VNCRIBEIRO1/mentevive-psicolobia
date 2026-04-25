"use client";
import { useState } from "react";
import { Brain, Smile, MonitorSmartphone, Heart, Sprout, Compass, ChevronDown } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import type { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  desc: string;
};

const services: Service[] = [
  {
    id: "burnout",
    icon: MonitorSmartphone,
    eyebrow: "Burnout Digital · Exaustão",
    title: "O peso de estar sempre 'on'",
    desc: "Para quem vive de produzir conteúdo e sente que criar virou apenas uma fábrica de exaustão. Vamos trabalhar a fadiga criativa, a pressão de estar sempre visível e a construção urgente de limites entre sua vida e seu @.",
  },
  {
    id: "autoestima",
    icon: Smile,
    eyebrow: "Autoimagem · Comparação",
    title: "Cansaço do engajamento",
    desc: "A sensação constante de estar para trás, a comparação com os bastidores irreais e a montanha-russa emocional diante de likes, haters e unfollows. Construímos autoimagem além da validação algorítmica.",
  },
  {
    id: "ansiedade",
    icon: Brain,
    eyebrow: "Ansiedade · Sobrecarga",
    title: "Desacelerando a mente",
    desc: "Aquela cobrança invisível que não desliga nunca, atrapalhando o foco e destruindo seu sono. Focamos em identificar os gatilhos silenciosos da rotina digital e desenvolver uma 'respiradinha' real pra sua cabeça.",
  },
  {
    id: "relacionamentos",
    icon: Heart,
    eyebrow: "Limites · Vínculos",
    title: "Relações (reais) sustentáveis",
    desc: "Como cultivar e proteger suas relações reais no meio do seu trabalho digital? Falamos aqui sobre como colocar limites assertivos, sem sentir culpa, para amigos, família e parceiros de negócio.",
  },
  {
    id: "identidade",
    icon: Sprout,
    eyebrow: "Autoconhecimento",
    title: "Descobrir o que existe fora da tela",
    desc: "Para quem bateu de frente com um ponto de virada: cansou de um nicho, não se reconhece mais no conteúdo que posta ou quer redescobrir hobbies que não precisem, obrigatoriamente, ser monetizados.",
  },
  {
    id: "act",
    icon: Compass,
    eyebrow: "Como funciona?",
    title: "Flexibilidade na Prática (ACT)",
    desc: "A Terapia de Aceitação e Compromisso (ACT) não vai prometer que o 'hate' não doa ou que a cobrança suma. Vamos aprender juntos a conviver com o ruído da internet sem paralisar sua vida ou perder o que tem valor real pra você.",
  },
];

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>("burnout");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-transparent" id="servicos">
      <div className="max-w-[1000px] mx-auto text-center">
        <AnimatedSection direction="up">
          <div className="section-label justify-center">Áreas de atuação</div>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.1] font-semibold text-txt max-w-2xl mx-auto">
            O que trabalhamos no consultório.
          </h2>
          <p className="text-[0.95rem] text-txt-light max-w-xl mx-auto mt-4 leading-relaxed">
            Seis realidades super comuns de quem vive (e sofre um pouquinho) com a internet, e como o processo terapêutico ajuda a organizar essas pontas soltas.
          </p>
        </AnimatedSection>
      </div>

      <div className="max-w-[700px] mx-auto mt-14 flex flex-col gap-3 relative">
        {/* Subtle decorative elements behind the accordion */}
        <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />
        
        {services.map((s, i) => {
          const Icon = s.icon;
          const isExpanded = expandedId === s.id;

          return (
            <AnimatedSection direction="up" delay={0.05 * i} key={s.id}>
              <div 
                className={`bg-white/70 backdrop-blur-md border rounded-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'border-accent shadow-[0_4px_20px_-2px_rgba(178,152,220,0.25)]' : 'border-gold/30 hover:border-accent hover:shadow-[0_4px_12px_-2px_rgba(178,152,220,0.15)] cursor-pointer'}`}
              >
                <button 
                  onClick={() => toggleExpand(s.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left outline-none"
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-accent/80 text-white' : 'bg-bg-warm text-teal-dark'}`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] tracking-[0.18em] uppercase text-txt-muted font-semibold mb-1">
                        {s.eyebrow}
                      </p>
                      <h3 className={`font-heading text-lg md:text-xl font-semibold transition-colors ${isExpanded ? 'text-[#7D5CAD]' : 'text-txt'}`}>
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${isExpanded ? 'bg-accent/20 text-[#7D5CAD]' : 'bg-transparent text-txt-muted'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-[5.2rem] pb-6 md:pb-7 text-txt-light text-[0.9rem] leading-relaxed">
                        <div className="w-12 h-px bg-gold/50 mb-4" />
                        {s.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection direction="up" className="mt-10 text-center">
        <p className="text-[0.78rem] text-txt-muted max-w-lg mx-auto italic">
          O seu problema parece um pouco de cada e nada ao mesmo tempo? Fique em paz. Nenhuma sessão é igual a outra, ajustamos na triagem se faz sentido começar.
        </p>
      </AnimatedSection>
    </section>
  );
}
