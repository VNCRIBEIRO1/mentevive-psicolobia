"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PortalScreenCarousel } from "@/app/components/landing/PortalScreenCarousel";
import { AdminScreenCarousel } from "@/app/components/landing/AdminScreenCarousel";
import { AnimatedSection, AnimatedItem } from "@/app/components/landing/AnimatedSection";
import {
  User, Stethoscope, ArrowRight, CalendarCheck, Sprout,
  CreditCard, ShieldCheck, Clock, LayoutDashboard, FileText,
  Users, MessageSquare, Leaf, Video, Lock, Eye, Sparkles,
} from "lucide-react";
import Link from "next/link";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";
import type { ReactNode } from "react";

/* ─────── Role tab definitions ─────── */
const roles = [
  {
    id: "patient" as const,
    label: "Portal do Paciente",
    icon: <User className="w-4 h-4" />,
    gradient: "from-teal to-teal-dark",
    accent: "teal",
    bg: "bg-teal/8",
    ring: "ring-teal/20",
    text: "text-teal-dark",
  },
  {
    id: "admin" as const,
    label: "Painel da Psicóloga",
    icon: <Stethoscope className="w-4 h-4" />,
    gradient: "from-primary-dark to-primary",
    accent: "primary",
    bg: "bg-primary/8",
    ring: "ring-primary/20",
    text: "text-primary-dark",
  },
];

/* ─────── Feature definitions per role ─────── */
type Feature = { icon: ReactNode; title: string; desc: string; color: string; iconBg: string };

const patientFeatures: Feature[] = [
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "Agendamento Online",
    desc: "Escolha seu horário ideal e agende 24h por dia, com confirmação instantânea.",
    color: "text-teal",
    iconBg: "bg-teal/10 ring-teal/20",
  },
  {
    icon: <Sprout className="w-5 h-5" />,
    title: "Evolução Terapêutica",
    desc: "Linha do tempo com feedbacks da terapeuta e suas anotações pessoais.",
    color: "text-teal-dark",
    iconBg: "bg-teal/8 ring-teal/15",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Pagamentos Simples",
    desc: "PIX ou cartão pelo Stripe. Sem complicação, sem papelada.",
    color: "text-primary-dark",
    iconBg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Triagem Pré-Sessão",
    desc: "Questionário rápido que ajuda a personalizar cada sessão.",
    color: "text-purple-600",
    iconBg: "bg-purple-50 ring-purple-100",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Sala de Espera Virtual",
    desc: "Ambiente acolhedor com meditação guiada antes da sua sessão.",
    color: "text-teal",
    iconBg: "bg-teal/10 ring-teal/20",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Feedback Pós-Sessão",
    desc: "Receba orientações da terapeuta após cada sessão diretamente no portal.",
    color: "text-emerald-600",
    iconBg: "bg-emerald-50 ring-emerald-100",
  },
];

const adminFeatures: Feature[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: "Dashboard Completo",
    desc: "Visão geral de pacientes, sessões, receita e crescimento em um só lugar.",
    color: "text-primary-dark",
    iconBg: "bg-primary/10 ring-primary/20",
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "Agenda Inteligente",
    desc: "Calendário interativo com status de sessões, sala de espera e videochamada.",
    color: "text-teal",
    iconBg: "bg-teal/10 ring-teal/20",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Prontuários Clínicos",
    desc: "Registros com controle de visibilidade: privados ou visíveis ao paciente.",
    color: "text-purple-600",
    iconBg: "bg-purple-50 ring-purple-100",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Notas Privadas",
    desc: "Anotações internas que só você vê — separadas do feedback ao paciente.",
    color: "text-amber-600",
    iconBg: "bg-amber-50 ring-amber-100",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Gestão de Pacientes",
    desc: "Lista completa com histórico de sessões, status e próximo agendamento.",
    color: "text-teal-dark",
    iconBg: "bg-teal/8 ring-teal/15",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Videochamada Integrada",
    desc: "Sessões por vídeo com link gerado automaticamente e sala de espera.",
    color: "text-teal",
    iconBg: "bg-teal/10 ring-teal/20",
  },
];

/* ─────── Step-by-step flows ─────── */
type Step = { num: number; title: string; desc: string; icon: ReactNode };

const patientSteps: Step[] = [
  { num: 1, title: "Crie sua conta", desc: "Cadastro rápido pelo site — gratuito e seguro.", icon: <User className="w-4 h-4" /> },
  { num: 2, title: "Agende sua sessão", desc: "Escolha data e horário disponíveis em tempo real.", icon: <CalendarCheck className="w-4 h-4" /> },
  { num: 3, title: "Preencha a triagem", desc: "Responda um breve questionário antes da sessão.", icon: <ShieldCheck className="w-4 h-4" /> },
  { num: 4, title: "Entre na sala de espera", desc: "Ambiente virtual acolhedor com meditação guiada.", icon: <Clock className="w-4 h-4" /> },
  { num: 5, title: "Participe da sessão", desc: "Videochamada segura diretamente no portal.", icon: <Video className="w-4 h-4" /> },
  { num: 6, title: "Acompanhe sua evolução", desc: "Veja feedbacks, faça anotações e acompanhe seu progresso.", icon: <Sprout className="w-4 h-4" /> },
];

