import { Brain, HeartCrack, MonitorSmartphone, Heart, Sprout, Compass } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { GlassCard } from "./GlassCard";
import type { ReactNode } from "react";

const services: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Brain className="w-7 h-7 text-primary" />, title: "Ansiedade e depressão", desc: "Acompanhamento clínico para reduzir sobrecarga emocional e recuperar estabilidade no dia a dia." },
  { icon: <HeartCrack className="w-7 h-7 text-primary" />, title: "Traumas", desc: "Cuidado gradual e seguro para elaborar experiências difíceis sem reviver tudo sozinho(a)." },
  { icon: <MonitorSmartphone className="w-7 h-7 text-primary" />, title: "Burnout digital", desc: "Atendimento para quem vive da internet e sente pressão constante de performance." },
  { icon: <Heart className="w-7 h-7 text-primary" />, title: "Relacionamentos", desc: "Suporte para melhorar comunicação, limites e qualidade dos vínculos importantes." },
  { icon: <Sprout className="w-7 h-7 text-primary" />, title: "Autoconhecimento", desc: "Processo terapêutico focado em valores, clareza de objetivos e saúde emocional sustentável." },
  { icon: <Compass className="w-7 h-7 text-primary" />, title: "Flexibilidade psicológica", desc: "Abordagem ACT para agir com direção mesmo em momentos de ansiedade ou insegurança." },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28 px-5 md:px-8 bg-bg-warm" id="servicos">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up">
          <div className="section-label">Áreas de atuação</div>
          <h2 className="section-title">Cuidado clínico focado em videochamada</h2>
          <p className="section-subtitle">
            Sessões individuais online com plano terapêutico organizado por área principal.
          </p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.15} staggerChildren={0.1} staggerType="premium" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s, i) => (
            <AnimatedItem key={i} direction="up" staggerType="premium">
              <GlassCard className="border-t-[3px] border-t-transparent hover:border-t-primary transition-colors h-full">
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mb-4">{s.icon}</div>
                <h3 className="font-heading text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-txt-light leading-relaxed">{s.desc}</p>
              </GlassCard>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
