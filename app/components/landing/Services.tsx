import { Brain, Smile, MonitorSmartphone, Heart, Sprout, Compass } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { GlassCard } from "./GlassCard";
import type { ReactNode } from "react";

const services: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Brain className="w-7 h-7 text-teal" />, title: "Ansiedade e Depressão", desc: "Acompanhamento clínico para aliviar a sobrecarga emocional e retomar o equilíbrio no cotidiano, com estratégias práticas e acolhimento." },
  { icon: <Smile className="w-7 h-7 text-teal" />, title: "Autoestima e Autoimagem", desc: "Trabalho terapêutico para fortalecer a relação consigo, reduzir autocrítica excessiva e construir uma autoconfiança genuína." },
  { icon: <MonitorSmartphone className="w-7 h-7 text-teal" />, title: "Burnout Digital", desc: "Atendimento especializado para quem vive da internet e enfrenta exaustão, pressão por performance e dificuldade de se desconectar." },
  { icon: <Heart className="w-7 h-7 text-teal" />, title: "Relacionamentos", desc: "Suporte para aprimorar a comunicação, estabelecer limites saudáveis e nutrir vínculos afetivos mais conscientes." },
  { icon: <Sprout className="w-7 h-7 text-teal" />, title: "Autoconhecimento", desc: "Processo terapêutico orientado por valores pessoais, clareza de propósito e construção de uma vida emocionalmente sustentável." },
  { icon: <Compass className="w-7 h-7 text-teal" />, title: "Flexibilidade Psicológica (ACT)", desc: "Abordagem baseada na Terapia de Aceitação e Compromisso para agir com direção e presença, mesmo diante de desconfortos emocionais." },
];

export function Services() {
  return (
    <section className="py-20 px-4 md:px-8 bg-bg-warm" id="servicos">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection direction="up">
          <div className="section-label">Áreas de atuação</div>
          <h2 className="section-title">Cuidado clínico individualizado e online</h2>
          <p className="text-center text-sm text-txt-light max-w-xl mx-auto mt-3">
            Cada processo é único. O plano terapêutico é desenhado com base nas suas necessidades, sempre com escuta atenta e respeito ao seu ritmo.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.15} staggerChildren={0.1} staggerType="premium" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.map((s, i) => (
            <AnimatedItem key={i} direction="up" staggerType="premium">
              <GlassCard className="gold-border-accent border-t-[3px] border-t-transparent hover:border-t-gold transition-colors h-full">
                <div className="mb-3">{s.icon}</div>
                <h3 className="font-heading text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-xs text-txt-light leading-relaxed">{s.desc}</p>
              </GlassCard>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
