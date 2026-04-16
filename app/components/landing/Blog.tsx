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
    title: "Terapia online funciona?",
    excerpt: "Sim. A eficacia e comparavel ao presencial para diversos quadros clinicos.",
    content: [
      "Atendimento online e regulamentado e permite vinculo terapeutico profundo com praticidade.",
      "Quando ha plano clinico, frequencia e continuidade, os ganhos em ansiedade, depressao e autoconhecimento aparecem de forma consistente.",
    ],
  },
  {
    id: "ansiedade-digital",
    title: "Ansiedade e rotina digital",
    excerpt: "Sobrecarga de informacao e comparacao constante impactam o emocional.",
    content: [
      "A rotina hiperconectada pode amplificar sintomas de ansiedade, culpa e exaustao.",
      "A terapia ajuda a reorganizar limites, recuperar foco e construir uma relacao mais saudavel com trabalho e redes.",
    ],
  },
  {
    id: "primeira-sessao",
    title: "Como e a primeira sessao",
    excerpt: "A primeira conversa define objetivos, contexto e combinados do processo.",
    content: [
      "Voce pode levar sua principal queixa, duvidas e expectativas sem precisar 'ter tudo pronto'.",
      "A sessao inicial e um espaco de acolhimento para entender sua historia e montar o plano terapeutico com clareza.",
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
            <Sparkles className="w-3.5 h-3.5" /> Conteudos
          </span>
          <h2 className="section-title">Blog da landing</h2>
          <p className="text-sm text-txt-light max-w-xl mt-2">
            Conteudo estatico para SEO e educacao do paciente. Nao e editavel pelo painel do SaaS.
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-[900px] mx-auto space-y-3">
        {articles.map((article) => {
          const isOpen = open === article.id;
          return (
            <AnimatedItem key={article.id} direction="up">
              <div className="rounded-2xl border border-primary/10 bg-white overflow-hidden">
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
                  <div className="px-5 pb-5 text-sm text-txt-light space-y-3 border-t border-primary/10">
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
