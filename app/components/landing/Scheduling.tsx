"use client";
import { ArrowRight, UserPlus, LogIn, Video, CalendarCheck, Sparkles, CreditCard, FileText, Leaf, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

export function Scheduling() {
  const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}&callbackUrl=/portal/agendar`;
  const registerPatientUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;

  return (
    <section className="py-24 px-4 md:px-8 bg-white" id="agendamento">
      <div className="max-w-[800px] mx-auto">
        <AnimatedSection direction="up" className="text-center">
          <div className="section-label justify-center">O Próximo Passo</div>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.1] font-semibold text-txt mb-5">
            Tudo pelo seu <span className="italic text-teal-dark font-medium">Portal Seguro.</span>
          </h2>
          <p className="text-[1.05rem] text-txt-light leading-relaxed mb-6">
            Sem secretária virtual atrapalhando e sem planilhas confusas. Todo o seu processo terapêutico é gerenciado por você, de forma autônoma e segura, dentro do nosso Portal do Paciente.
          </p>
          <div className="bg-[#FFFBF5] border border-accent/30 rounded-xl p-8 text-left shadow-[0_4px_24px_-4px_rgba(178,152,220,0.15)]">
            <h3 className="font-heading text-xl font-semibold text-txt mb-4">O que você encontra do outro lado da porta?</h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-5">
              <div className="flex gap-3">
                <CalendarCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-txt-light leading-snug"><strong className="text-txt font-semibold block mb-0.5 text-[0.8rem]">Autonomia de agenda</strong>Marque ou transfira sessões com um clique, sem depender de "horário comercial".</p>
              </div>
              <div className="flex gap-3">
                <Sparkles className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-txt-light leading-snug"><strong className="text-txt font-semibold block mb-0.5 text-[0.8rem]">Sala de espera virtual</strong>Um ambiente focado para você desacelerar a cabeça antes de abrirmos a chamada.</p>
              </div>
              <div className="flex gap-3">
                <CreditCard className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-txt-light leading-snug"><strong className="text-txt font-semibold block mb-0.5 text-[0.8rem]">Pagamentos sem atrito</strong>Assinaturas automáticas no cartão ou PIX. Fim das tabelas ou carnês extras.</p>
              </div>
              <div className="flex gap-3">
                <FileText className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-txt-light leading-snug"><strong className="text-txt font-semibold block mb-0.5 text-[0.8rem]">Documentos organizados</strong>Seus recibos para pedir reembolso do seu plano de saúde num só lugar.</p>
              </div>
              <div className="flex gap-3">
                <Leaf className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-txt-light leading-snug"><strong className="text-txt font-semibold block mb-0.5 text-[0.8rem]">Evolução terapêutica</strong>Acompanhe o histórico do que construímos e consulte anotações quando quiser.</p>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-txt-light leading-snug"><strong className="text-txt font-semibold block mb-0.5 text-[0.8rem]">Triagem rápida</strong>Responda a uma checagem simples antes de nos vermos, pra já direcionarmos o papo.</p>
              </div>
            </div>
            <div className="h-px bg-gold/30 w-full my-6" />
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-[0.7rem] tracking-[0.18em] uppercase text-teal-dark font-semibold mb-1">Frequência Semanal</p>
                <p className="font-heading text-2xl font-bold text-txt">R$ 120<span className="text-sm font-normal text-txt-muted">/sessão</span></p>
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.18em] uppercase text-teal-dark font-semibold mb-1">Avulsa ou Quinzenal</p>
                <p className="font-heading text-2xl font-bold text-txt">R$ 150<span className="text-sm font-normal text-txt-muted">/sessão</span></p>
              </div>
            </div>
            <p className="text-[0.8rem] text-txt-muted mt-5 italic">Pagamento facilitado via cartão de crédito ou chave PIX, direto no sistema.</p>
          </div>
        </AnimatedSection>

        {/* CTA pair */}
        <AnimatedSection direction="up" delay={0.2} className="mt-12 grid md:grid-cols-2 gap-4">
          <a
            href={registerPatientUrl}
            className="group relative bg-white border border-gold/40 p-7 hover:border-teal hover:shadow-warm-md transition-all rounded-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <UserPlus className="w-5 h-5 text-teal" strokeWidth={1.5} />
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold">Nova por aqui</p>
            </div>
            <h3 className="font-heading text-lg font-semibold text-txt mb-2">Dar o primeiro passo</h3>
            <p className="text-[0.82rem] text-txt-light leading-relaxed mb-5">
              Crie seu acesso rápido para agendar o melhor horário, conversar comigo e começar seu processo.
            </p>
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-dark group-hover:gap-3 transition-all">
              Agendar agora <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href={loginUrl}
            className="group relative bg-white border border-gold/40 p-7 hover:border-teal hover:shadow-warm-md transition-all rounded-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <LogIn className="w-5 h-5 text-teal" strokeWidth={1.5} />
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold">Já é da casa</p>
            </div>
            <h3 className="font-heading text-lg font-semibold text-txt mb-2">Acessar seu portal</h3>
            <p className="text-[0.82rem] text-txt-light leading-relaxed mb-5">
              Reagende as próximas sessões, baixe suas notas, recibos e tenha controle total do seu próprio tempo.
            </p>
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-dark group-hover:gap-3 transition-all">
              Entrar <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3} className="mt-10 flex items-center justify-center gap-2 text-[0.75rem] text-txt-muted">
          <Video className="w-3.5 h-3.5 text-teal" />
          <span>Atendimento exclusivamente online via videochamada criptografada.</span>
        </AnimatedSection>
      </div>
    </section>
  );
}
