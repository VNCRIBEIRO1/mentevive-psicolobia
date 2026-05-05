import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { Brain, Target, Shield, Zap, Info, ChevronRight } from "lucide-react";

export const metadata = {
  title: "O que é ACT para Criadores de Conteúdo | Psicolobia",
  description: "Entenda como a Terapia de Aceitação e Compromisso (ACT) ajuda criadores de conteúdo a lidar com o burnout, pressão do algoritmo e ansiedade de performance.",
};

export default function ACTPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 text-teal-dark rounded-full text-sm font-semibold mb-8">
            <Brain className="w-4 h-4" />
            Especialidade Clínica
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-txt mb-8 leading-tight">
            ACT para Criadores de Conteúdo: A Ciência da <span className="text-teal italic">Flexibilidade Emocional</span>
          </h1>

          <div className="prose prose-lg prose-stone max-w-none text-txt-light leading-relaxed">
            <p className="text-xl text-txt font-medium mb-10 leading-relaxed">
              A vida de quem produz conteúdo não é apenas sobre criatividade; é sobre a gestão constante de incertezas, julgamento público e a pressão implacável de algoritmos. A <strong className="text-teal-dark">Terapia de Aceitação e Compromisso (ACT)</strong> surge como a abordagem padrão-ouro para navegar nesse ecossistema sem perder a sanidade.
            </p>

            <h2 className="font-heading text-3xl font-bold text-txt mt-16 mb-6">O que é a ACT?</h2>
            <p>
              Diferente de abordagens que tentam "mudar" ou "eliminar" pensamentos negativos, a ACT foca na <strong>Flexibilidade Psicológica</strong>. Ela nos ensina a conviver com o desconforto inevitável da exposição digital enquanto mantemos o foco no que realmente importa: nossos valores e nossa arte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="bg-white p-8 rounded-2xl border border-teal/10 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-txt mb-4">Desfusão Cognitiva</h3>
                <p className="text-sm">
                  Aprenda a se distanciar de pensamentos como "meu engajamento caiu, eu não valho nada". Você não é seus números, e você não é o que pensa.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-teal/10 shadow-sm">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-heading text-xl font-bold text-txt mb-4">Aceitação Expansiva</h3>
                <p className="text-sm">
                  Não se trata de resignação, mas de abrir espaço para a ansiedade de um lançamento ou o medo do cancelamento, sem que eles travem suas ações.
                </p>
              </div>
            </div>

            <h2 className="font-heading text-3xl font-bold text-txt mt-16 mb-6">Por que Criadores precisam da ACT?</h2>
            <p>
              O "Burnout Digital" não é apenas cansaço físico. É o resultado de uma luta interna contra a pressão de ser perfeito. A ACT utiliza seis processos científicos para criar resiliência:
            </p>

            <ul className="space-y-6 my-10 list-none p-0">
              <li className="flex gap-4 items-start bg-bg-warm p-6 rounded-xl">
                <ChevronRight className="w-5 h-5 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="text-txt block text-lg mb-1">Contato com o Momento Presente</strong>
                  A capacidade de estar "off" quando você decide estar, combatendo a hipervigilância das notificações.
                </div>
              </li>
              <li className="flex gap-4 items-start bg-bg-warm p-6 rounded-xl">
                <ChevronRight className="w-5 h-5 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="text-txt block text-lg mb-1">Valores Claros</strong>
                  Parar de criar para o algoritmo e voltar a criar para o seu propósito original.
                </div>
              </li>
              <li className="flex gap-4 items-start bg-bg-warm p-6 rounded-xl">
                <ChevronRight className="w-5 h-5 text-teal shrink-0 mt-1" />
                <div>
                  <strong className="text-txt block text-lg mb-1">Ação Compromissada</strong>
                  Tomar decisões de carreira baseadas no que você valoriza, não no medo de ser esquecido.
                </div>
              </li>
            </ul>

            <div className="mt-20 bg-teal-dark p-10 rounded-3xl text-white text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-white text-3xl font-heading font-bold mb-4">Construa sua Blindagem Emocional</h2>
              <p className="text-white/80 max-w-xl mx-auto mb-10">
                A terapia não é sobre ser menos criativo; é sobre garantir que sua criatividade tenha uma base sólida para crescer.
              </p>
              <a 
                href="https://wa.me/5511988840525" 
                target="_blank"
                className="inline-block bg-primary text-txt font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-all shadow-xl"
              >
                Agendar Sessão Estratégica
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
