"use client";
import { CalendarDays, ArrowRight, UserPlus, LogIn, Video, Stethoscope } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

export function Scheduling() {
  const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}&callbackUrl=/portal/agendar`;
  const registerPatientUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;
  const registerTherapistUrl = `${PLATFORM_URL}/registro?type=therapist`;

  return (
    <section className="py-20 lg:py-28 px-5 md:px-8" id="agendamento">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection direction="up">
          <div className="section-label justify-center">Cadastro e Agendamento</div>
          <h2 className="section-title">Comece sua jornada terapêutica</h2>
          <p className="section-subtitle">
            Cadastro rápido, agendamento online e acompanhamento completo — tudo em um só lugar.
          </p>

          <div className="grid md:grid-cols-3 gap-5 text-left mt-10">
            <a href={registerPatientUrl} className="glass-strong rounded-2xl p-6 hover:shadow-soft-lg transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <UserPlus className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Sou paciente novo</h3>
              <p className="text-sm text-txt-light mb-4">Crie sua conta vinculada ao consultório e acesse o portal seguro.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Criar conta <ArrowRight className="w-4 h-4" /></span>
            </a>

            <a href={loginUrl} className="glass-strong rounded-2xl p-6 hover:shadow-soft-lg transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <LogIn className="w-5 h-5 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Já tenho conta</h3>
              <p className="text-sm text-txt-light mb-4">Entre no portal para agendar, remarcar e acompanhar sua evolução.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Acessar portal <ArrowRight className="w-4 h-4" /></span>
            </a>

            <a href={registerTherapistUrl} className="glass-strong rounded-2xl p-6 hover:shadow-soft-lg transition-all">
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Sou psicólogo(a)</h3>
              <p className="text-sm text-txt-light mb-4">Crie seu próprio consultório online no MenteVive e gerencie tudo em um só lugar.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Criar consultório <ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>

          <div className="mt-10 glass rounded-2xl p-6 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">Como o agendamento funciona</h3>
            </div>
            <ol className="grid sm:grid-cols-2 gap-3 text-sm text-txt-light">
              <li>1. Crie sua conta ou faça login.</li>
              <li>2. Abra o módulo de agenda no Portal do Paciente.</li>
              <li>3. Escolha horário disponível e confirme o agendamento.</li>
              <li>4. Receba notificações e link da videochamada no dia da sessão.</li>
            </ol>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary-dark">
              <Video className="w-4 h-4" /> Sessão única por videochamada (online)
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
