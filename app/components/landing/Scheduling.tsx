"use client";
import { CalendarDays, Leaf, ArrowRight, UserPlus, LogIn, Video } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

export function Scheduling() {
  const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}&callbackUrl=/portal/agendar`;
  const registerPatientUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;
  const registerTherapistUrl = `${PLATFORM_URL}/registro?type=therapist`;

  return (
    <section className="py-20 px-4 md:px-8" id="agendamento">
      <div className="max-w-[1020px] mx-auto text-center">
        <AnimatedSection direction="up">
          <div className="section-label justify-center">Cadastro e Agendamento</div>
          <h2 className="section-title">Fluxo novo do portal multi-tenant</h2>
          <p className="text-txt-light max-w-2xl mx-auto mt-3 mb-8">
            Toda a jornada acontece no MenteVive com tenant pre-selecionado: cadastro, login,
            agendamento e acompanhamento da sessao por videochamada.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            <a href={registerPatientUrl} className="glass-strong rounded-brand p-6 hover:shadow-warm-lg transition-all">
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <UserPlus className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Sou paciente novo</h3>
              <p className="text-sm text-txt-light mb-4">Crie sua conta ja vinculada ao consultorio e acesse o portal seguro.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Criar conta <ArrowRight className="w-4 h-4" /></span>
            </a>

            <a href={loginUrl} className="glass-strong rounded-brand p-6 hover:shadow-warm-lg transition-all">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <LogIn className="w-5 h-5 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Ja tenho conta</h3>
              <p className="text-sm text-txt-light mb-4">Entre direto no portal do tenant para agendar, remarcar e acompanhar sua evolucao.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Acessar portal <ArrowRight className="w-4 h-4" /></span>
            </a>

            <a href={registerTherapistUrl} className="glass-strong rounded-brand p-6 hover:shadow-warm-lg transition-all">
              <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5 text-accent-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Sou psicologo(a)</h3>
              <p className="text-sm text-txt-light mb-4">Crie seu proprio consultorio no SaaS MenteVive e tenha seu tenant dedicado.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Criar consultorio <ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>

          <div className="mt-8 glass rounded-brand p-6 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Como o agendamento funciona</h3>
            </div>
            <ol className="grid sm:grid-cols-2 gap-3 text-sm text-txt-light">
              <li>1. Crie conta ou faca login com tenant predefinido.</li>
              <li>2. Abra o modulo de agenda no Portal do Paciente.</li>
              <li>3. Escolha horario disponivel e confirme o agendamento.</li>
              <li>4. Receba notificacoes e link da videochamada no dia da sessao.</li>
            </ol>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-teal-dark">
              <Video className="w-4 h-4" /> Sessao unica por videochamada (online)
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
