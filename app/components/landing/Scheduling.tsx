"use client";
import { CalendarDays, ArrowRight, UserPlus, LogIn, Video, Clock, Camera, MonitorSmartphone, CalendarCheck } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

export function Scheduling() {
  const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}&callbackUrl=/portal/agendar`;
  const registerPatientUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;

  return (
    <section className="py-24 px-4 md:px-8 bg-white" id="agendamento">
      <div className="max-w-[1080px] mx-auto">
        <AnimatedSection direction="up" className="text-center">
          <div className="section-label justify-center">Começar o processo</div>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.1] font-semibold text-txt">
            Como funciona o atendimento <span className="italic text-teal-dark font-medium">na prática.</span>
          </h2>
          <p className="text-[0.95rem] text-txt-light max-w-2xl mx-auto mt-4 leading-relaxed">
            Zero surpresa, zero burocracia. Tudo o que você precisa saber antes de agendar a primeira sessão.
          </p>
        </AnimatedSection>

        {/* Framework — como funciona (editorial grid 4 colunas) */}
        <AnimatedSection direction="up" delay={0.1} className="mt-14 border-t border-b border-gold/20 divide-y md:divide-y-0 md:divide-x divide-gold/20 grid grid-cols-1 md:grid-cols-4">
          {[
            { icon: Clock, label: "50 min a 1h", sub: "Duração da sessão" },
            { icon: MonitorSmartphone, label: "Videochamada", sub: "Criptografada ponta-a-ponta" },
            { icon: Camera, label: "Câmera opcional", sub: "Aberta ou fechada, você escolhe" },
            { icon: CalendarCheck, label: "Semanal ou quinzenal", sub: "Ritmo definido junto" },
          ].map((item) => (
            <div key={item.label} className="px-5 py-6 text-center md:text-left">
              <item.icon className="w-5 h-5 text-teal mx-auto md:mx-0 mb-3" strokeWidth={1.5} />
              <p className="font-heading text-base font-semibold text-txt leading-tight">{item.label}</p>
              <p className="text-[0.78rem] text-txt-light mt-1">{item.sub}</p>
            </div>
          ))}
        </AnimatedSection>

        {/* Pricing — tabela editorial sem glass */}
        <AnimatedSection direction="up" delay={0.2} className="mt-16">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-teal font-semibold text-center mb-6">Investimento transparente</p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[720px] mx-auto">
            <div className="relative bg-white border-2 border-gold/40 p-8">
              <span className="absolute -top-3 left-6 bg-teal text-white text-[0.6rem] tracking-[0.25em] uppercase font-semibold px-3 py-1">
                Plano recomendado
              </span>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-teal-dark font-semibold mb-4">Sessão semanal</p>
              <p className="font-heading text-4xl font-semibold text-txt">
                R$ 120<span className="text-base font-normal text-txt-muted">/sessão</span>
              </p>
              <div className="w-10 h-px bg-gold mt-5 mb-4" />
              <p className="text-[0.82rem] text-txt-light leading-relaxed">
                Frequência semanal com valor reduzido. É o formato com maior evidência de efetividade para a maioria dos processos terapêuticos.
              </p>
            </div>
            <div className="bg-white border border-gold/25 p-8">
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-teal-dark font-semibold mb-4">Avulsa · quinzenal · mensal</p>
              <p className="font-heading text-4xl font-semibold text-txt">
                R$ 150<span className="text-base font-normal text-txt-muted">/sessão</span>
              </p>
              <div className="w-10 h-px bg-gold mt-5 mb-4" />
              <p className="text-[0.82rem] text-txt-light leading-relaxed">
                Para sessões pontuais ou frequência menor. Mesma qualidade de acompanhamento, com flexibilidade para sua rotina.
              </p>
            </div>
          </div>
          <p className="text-[0.72rem] text-txt-muted text-center mt-5 italic">
            Pagamento via cartão ou PIX no portal. Sem fidelidade, sem multa por cancelamento.
          </p>
        </AnimatedSection>

        {/* Steps — 4 passos editoriais */}
        <AnimatedSection direction="up" delay={0.3} className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <CalendarDays className="w-5 h-5 text-teal" />
            <h3 className="font-heading text-xl font-semibold text-txt">Como agendar</h3>
            <div className="flex-1 h-px bg-gold/25" />
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", title: "Crie sua conta", desc: "Cadastro simples no portal do consultório, vinculado ao meu atendimento." },
              { n: "02", title: "Escolha o horário", desc: "Agenda em tempo real, com horários disponíveis da semana atual e futuras." },
              { n: "03", title: "Pague pelo portal", desc: "Cartão ou PIX. Recibo emitido automaticamente para reembolso em planos de saúde." },
              { n: "04", title: "Acesse a sessão", desc: "Link da videochamada aparece no portal no dia, com lembrete por e-mail." },
            ].map((step) => (
              <li key={step.n} className="relative pl-4 border-l border-gold/30">
                <p className="text-[0.65rem] tracking-[0.25em] font-semibold text-gold-dark mb-2">{step.n}</p>
                <p className="font-heading text-base font-semibold text-txt mb-1.5">{step.title}</p>
                <p className="text-[0.82rem] text-txt-light leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </AnimatedSection>

        {/* CTA pair */}
        <AnimatedSection direction="up" delay={0.4} className="mt-16 grid md:grid-cols-2 gap-4 max-w-[780px] mx-auto">
          <a
            href={registerPatientUrl}
            className="group relative bg-white border border-gold/25 p-7 hover:border-gold transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <UserPlus className="w-5 h-5 text-teal" strokeWidth={1.5} />
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold">Primeira vez aqui</p>
            </div>
            <h3 className="font-heading text-lg font-semibold text-txt mb-2">Criar minha conta</h3>
            <p className="text-[0.82rem] text-txt-light leading-relaxed mb-5">
              Cadastro vinculado ao consultório. Você ganha acesso ao portal seguro para agendar, acompanhar e conversar.
            </p>
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-dark group-hover:gap-3 transition-all">
              Começar agora <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href={loginUrl}
            className="group relative bg-white border border-gold/25 p-7 hover:border-gold transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <LogIn className="w-5 h-5 text-teal" strokeWidth={1.5} />
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-dark font-semibold">Já sou paciente</p>
            </div>
            <h3 className="font-heading text-lg font-semibold text-txt mb-2">Entrar no portal</h3>
            <p className="text-[0.82rem] text-txt-light leading-relaxed mb-5">
              Acesse sua agenda, reagende sessões, baixe recibos e converse por mensagem segura entre atendimentos.
            </p>
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-dark group-hover:gap-3 transition-all">
              Acessar portal <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.5} className="mt-12 flex items-center justify-center gap-2 text-[0.72rem] text-txt-muted">
          <Video className="w-3.5 h-3.5 text-teal" />
          <span>Atendimento exclusivamente online — de qualquer lugar do Brasil.</span>
        </AnimatedSection>
      </div>
    </section>
  );
}

