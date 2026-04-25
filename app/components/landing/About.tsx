import Image from "next/image";
import { Target, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function About() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start max-w-[1100px] mx-auto">
        {/* Photo — editorial treatment */}
        <AnimatedSection direction="left" staggerType="premium" className="relative lg:sticky lg:top-28 max-w-[420px] mx-auto lg:mx-0">
          <div className="relative">
            {/* Thin gold frame */}
            <div className="absolute -inset-2 border border-gold/30 rounded-[2px] pointer-events-none" aria-hidden />
            <div className="absolute -top-2 left-4 bg-white px-3 py-0.5 text-[0.6rem] tracking-[0.25em] uppercase text-teal-dark font-semibold">
              Psicóloga · CRP 06/173961
            </div>
            <Image
              src="/perfilsobre.jpeg"
              alt="Beatriz Ribeiro — Psicóloga Clínica, CRP 06/173961"
              width={520}
              height={680}
              className="w-full aspect-[3/4] object-cover object-center shadow-warm-lg"
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
            />
            <div className="absolute -bottom-5 -right-2 bg-white border border-gold/30 px-4 py-3 shadow-warm-md">
              <p className="text-[0.62rem] tracking-[0.2em] uppercase text-teal font-semibold">Trajetória clínica</p>
              <p className="font-heading text-lg font-semibold text-txt leading-tight">+3.500 sessões</p>
              <p className="text-[0.68rem] text-txt-muted">conduzidas pessoalmente</p>
            </div>
          </div>

          {/* Credential ribbon under photo */}
          <ul className="mt-10 space-y-2.5 text-sm text-txt-light pl-1">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 w-3 h-px bg-gold shrink-0" aria-hidden />
              <span><strong className="text-txt font-semibold">Graduação</strong> em Psicologia — UNOESTE</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 w-3 h-px bg-gold shrink-0" aria-hidden />
              <span><strong className="text-txt font-semibold">Formação complementar</strong> em Transtornos de Ansiedade e Depressivos — Faculdade Israelita Albert Einstein</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 w-3 h-px bg-gold shrink-0" aria-hidden />
              <span><strong className="text-txt font-semibold">Atuação no CRAS</strong> — atendimento clínico e social em rede pública (SUAS)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 w-3 h-px bg-gold shrink-0" aria-hidden />
              <span><strong className="text-txt font-semibold">Atendimento infantil</strong> a crianças no espectro autista (TEA)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 w-3 h-px bg-gold shrink-0" aria-hidden />
              <span><strong className="text-txt font-semibold">Experiência na Privacy</strong> — atendimento especializado a criadores de conteúdo digital</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 w-3 h-px bg-gold shrink-0" aria-hidden />
              <span><strong className="text-txt font-semibold">Abordagem</strong> principal: Terapia de Aceitação e Compromisso (ACT)</span>
            </li>
          </ul>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection direction="right" staggerType="premium" staggerChildren={0.08}>
          <AnimatedItem direction="up">
            <div className="section-label">Sobre a Bea</div>
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.05] font-semibold text-txt mb-3">
              Menos cobrança,<br className="hidden sm:block" />
              <span className="text-teal-dark italic font-medium">mais acolhimento.</span>
            </h2>
            <p className="text-[0.72rem] text-txt-muted tracking-wide mb-5">
              Beatriz Ribeiro ·{" "}
              <a
                href="https://cadastro.cfp.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-teal-dark"
              >
                verifique o CRP 06/173961 no e-Psí
              </a>
            </p>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-[0.95rem] text-txt-light leading-relaxed mb-5">
              Costumo receber pessoas que se sentem constantemente esgotadas e cobradas — profissionais digitais, criadores de conteúdo, ou qualquer pessoa que sinta o peso da ansiedade e da comparação que o mundo de hoje nos impõe.
            </p>
            <p className="text-[0.95rem] text-txt-light leading-relaxed mb-5">
              Meu papel não é ditar regras, mas sim ajudar você a construir <strong className="text-txt font-semibold">flexibilidade emocional</strong>. Trabalhamos juntos para que você possa viver uma vida mais conectada com seus próprios valores, mesmo no meio do ruído e da pressão.
            </p>
            <p className="text-[0.95rem] text-txt-light leading-relaxed mb-8">
              Os atendimentos são 100% online, focados em escuta autêntica e sem julgamentos. Tudo no seu tempo.
            </p>
          </AnimatedItem>

          {/* Pillars — numbered, editorial */}
          <AnimatedItem direction="up">
            <div className="mb-8 border-t border-gold/20 pt-6">
              <h3 className="text-[0.65rem] font-bold text-teal uppercase tracking-[0.3em] mb-5">
                Pilares do atendimento
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {[
                  { n: "01", icon: ShieldCheck, title: "Ética clínica", desc: "Sigilo profissional (Res. CFP 010/2005) e dados protegidos pela LGPD." },
                  { n: "02", icon: Target, title: "Plano terapêutico", desc: "Objetivos claros, frequência combinada e revisão periódica do processo." },
                  { n: "03", icon: Sparkles, title: "Escuta sem pressa", desc: "Cada sessão começa onde você está — não onde o roteiro mandaria começar." },
                ].map(({ n, icon: Icon, title, desc }) => (
                  <div key={n} className="relative pl-3 border-l border-gold/30">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[0.6rem] tracking-[0.2em] font-semibold text-gold-dark">{n}</span>
                      <Icon className="w-3.5 h-3.5 text-teal" />
                    </div>
                    <p className="font-heading text-sm font-semibold text-txt mb-1">{title}</p>
                    <p className="text-[0.78rem] text-txt-light leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Specialties — tags refinadas */}
          <AnimatedItem direction="up">
            <div className="mb-2">
              <h3 className="text-[0.65rem] font-bold text-teal uppercase tracking-[0.3em] mb-3">
                Temas que acompanho
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Ansiedade", "Depressão", "Autoestima",
                  "Burnout digital", "Relacionamentos", "Luto",
                  "Autoconhecimento", "Regulação emocional",
                  "Flexibilidade psicológica", "ACT",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 text-[0.7rem] text-txt-light border border-gold/25 hover:border-gold/50 hover:text-teal-dark transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}

