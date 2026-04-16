"use client";
import { CalendarDays, Leaf, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

export function Scheduling() {
  const portalUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}`;

  return (
    <section className="py-20 px-4 md:px-8" id="agendar">
      <div className="max-w-[900px] mx-auto text-center">
        <AnimatedSection direction="up">
          <div className="section-label justify-center">Agendamento</div>
          <h2 className="section-title">Agende sua Sessao</h2>
          <p className="text-txt-light max-w-lg mx-auto mt-3 mb-8">
            Escolha o melhor horario e agende diretamente pelo nosso portal seguro.
            Atendimento 100% online por videochamada.
          </p>

          <div className="glass-strong rounded-brand p-10 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-5">
              <CalendarDays className="w-8 h-8 text-teal" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">
              Portal do Paciente
            </h3>
            <p className="text-sm text-txt-light mb-6">
              Acesse o portal para ver horarios disponiveis, agendar sessoes e
              gerenciar seus atendimentos com total privacidade.
            </p>
            <a
              href={portalUrl}
              className="btn-brand-primary justify-center w-full shimmer-btn"
            >
              <Leaf className="w-4 h-4" />
              Agendar Sessao
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
