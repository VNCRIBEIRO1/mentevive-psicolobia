"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
};

const articles: Article[] = [
  {
    id: "online-funciona",
    title: "Terapia online realmente funciona?",
    excerpt: "Estudos comprovam: a eficácia é comparável ao atendimento presencial para a maioria dos quadros clínicos.",
    content: [
      "O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia e permite a construção de um vínculo terapêutico profundo, seguro e prático — sem sair de casa.",
      "Quando há plano clínico estruturado, frequência consistente e compromisso mútuo, os resultados em quadros de ansiedade, depressão e dificuldades emocionais são expressivos e duradouros.",
      "A modalidade online também amplia o acesso: pessoas em cidades menores, com rotinas intensas ou que preferem a privacidade do próprio espaço conseguem manter a regularidade do processo sem barreiras geográficas.",
    ],
  },
  {
    id: "ansiedade-digital",
    title: "Ansiedade e a rotina de quem vive da internet",
    excerpt: "Sobrecarga de informação, comparação constante e cobrança por performance afetam o equilíbrio emocional.",
    content: [
      "A hiperconexão pode amplificar sintomas de ansiedade, culpa, exaustão e até despersonalização — a sensação de que a vida online e a vida real são duas pessoas diferentes.",
      "Criadores de conteúdo, colunistas e profissionais digitais enfrentam demandas únicas: métricas de engajamento, exposição contínua e a pressão de estarem sempre \"disponíveis\" e \"relevantes\".",
      "A terapia oferece ferramentas concretas para reorganizar limites, identificar gatilhos, recuperar o foco e construir uma relação mais saudável entre trabalho digital e saúde mental.",
    ],
  },
  {
    id: "primeira-sessao",
    title: "Como é a primeira sessão de terapia?",
    excerpt: "Um espaço de acolhimento onde definimos juntos os objetivos, o contexto e os combinados do processo.",
    content: [
      "Você não precisa chegar com tudo pronto ou com um diagnóstico em mente. Traga sua principal inquietação, suas dúvidas e suas expectativas — o restante a gente constrói junto.",
      "A primeira sessão é dedicada a conhecer sua história, entender o que te trouxe até aqui e alinhar como o processo terapêutico vai funcionar na prática: frequência, formato e objetivos iniciais.",
      "É normal sentir um misto de ansiedade e alívio. O importante é saber que você não será julgado(a) — apenas acolhido(a).",
    ],
  },
  {
    id: "autoestima-autoimagem",
    title: "Autoestima: como a terapia pode ajudar",
    excerpt: "A autocrítica excessiva e a comparação constante minam a confiança. A terapia reconstrói essa relação.",
    content: [
      "A autoestima não é sobre achar que somos perfeitos — é sobre desenvolver uma relação honesta e compassiva consigo. Na terapia, investigamos padrões de pensamento que alimentam a insegurança e a desvalorização pessoal.",
      "Muitas pessoas convivem com uma voz interna severa que minimiza conquistas, amplifica falhas e gera paralisia diante de decisões importantes. Esse padrão pode ser trabalhado e transformado.",
      "Com a abordagem ACT, aprendemos a observar esses pensamentos sem nos fundir a eles, direcionando energia para ações alinhadas aos nossos valores reais — não às expectativas dos outros.",
    ],
  },
  {
    id: "burnout-digital",
    title: "Burnout digital: quando a exaustão vai além do cansaço",
    excerpt: "A sobrecarga emocional do trabalho online tem características próprias que merecem atenção clínica.",
    content: [
      "O burnout digital não é apenas cansaço físico: envolve esgotamento emocional, cinismo em relação ao próprio trabalho e sensação de ineficácia — mesmo quando os resultados externos parecem positivos.",
      "Para quem vive da internet, os limites entre vida pessoal e profissional se diluem. O celular é ao mesmo tempo ferramenta de trabalho e canal de lazer, o que torna a desconexão quase impossível sem estratégia.",
      "O processo terapêutico ajuda a identificar o ponto de ruptura, restabelecer fronteiras saudáveis e reconstruir uma rotina que respeite a capacidade real — não apenas a expectativa do algoritmo.",
    ],
  },
  {
    id: "flexibilidade-psicologica",
    title: "O que é flexibilidade psicológica e por que ela importa",
    excerpt: "A base da Terapia de Aceitação e Compromisso (ACT): agir com presença e propósito, mesmo diante do desconforto.",
    content: [
      "Flexibilidade psicológica é a capacidade de estar presente no momento atual, aceitar experiências internas difíceis (pensamentos, emoções, sensações) e agir de forma alinhada com o que realmente importa para você.",
      "Na prática, significa parar de lutar contra a ansiedade para eliminá-la e começar a construir uma vida rica e significativa mesmo quando ela aparece.",
      "A ACT não busca \"consertar\" o que você sente. Busca ampliar seu repertório de ação para que emoções desconfortáveis não ditem suas escolhas. É uma mudança sutil, mas profundamente transformadora.",
    ],
  },
  {
    id: "regulacao-emocional",
    title: "Regulação emocional: entender antes de reagir",
    excerpt: "Aprender a reconhecer e acolher emoções é o primeiro passo para não ser controlado por elas.",
    content: [
      "Regulação emocional não é sobre reprimir sentimentos ou manter a calma o tempo todo. É a habilidade de perceber o que sentimos, nomear essa experiência e escolher como responder — em vez de reagir no automático.",
      "Pessoas com dificuldade de regulação frequentemente alternam entre explosões emocionais e entorpecimento. Ambos são estratégias de proteção que, com o tempo, geram sofrimento.",
      "Na terapia, desenvolvemos juntos um vocabulário emocional mais rico, práticas de atenção ao corpo e técnicas de defusão cognitiva que ajudam a criar espaço entre o estímulo e a resposta.",
    ],
  },
];

export function Blog() {
  const [open, setOpen] = useState<string | null>(articles[0].id);

  return (
    <section className="py-24 px-4 md:px-8 bg-bg-warm" id="blog">
      <AnimatedSection className="max-w-[900px] mx-auto" direction="up">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 text-teal text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Conteúdos
          </span>
          <h2 className="section-title">Artigos e Orientações</h2>
          <p className="text-sm text-txt-light max-w-xl mt-2">
            Informações úteis sobre terapia, saúde emocional e o processo terapêutico.
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-[900px] mx-auto space-y-3">
        {articles.map((article) => {
          const isOpen = open === article.id;
          return (
            <AnimatedItem key={article.id} direction="up">
              <div className="rounded-2xl border border-gold/15 hover:border-accent/80 bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_4px_24px_-4px_rgba(178,152,220,0.2)]">
                <button
                  className="w-full px-5 py-4 flex items-start justify-between gap-3 text-left"
                  onClick={() => setOpen(isOpen ? null : article.id)}
                >
                  <div>
                    <h3 className="font-heading text-base font-semibold text-txt">{article.title}</h3>
                    <p className="text-xs text-txt-light mt-1">{article.excerpt}</p>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-teal mt-1" /> : <ChevronDown className="w-4 h-4 text-teal mt-1" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-txt-light space-y-3 border-t border-gold/10">
                    {article.content.map((p, i) => (
                      <p key={i} className="pt-3">{p}</p>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedItem>
          );
        })}
      </div>
    </section>
  );
}
