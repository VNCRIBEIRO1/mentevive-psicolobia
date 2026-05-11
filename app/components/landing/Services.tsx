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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-16 px-4 md:px-8 bg-transparent relative z-10" id="servicos">
      <div className="max-w-[1280px] mx-auto">
        <AnimatedSection direction="up" className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Narrative + 2 Bottom Cards */}
          <div className="lg:w-5/12 flex flex-col gap-8 md:gap-12 shrink-0">
            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-teal-dark/5 shadow-sm">
              <div className="section-label mb-6">Identificação</div>
              
              <h2 className="font-heading text-[2.25rem] sm:text-4xl md:text-[3.25rem] leading-[1.05] font-semibold text-txt mb-8">
                Sua saúde mental não pode <br className="hidden lg:block"/>
                ser <span className="text-teal-dark italic font-normal relative inline-block">
                  refém do algoritmo.
                  <span className="absolute bottom-1 left-0 w-full h-[2px] bg-teal-dark/30"></span>
                </span>
              </h2>
              
              <div className="flex flex-col gap-6 text-[1.05rem] text-txt-light/95 leading-relaxed">
                <p className="font-medium">
                  Você passa o dia criando conexões para os outros, mas quando foi a última vez que se conectou consigo mesmo? 
                </p>
                <p className="font-medium">
                  A pressão por métricas, o medo de 'flopar' e a vida transformada em conteúdo cobram um preço alto.
                </p>
                <p className="font-medium">
                  Aqui, o espaço é <strong className="text-txt">offline</strong> para você voltar a ficar <strong className="text-txt">bem online.</strong>
                </p>
              </div>

              <div className="mt-14 hidden lg:block">
                <p className="text-[0.7rem] text-txt-muted flex items-center gap-4 uppercase tracking-widest font-bold">
                  <span className="w-12 h-[1px] bg-teal-dark/40 block"></span>
                  Clique para explorar
                </p>
              </div>
            </div>

            {/* Bottom 2 Cards on the Left */}
            <div className="flex flex-col gap-4 md:gap-6">
              {services.slice(4, 6).map((s, index) => (
                <motion.div 
                  key={s.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-teal-dark/10 p-1 rounded-none hover:border-teal-dark/30 transition-colors duration-500 shadow-sm"
                >
                  <div className="bg-[#fcfbf9] w-full h-full">
                    <ServiceCard 
                      s={s} 
                      isExpanded={expandedId === s.id} 
                      toggle={() => toggleExpand(s.id)} 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Service Cards */}
          <div className="lg:w-7/12 flex flex-col gap-4 md:gap-6 w-full">
            {services.slice(0, 4).map((s, index) => (
              <motion.div 
                key={s.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-teal-dark/10 p-1 rounded-none hover:border-teal-dark/30 transition-colors duration-500 shadow-sm"
              >
                <div className="bg-[#fcfbf9] w-full h-full">
                  <ServiceCard 
                    s={s} 
                    isExpanded={expandedId === s.id} 
                    toggle={() => toggleExpand(s.id)} 
                  />
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 py-4 px-6 md:px-8 bg-white/40 backdrop-blur-sm border border-teal-dark/5 rounded-none"
            >
              <p className="text-[0.75rem] md:text-[0.8rem] text-txt-muted uppercase tracking-[0.1em] font-medium leading-relaxed text-center lg:text-left">
                Seu problema parece um pouco de cada? <span className="text-teal-dark/70 italic">Fique em paz.</span> <br className="hidden md:block"/>
                Ajustamos na triagem se faz sentido começar.
              </p>
            </motion.div>
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}

// Separated component for cleaner and more isolated animation state
function ServiceCard({ s, isExpanded, toggle }: { s: Service, isExpanded: boolean, toggle: () => void }) {
  const Icon = s.icon;
  
  return (
    <div className="h-full w-full outline-none text-left flex flex-col group rounded-none">
      <button 
        onClick={toggle}
        className="w-full flex-1 flex flex-col p-8 sm:p-10 outline-none text-left justify-between rounded-none cursor-pointer"
      >
        <div className="flex items-start justify-between w-full mb-10">
          <div className="transition-all duration-500 text-teal-dark">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          
          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-6 h-6 flex items-center justify-center transition-colors text-teal-dark"
          >
            {/* Custom Plus/Minus icon for architectural precision */}
            <div className="relative w-4 h-4">
              <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current -translate-y-1/2"></span>
              <motion.span 
                animate={{ opacity: isExpanded ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-0 h-full w-[1.5px] bg-current -translate-x-1/2"
              ></motion.span>
            </div>
          </motion.div>
        </div>
        
        <div>
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-txt-muted/60 font-bold mb-3">
            {s.eyebrow}
          </p>
          <h3 className={`font-heading text-xl font-semibold leading-tight transition-colors duration-300 ${
            isExpanded ? 'text-teal-dark' : 'text-txt group-hover:text-teal-dark'
          }`}>
            {s.title}
          </h3>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 sm:px-10 pb-10 text-txt-light/90 text-[0.9rem] leading-relaxed border-t border-teal-dark/10 pt-6">
              {s.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
