import { Brain, Smile, MonitorSmartphone, Heart, Sprout, Compass } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  desc: string;
  points: string[];
};

const services: Service[] = [
  {
    icon: Brain,
    eyebrow: "Ansiedade · Depressão",
    title: "Sair da espiral",
    desc: "Para quem convive com pensamentos acelerados, preocupação constante ou perda de vontade — e quer voltar a ter algum controle sobre o próprio dia.",
    points: ["Leitura clínica dos gatilhos", "Técnicas de regulação respiratória e cognitiva", "Reconstrução de rotina sustentável"],
  },
  {
    icon: Smile,
    eyebrow: "Autoestima · Autoimagem",
    title: "Parar de se atacar",
    desc: "Para quem vive em crítica interna, se compara o tempo todo e precisa reconstruir uma relação mais honesta — e menos cruel — consigo.",
    points: ["Investigação dos padrões de autocrítica", "Trabalho sobre vergonha e comparação", "Construção de autocompaixão concreta"],
  },
  {
    icon: MonitorSmartphone,
    eyebrow: "Burnout · Vida online",
    title: "Recuperar seu ritmo",
    desc: "Para quem trabalha com criação, imagem, conteúdo ou atendimento digital — e sente que o emocional já não acompanha a exposição.",
    points: ["Limites claros entre vida pessoal e profissional", "Gestão de feedback público e silêncio", "Rotinas de recuperação além do descanso físico"],
  },
  {
    icon: Heart,
    eyebrow: "Relacionamentos",
    title: "Vínculos com mais verdade",
    desc: "Para quem quer se comunicar melhor, colocar limites sem culpa e cultivar relações — afetivas, familiares ou profissionais — mais honestas.",
    points: ["Comunicação não-violenta na prática", "Leitura de padrões relacionais repetidos", "Limites sustentáveis sem ruptura"],
  },
  {
    icon: Sprout,
    eyebrow: "Autoconhecimento",
    title: "Decidir com clareza",
    desc: "Para quem chega em um ponto de virada — carreira, maternidade, relação, projeto de vida — e precisa de espaço para escolher com consciência.",
    points: ["Mapa dos seus valores pessoais", "Diferenciação entre desejo e expectativa dos outros", "Orientação terapêutica sem receita pronta"],
  },
  {
    icon: Compass,
    eyebrow: "ACT · Base teórica",
    title: "Flexibilidade psicológica",
    desc: "A abordagem que orienta o processo. Trabalhamos aceitação do que não muda, ação sobre o que é possível — e a diferença entre os dois.",
    points: ["Desfusão cognitiva", "Valores como bússola", "Ação comprometida, não heróica"],
  },
];

export function Services() {
  return (
    <section className="py-24 px-4 md:px-8 bg-bg-warm" id="servicos">
      <div className="max-w-[1160px] mx-auto">
        <AnimatedSection direction="up">
          <div className="section-label">Áreas de atuação</div>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.1] font-semibold text-txt max-w-3xl">
            O que um processo terapêutico <span className="italic text-teal-dark font-medium">pode, de fato,</span> acompanhar.
          </h2>
          <p className="text-[0.95rem] text-txt-light max-w-2xl mt-4 leading-relaxed">
            Cada atendimento é desenhado com base no que você traz — não em pacotes fechados. Os seis recortes abaixo são os mais frequentes no consultório; o plano é construído junto, com revisões periódicas.
          </p>
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          delay={0.15}
          staggerChildren={0.08}
          staggerType="premium"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 mt-14 border border-gold/20"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedItem key={s.title} direction="up" staggerType="premium">
                <article className="group relative h-full bg-white p-7 transition-all duration-300 hover:bg-[#FFFBF5]">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[0.65rem] tracking-[0.2em] font-semibold text-gold-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="w-5 h-5 text-teal opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  </div>
                  <p className="text-[0.65rem] tracking-[0.18em] uppercase text-teal-dark font-semibold mb-2">{s.eyebrow}</p>
                  <h3 className="font-heading text-xl font-semibold text-txt leading-snug mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[0.85rem] text-txt-light leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-1.5 pt-4 border-t border-gold/20">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[0.78rem] text-txt-light">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>

        <AnimatedSection direction="up" className="mt-10 text-center">
          <p className="text-[0.78rem] text-txt-muted max-w-2xl mx-auto italic">
            Se o seu tema não aparece acima, isso não significa que não atendo. Pode entrar em contato antes — ajusto com você se faz sentido começar.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

