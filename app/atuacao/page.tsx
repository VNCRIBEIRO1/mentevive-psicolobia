import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { Services } from "../components/landing/Services";
import { Compass, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Áreas de Atuação | Psicolobia",
  description:
    "Atendimento psicológico online especializado em criadores de conteúdo, profissionais digitais e nômades digitais — burnout digital, ansiedade de performance, autoestima, relacionamentos e ACT.",
  alternates: { canonical: "/atuacao" },
};

const faqs = [
  {
    q: "Atendimento é online?",
    a: "Sim, todas as sessões são por videochamada criptografada (Jitsi/Meet). Você pode participar de qualquer lugar do Brasil ou do exterior.",
  },
  {
    q: "Como funciona a primeira sessão?",
    a: "A primeira sessão é uma triagem (avaliação inicial) onde mapeamos seu momento, seus objetivos e definimos juntos se a abordagem ACT faz sentido para você. Não há compromisso de continuar.",
  },
  {
    q: "Qual a duração e frequência das sessões?",
    a: "Cada sessão dura 50 minutos. A frequência inicial recomendada é semanal, podendo ser ajustada conforme o processo terapêutico evolui.",
  },
  {
    q: "Você atende fora do horário comercial?",
    a: "Sim, há horários disponíveis no fim do dia e em alguns dias específicos da semana. Os horários atuais estão na agenda do portal após o cadastro.",
  },
  {
    q: "Posso pagar com plano de saúde?",
    a: "Não atendemos por convênio, mas é possível solicitar reembolso ao seu plano. Emito recibo no padrão exigido (com CRP, CPF e descrição do serviço).",
  },
];

export default function AtuacaoPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      <div className="pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 text-teal-dark rounded-full text-sm font-semibold mb-8">
            <Compass className="w-4 h-4" />
            Áreas de Atuação
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-txt mb-6 leading-tight">
            Para quem vive da{" "}
            <span className="text-teal italic">internet</span> e quer voltar a viver bem.
          </h1>
          <p className="text-lg text-txt-light leading-relaxed max-w-2xl mx-auto">
            Atendimento psicológico clínico online em abordagem ACT (Terapia de Aceitação e Compromisso),
            especializado nas demandas de quem trabalha com conteúdo digital, marketing, tecnologia e
            criação. Cada um dos temas abaixo é trabalhado de forma única — você não precisa se encaixar
            em todos.
          </p>
        </div>
      </div>

      <Services />

      <section className="py-16 px-4 md:px-8 bg-bg-warm/40">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-txt text-center mb-12">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-teal/10 rounded-2xl p-6 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer font-heading text-lg font-semibold text-txt list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-teal-dark transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-4 text-txt-light leading-relaxed text-[0.95rem]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[800px] mx-auto bg-teal-dark p-10 md:p-14 rounded-3xl text-white text-center shadow-warm-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Sua história merece ser ouvida com cuidado
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
            Se algum dos temas acima ressoou em você, vamos conversar. Sem compromisso de continuar — a
            triagem inicial é justamente para entendermos juntos se faz sentido.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-txt font-bold px-8 py-3.5 rounded-full hover:bg-primary-light transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              Outras formas de contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
