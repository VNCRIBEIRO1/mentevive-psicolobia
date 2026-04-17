import type { Metadata } from "next";
import { HowItWorks } from "./HowItWorks";
import { Header } from "@/app/components/landing/Header";
import { Footer } from "@/app/components/landing/Footer";
import { WhatsAppFloat } from "@/app/components/landing/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Como Funciona — Portal do Paciente e Painel da Psicóloga",
  description:
    "Veja como funciona o portal do paciente e o painel administrativo da psicóloga. Agendamento, evolução, prontuários, pagamentos e muito mais.",
};

export default function ComoFuncionaPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-20">
        <HowItWorks />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
