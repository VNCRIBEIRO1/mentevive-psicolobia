"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    id: "higiene-sono",
    title: "Higiene do sono para quem não consegue desconectar",
    excerpt: "A qualidade do seu sono dita a qualidade da sua saúde mental. Aprenda a preparar sua mente para o repouso offline.",
    content: [
      "Dificuldade para dormir: O uso excessivo de telas antes de deitar inibe a produção de melatonina e mantém o cérebro em estado de alerta constante, dificultando o início do sono reparador.",
      "Ritual de desconexão: Criar um espaço de transição entre o trabalho digital e o repouso é vital para evitar a insônia causada pela ruminação de tarefas e ansiedade por notificações.",
      "Higiene do sono na prática: Estabelecer horários fixos para desligar aparelhos, reduzir a luz e investir em atividades analógicas à noite ajuda o sistema nervoso a desacelerar e processar o dia.",
    ],
  },
  {
    id: "cta-final",
    title: "Vamos conversar além das telas?",
    excerpt: "Se você se identificou com algum desses temas, o próximo passo é transformar a leitura em ação terapêutica.",
    content: [
      "Início do processo: O espaço terapêutico é o local seguro para você deixar de ser apenas um perfil e voltar a focar em você.",
      "Agendamento: Entre em contato para consultar os horários disponíveis e dar o primeiro passo na sua jornada.",
    ],
  },
  {
    id: "social-media",
    title: "Para além da clínica: insights diários",
    excerpt: "Acompanhe reflexões, bastidores e pílulas de saúde mental no Instagram @psicolobia.",
    content: [
      "Siga @psicolobia: Conteúdo focado em criadores, freelancers e nômades digitais que buscam equilíbrio no caos online.",
      "Comunidade: Troque experiências e participe de lives e caixas de perguntas semanalmente no nosso perfil oficial.",
    ],
  },
];

export function Blog() {
  const [open, setOpen] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="pt-20 md:pt-32 pb-24 md:pb-40 px-4 md:px-8 bg-transparent relative z-10" id="blog">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection direction="up" className="mb-8 bg-white/40 backdrop-blur-sm p-8 md:p-12 border border-teal-dark/5 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="section-label mb-4">Conteúdos</div>
            <h2 className="font-heading text-[3rem] md:text-[4.5rem] leading-[0.9] font-semibold text-txt">
              Artigos & <br/>
              <span className="italic text-teal-dark font-normal">Orientações.</span>
            </h2>
          </div>
          <p className="text-sm text-txt-light/80 max-w-xs leading-relaxed">
            Explorações sobre saúde emocional e a intersecção entre a vida digital e a realidade palpável.
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-start border-t border-l border-teal-dark/10">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="flex-1 flex flex-col w-full">
              {articles
                .filter((_, idx) => idx % 2 === colIndex)
                .map((article, index) => {
                  const isOpen = open === article.id;
                  const globalIndex = colIndex === 0 ? index * 2 : index * 2 + 1;
                  
                  return (
                    <div 
                      key={article.id}
                      className={`group transition-colors duration-500 cursor-pointer p-8 md:p-10 flex flex-col justify-between h-fit bg-white/60 backdrop-blur-md border-r border-b border-teal-dark/10 ${isOpen ? 'bg-white/80' : 'hover:bg-white/80'}`}
                      onClick={() => toggleExpand(article.id)}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-[0.65rem] tracking-[0.2em] font-bold text-teal-dark/40">
                            {article.id === 'cta-final' ? "PRÓXIMO PASSO" : article.id === 'social-media' ? "CONECTE-SE" : (globalIndex + 1).toString().padStart(2, '0')}
                          </span>
                          <Sparkles className={`w-4 h-4 transition-colors ${isOpen ? 'text-teal-dark' : 'text-teal-dark/20 group-hover:text-teal-dark/40'}`} />
                        </div>
                        
                        <h3 className={`font-heading text-xl md:text-2xl font-semibold leading-tight mb-4 transition-colors duration-300 ${isOpen ? 'text-teal-dark' : 'text-txt'}`}>
                          {article.title}
                        </h3>
                        
                        <AnimatePresence initial={false}>
                          {isOpen ? (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 border-t border-teal-dark/5 space-y-4 text-[0.9rem] text-txt-light/95 leading-relaxed">
                                {article.content.map((p, pIdx) => (
                                  <p key={pIdx}>
                                    <strong className="font-semibold text-txt/90">{p.split(':')[0]}</strong>
                                    {p.includes(':') ? ':' + p.split(':').slice(1).join(':') : ''}
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <p className="text-[0.85rem] text-txt-light/80 line-clamp-2">
                              {article.excerpt}
                            </p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-[0.65rem] font-bold text-teal-dark/60 uppercase tracking-widest group-hover:text-teal-dark transition-colors">
                        {isOpen ? "Fechar leitura" : "Ler artigo"}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
