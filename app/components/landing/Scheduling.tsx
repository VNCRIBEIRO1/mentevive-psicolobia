"use client";
import { CalendarDays, Leaf, ArrowRight, UserPlus, LogIn, Video, Clock, Camera, MonitorSmartphone, CalendarCheck } from "lucide-react";
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
          <h2 className="section-title">Comece sua jornada terapêutica</h2>
          <p className="text-txt-light max-w-2xl mx-auto mt-3 mb-8">
            Cadastro simples, agendamento online e acompanhamento completo — tudo em um só lugar, com segurança e praticidade.
          </p>

          {/* How therapy works */}
          <div className="glass-strong rounded-brand p-6 max-w-3xl mx-auto text-left mb-8">
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-teal" /> Como funciona a terapia
            </h3>
            <p className="text-sm text-txt-light leading-relaxed mb-4">
              A terapia é um espaço seguro e confidencial onde você pode explorar seus pensamentos, sentimentos e comportamentos. É um processo colaborativo entre mim e você, que vai te ajudar a entender melhor a si e a encontrar novas formas de lidar com a vida.
            </p>
            <p className="text-sm text-txt-light leading-relaxed mb-4">
              Cada sessão é única e personalizada. No entanto, seguem alguns combinados:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-teal" />
                </div>
                <p className="text-sm text-txt-light">As sessões duram de <strong>50 minutos a 1 hora</strong>.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MonitorSmartphone className="w-4 h-4 text-teal" />
                </div>
                <p className="text-sm text-txt-light">São <strong>online</strong>, realizadas por videochamada segura.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Camera className="w-4 h-4 text-teal" />
                </div>
                <p className="text-sm text-txt-light">Você pode participar com <strong>câmera aberta ou fechada</strong> — como se sentir mais à vontade.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarCheck className="w-4 h-4 text-teal" />
                </div>
                <p className="text-sm text-txt-light">Opção de sessões <strong>semanais ou quinzenais</strong> — você escolhe o ritmo.</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            <div className="glass-strong rounded-brand p-6 text-center border-2 border-teal/30">
              <div className="text-[0.68rem] font-bold text-teal uppercase tracking-widest mb-2">Sessão Semanal</div>
              <div className="font-heading text-3xl font-bold text-txt">R$ 120<span className="text-base font-normal text-txt-muted">/sessão</span></div>
              <p className="text-xs text-txt-light mt-2">Frequência semanal com valor reduzido para continuidade do processo terapêutico.</p>
            </div>
            <div className="glass-strong rounded-brand p-6 text-center">
              <div className="text-[0.68rem] font-bold text-primary-dark uppercase tracking-widest mb-2">Avulsa / Quinzenal / Mensal</div>
              <div className="font-heading text-3xl font-bold text-txt">R$ 150<span className="text-base font-normal text-txt-muted">/sessão</span></div>
              <p className="text-xs text-txt-light mt-2">Para sessões avulsas ou com frequência quinzenal ou mensal.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            <a href={registerPatientUrl} className="glass-strong rounded-brand p-6 hover:shadow-warm-lg transition-all">
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <UserPlus className="w-5 h-5 text-teal" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Sou paciente novo</h3>
              <p className="text-sm text-txt-light mb-4">Crie sua conta vinculada ao consultório e acesse o portal seguro.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Criar conta <ArrowRight className="w-4 h-4" /></span>
            </a>

            <a href={loginUrl} className="glass-strong rounded-brand p-6 hover:shadow-warm-lg transition-all">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <LogIn className="w-5 h-5 text-primary-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Já tenho conta</h3>
              <p className="text-sm text-txt-light mb-4">Entre no portal para agendar, remarcar e acompanhar sua evolução.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Acessar portal <ArrowRight className="w-4 h-4" /></span>
            </a>

            <a href={registerTherapistUrl} className="glass-strong rounded-brand p-6 hover:shadow-warm-lg transition-all">
              <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5 text-accent-dark" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Sou psicólogo(a)</h3>
              <p className="text-sm text-txt-light mb-4">Crie seu próprio consultório online no MenteVive e gerencie tudo em um só lugar.</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-dark">Criar consultório <ArrowRight className="w-4 h-4" /></span>
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
              <li>1. Crie sua conta ou faça login.</li>
              <li>2. Abra o módulo de agenda no Portal do Paciente.</li>
              <li>3. Escolha horário disponível e confirme o agendamento.</li>
              <li>4. Receba notificações e link da videochamada no dia da sessão.</li>
            </ol>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-teal-dark">
              <Video className="w-4 h-4" /> Sessão individual por videochamada (online)
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
