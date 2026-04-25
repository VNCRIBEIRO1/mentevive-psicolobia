"use client";
import { ArrowRight, UserPlus, LogIn, Video } from "lucide-react";
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
          <div className="bg-[#FFFBF5] border border-gold/40 rounded-xl p-8 text-left shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-txt mb-3">Como funciona a mecânica?</h3>
            <p className="text-[0.95rem] text-txt-light leading-relaxed mb-4">
              Pelo portal você consegue <strong>agendar novas sessões, reagendar horários, baixar recibos para reembolso de plano de saúde</strong> e acessar anotações exclusivas após os nossos encontros.
            </p>
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
