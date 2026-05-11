"use client";
import { ArrowRight, UserPlus, LogIn, Video, CalendarCheck, Sparkles, CreditCard, FileText, Leaf, ShieldCheck } from "lucide-react";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function Scheduling() {
  const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}&callbackUrl=/portal/agendar`;
  const registerPatientUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;

  const benefits = [
    { icon: CalendarCheck, title: "Autonomia de agenda", desc: "Marque ou transfira sessões com um clique, sem depender de horário comercial." },
    { icon: Sparkles, title: "Sala de espera virtual", desc: "Um ambiente focado para você desacelerar a cabeça antes de começarmos." },
    { icon: CreditCard, title: "Pagamentos sem atrito", desc: "Assinaturas automáticas no cartão ou PIX. Fim das tabelas extras." },
    { icon: FileText, title: "Documentos organizados", desc: "Seus recibos para reembolso do plano de saúde em um só lugar." },
    { icon: Leaf, title: "Evolução terapêutica", desc: "Acompanhe o histórico do que construímos e consulte anotações." },
    { icon: ShieldCheck, title: "Triagem rápida", desc: "Responda a uma checagem simples antes do papo, agilizando o processo." },
  ];

  return (
    <section className="pt-20 md:pt-32 pb-24 md:pb-40 px-4 md:px-8 bg-transparent relative z-10" id="agendamento">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection direction="up" className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-teal-dark/20 pb-8">
          <div>
            <div className="section-label mb-4">Portal do Paciente</div>
            <h2 className="font-heading text-[3rem] md:text-[4.5rem] leading-[0.9] font-semibold text-txt">
              O Próximo <br/>
              <span className="italic text-teal-dark font-normal">Passo.</span>
            </h2>
          </div>
          <p className="text-sm text-txt-light/80 max-w-sm leading-relaxed">
            Sem secretária virtual e sem planilhas confusas. Todo o seu processo terapêutico é gerenciado por você, de forma autônoma e segura.
          </p>
        </AnimatedSection>

        {/* Benefits Grid - Airy and borderless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((b, i) => (
            <AnimatedItem key={i} direction="up" delay={i * 0.1} className="flex flex-col gap-4 bg-white/60 backdrop-blur-sm p-8 border border-teal-dark/5 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
              <div className="w-10 h-10 bg-teal-dark/5 rounded-full flex items-center justify-center mb-2">
                <b.icon className="w-5 h-5 text-teal-dark" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-heading text-[1rem] uppercase tracking-widest font-bold text-txt mb-2">{b.title}</h4>
                <p className="text-[0.9rem] text-txt-light/80 leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Pricing and CTAs Container */}
        <AnimatedSection direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pricing Box - 5 cols */}
          <div className="lg:col-span-5 bg-teal-dark text-white p-10 md:p-14 relative overflow-hidden shadow-xl shadow-teal-dark/10">
            <CreditCard className="absolute -bottom-10 -right-10 w-48 h-48 opacity-5 rotate-12" />
            <h3 className="font-heading text-lg font-semibold mb-10 uppercase tracking-widest opacity-80">Investimento</h3>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-white/60 mb-2">Frequência Semanal</p>
                <p className="font-heading text-3xl font-bold">R$ 120<span className="text-sm font-normal text-white/40"> / sessão</span></p>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <div>
                <p className="text-[0.65rem] tracking-[0.2em] uppercase font-bold text-white/60 mb-2">Avulsa ou Quinzenal</p>
                <p className="font-heading text-3xl font-bold">R$ 150<span className="text-sm font-normal text-white/40"> / sessão</span></p>
              </div>
            </div>
            <p className="text-[0.7rem] text-white/40 mt-10 italic">* Pagamento direto via cartão ou PIX no portal.</p>
          </div>

          {/* CTAs Box - 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <a href={registerPatientUrl} className="bg-white p-10 md:p-12 flex-1 flex flex-col justify-center border border-teal-dark/10 hover:border-teal-dark/30 hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <UserPlus className="w-5 h-5 text-teal-dark" strokeWidth={1.5} />
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-teal-dark/60 font-bold">Nova por aqui</span>
                </div>
                <ArrowRight className="w-5 h-5 text-teal-dark group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-txt mb-2">Dar o primeiro passo</h3>
              <p className="text-[0.9rem] text-txt-light/80 leading-relaxed max-w-md">Crie seu acesso para agendar seu melhor horário e iniciar seu processo.</p>
            </a>
            
            <a href={loginUrl} className="bg-white p-10 md:p-12 flex-1 flex flex-col justify-center border border-teal-dark/10 hover:border-teal-dark/30 hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LogIn className="w-5 h-5 text-teal-dark" strokeWidth={1.5} />
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-teal-dark/60 font-bold">Já é da casa</span>
                </div>
                <ArrowRight className="w-5 h-5 text-teal-dark group-hover:translate-x-2 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-txt mb-2">Acessar seu portal</h3>
              <p className="text-[0.9rem] text-txt-light/80 leading-relaxed max-w-md">Reagende sessões, baixe notas e tenha controle total do seu tempo.</p>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
