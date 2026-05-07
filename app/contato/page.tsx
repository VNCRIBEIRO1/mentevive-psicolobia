import { Header } from "../components/landing/Header";
import { Footer } from "../components/landing/Footer";
import { Contact } from "../components/landing/Contact";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Contato | Psicolobia",
  description:
    "Entre em contato com a psicóloga Beatriz Matos (Psicolobia). Atendimento online em todo o Brasil. Tire dúvidas pelo WhatsApp, redes sociais ou pelo formulário.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      <div className="pt-32 pb-8 px-4 md:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 text-teal-dark rounded-full text-sm font-semibold mb-8">
            <Mail className="w-4 h-4" />
            Entre em Contato
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-txt mb-6 leading-tight">
            Vamos <span className="text-teal italic">conversar</span>
          </h1>
          <p className="text-lg text-txt-light leading-relaxed max-w-2xl mx-auto">
            Tire dúvidas sobre atendimento, peça orientações sobre cadastro no portal ou apenas converse
            antes de decidir. Cada mensagem é respondida pessoalmente — em até 24 horas úteis.
          </p>
        </div>
      </div>

      <Contact />

      <Footer />
    </main>
  );
}