const adminSteps: Step[] = [
  { num: 1, title: "Configure o consultório", desc: "Defina horários, especialidades e dados do perfil.", icon: <LayoutDashboard className="w-4 h-4" /> },
  { num: 2, title: "Receba agendamentos", desc: "Pacientes agendam online — você recebe notificações.", icon: <CalendarCheck className="w-4 h-4" /> },
  { num: 3, title: "Revise a triagem", desc: "Veja as respostas do paciente antes de cada sessão.", icon: <ShieldCheck className="w-4 h-4" /> },
  { num: 4, title: "Realize a sessão", desc: "Videochamada com sala de espera e controle de acesso.", icon: <Video className="w-4 h-4" /> },
  { num: 5, title: "Registre as notas", desc: "Notas privadas + feedback visível ao paciente.", icon: <Lock className="w-4 h-4" /> },
  { num: 6, title: "Gerencie prontuários", desc: "Registros clínicos com controle de visibilidade.", icon: <FileText className="w-4 h-4" /> },
];

/* ─────── Main Component ─────── */
export function HowItWorks() {
  const [activeRole, setActiveRole] = useState<"patient" | "admin">("patient");
  const reduce = useReducedMotion();

  const role = roles.find((r) => r.id === activeRole)!;
  const features = activeRole === "patient" ? patientFeatures : adminFeatures;
  const steps = activeRole === "patient" ? patientSteps : adminSteps;

  return (
    <div className="relative overflow-hidden">
      {/* ═══════ Hero Section ═══════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-bg via-bg to-white relative">
        {/* Decorative orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <AnimatedSection direction="up">
            <div className="section-label">Como Funciona</div>
            <h1 className="section-title !text-3xl md:!text-4xl lg:!text-5xl">
              Conheça o Portal de Perto
            </h1>
            <p className="text-sm md:text-base text-txt-light max-w-2xl mx-auto mt-4 leading-relaxed">
              Um sistema completo pensado para tornar o processo terapêutico
              mais organizado, acolhedor e seguro — tanto para pacientes quanto
              para profissionais.
            </p>
          </AnimatedSection>

          {/* ─── Role Switcher Tabs ─── */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex justify-center mt-10 mb-4">
              <div className="inline-flex bg-white/80 backdrop-blur-xl rounded-2xl p-1.5 shadow-warm-md ring-1 ring-primary/10">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRole(r.id)}
                    className={`relative flex items-center gap-2 px-5 md:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeRole === r.id
                        ? "text-white shadow-warm-lg"
                        : "text-txt-light hover:text-txt"
                    }`}
                    aria-pressed={activeRole === r.id}
                  >
                    {activeRole === r.id && (
                      <motion.div
                        layoutId="role-bg"
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${r.gradient}`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {r.icon}
                      {r.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-txt-muted">
              {activeRole === "patient"
                ? "Veja como pacientes usam o portal para agendar, acompanhar e evoluir."
                : "Veja como psicólogas gerenciam sessões, prontuários e pacientes."}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ Step-by-step Journey ═══════ */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <div className="section-label">Passo a Passo</div>
              <h2 className="section-title !text-2xl md:!text-3xl">
                {activeRole === "patient" ? "Sua jornada no portal" : "Seu dia a dia no painel"}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole + "-steps"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={reduce ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="group relative bg-gradient-to-br from-bg/50 to-white rounded-2xl p-5 ring-1 ring-primary/5 hover:ring-teal/15 transition-all duration-300"
                  >
                    {/* Step number */}
                    <div className={`absolute -top-3 -left-1 w-7 h-7 rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center text-white text-xs font-bold shadow-warm-sm`}>
                      {step.num}
                    </div>
                    <div className="pt-2">
                      <div className={`w-10 h-10 rounded-xl ${role.bg} ${role.ring} ring-1 ${role.text} flex items-center justify-center mb-3`}>
                        {step.icon}
                      </div>
                      <h3 className="text-sm font-bold text-txt mb-1">{step.title}</h3>
                      <p className="text-xs text-txt-light leading-relaxed">{step.desc}</p>
                    </div>
                    {/* Connector arrow for non-last items on desktop */}
                    {i < steps.length - 1 && i % 3 !== 2 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/20">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════ Interactive Demo + Features ═══════ */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-bg relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="max-w-[1100px] mx-auto relative">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <div className="section-label">Demonstração Interativa</div>
              <h2 className="section-title !text-2xl md:!text-3xl">
                {activeRole === "patient"
                  ? "Navegue pelo Portal do Paciente"
                  : "Explore o Painel da Psicóloga"}
              </h2>
              <p className="text-sm text-txt-light max-w-xl mx-auto mt-3">
                {activeRole === "patient"
                  ? "Passe o mouse para pausar a demonstração. Clique nas abas para navegar."
                  : "Veja como é o dia a dia no painel administrativo. Clique nas abas para explorar."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole + "-demo"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                {/* Left: Feature cards */}
                <div>
                  <AnimatedSection direction="left" staggerChildren={0.08} staggerType="premium" className="grid sm:grid-cols-2 gap-4">
                    {features.map((f, i) => (
                      <AnimatedItem key={`${activeRole}-${i}`} direction="left" staggerType="premium">
                        <motion.div
                          className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-4 ring-1 ring-primary/5 hover:ring-teal/20 transition-all duration-300 cursor-default"
                          whileHover={reduce ? {} : { y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                        >
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative">
                            <div className={`w-10 h-10 rounded-xl ${f.iconBg} ${f.color} ring-1 flex items-center justify-center mb-3`}>
                              {f.icon}
                            </div>
                            <h3 className="text-sm font-bold text-txt mb-1">{f.title}</h3>
                            <p className="text-xs text-txt-light leading-relaxed">{f.desc}</p>
                          </div>
                        </motion.div>
                      </AnimatedItem>
                    ))}
                  </AnimatedSection>
                </div>

                {/* Right: Screen carousel */}
                <AnimatedSection direction="right" delay={0.2}>
                  {activeRole === "patient" ? <PortalScreenCarousel /> : <AdminScreenCarousel />}
                </AnimatedSection>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════ Highlights — Key Differentials ═══════ */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <div className="section-label">Diferenciais</div>
              <h2 className="section-title !text-2xl md:!text-3xl">
                O que torna o MenteVive especial
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="w-5 h-5 text-amber-600" />,
                title: "Notas em 3 camadas",
                desc: "Anotações privadas da terapeuta, feedback visível ao paciente e notas pessoais do paciente — tudo separado e seguro.",
                gradient: "from-amber-50 to-white",
                border: "border-amber-100",
              },
              {
                icon: <Eye className="w-5 h-5 text-purple-600" />,
                title: "Prontuários com visibilidade",
                desc: "Controle fino: cada registro clínico pode ser marcado como privado ou visível ao paciente.",
                gradient: "from-purple-50 to-white",
                border: "border-purple-100",
              },
              {
                icon: <Sprout className="w-5 h-5 text-teal" />,
                title: "Evolução Terapêutica",
                desc: "Linha do tempo visual que mostra o progresso do paciente com feedbacks e anotações pessoais.",
                gradient: "from-teal/8 to-white",
                border: "border-teal/15",
              },
              {
                icon: <Video className="w-5 h-5 text-teal-dark" />,
                title: "Sessão 100% Online",
                desc: "Videochamada segura integrada com sala de espera e meditação guiada pré-sessão.",
                gradient: "from-teal/8 to-white",
                border: "border-teal/15",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
                title: "Triagem Inteligente",
                desc: "Questionário pré-sessão que prepara a terapeuta com dados atualizados do paciente.",
                gradient: "from-emerald-50 to-white",
                border: "border-emerald-100",
              },
              {
                icon: <Leaf className="w-5 h-5 text-primary-dark" />,
                title: "Design Acolhedor",
                desc: "Interface pensada para transmitir calma e confiança — paleta quente e tipografia suave.",
                gradient: "from-primary/8 to-white",
                border: "border-primary/10",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl p-5 border ${item.border} hover:shadow-warm-md transition-shadow duration-300`}
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-txt mb-1.5">{item.title}</h3>
                <p className="text-xs text-txt-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-b from-white via-bg to-bg">
        <AnimatedSection direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title !text-2xl md:!text-3xl mb-4">
              Pronto para começar?
            </h2>
            <p className="text-sm text-txt-light mb-8 leading-relaxed">
              Crie sua conta gratuitamente e comece a usar o portal hoje mesmo.
              Sua jornada de cuidado começa aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={reduce ? {} : { scale: 1.03 }}
                whileTap={reduce ? {} : { scale: 0.97 }}
              >
                <Link
                  href={`${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-teal to-teal-dark text-white font-bold text-sm px-8 py-4 rounded-full shadow-teal-glow hover:shadow-lg transition-all duration-300 group"
                >
                  <Leaf className="w-4 h-4" />
                  Criar minha conta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={reduce ? {} : { scale: 1.03 }}
                whileTap={reduce ? {} : { scale: 0.97 }}
              >
                <Link
                  href="/#portal"
                  className="btn-brand-outline"
                >
                  Voltar ao site
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
