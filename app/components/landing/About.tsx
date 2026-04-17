import Image from "next/image";
import { Award, Brain, Building, Backpack, Target } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function About() {
  return (
    <section className="py-20 lg:py-28 px-5 md:px-8" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Photo */}
        <AnimatedSection direction="left" staggerType="premium" className="relative max-w-[420px] mx-auto lg:mx-0">
          <div className="relative">
            <Image
              src="/pefilsobrre.jpeg"
              alt="Beatriz — Psicóloga Clínica Psicolobia"
              width={400}
              height={500}
              className="rounded-3xl shadow-soft-xl w-full h-[500px] object-cover object-top"
              priority
            />
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          </div>
          <div className="glass-strong absolute bottom-5 right-5 p-4 rounded-2xl shadow-soft-md flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-bold">+3.500 Atendimentos</div>
              <div className="text-[0.68rem] text-txt-muted">Escuta sensível e acolhimento</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection direction="right" staggerType="premium" staggerChildren={0.08}>
          <AnimatedItem direction="up">
            <div className="section-label">Sobre Mim</div>
            <h2 className="section-title !text-left">Beatriz (Bea)</h2>
            <p className="text-xs text-primary-dark font-semibold mb-2">
              CRP 06/173961 · UNOESTE — Universidade do Oeste Paulista
            </p>
          </AnimatedItem>

          {/* Einstein Badge */}
          <AnimatedItem direction="up">
            <div className="glass inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 mb-5">
              <Award className="w-6 h-6 text-amber-600" />
              <div>
                <p className="text-xs font-bold text-amber-800">Certificação — Faculdade Israelita Albert Einstein</p>
                <p className="text-[0.68rem] text-amber-600">Transtorno Ansioso e Depressivo · ago/2023</p>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-sm text-txt-light leading-relaxed mb-4">
              Psicóloga Clínica especialista no emocional de quem vive da internet. Já realizei mais de 3.500 atendimentos e construí uma metodologia própria, baseada na escuta sensível, na ética e na profundidade de quem acredita que cada história merece ser acolhida.
            </p>
            <p className="text-sm text-txt-light leading-relaxed mb-4">
              Com experiência em atendimento de criadores de conteúdo digital, atuação em políticas públicas (CRAS) e acompanhamento terapêutico infantil, trago uma visão ampla e humana da psicologia. Especialista em <strong>Terapia de Aceitação e Compromisso (ACT)</strong> e <strong>tratamento de traumas</strong>.
            </p>
            <p className="text-sm text-txt-light leading-relaxed mb-5">
              Atendo online, mas o vínculo é vivo, humano e presente. Sem pressa, sem moldes, sem máscaras. Se você sente que é hora de ser escutado de verdade, talvez seja hora de me encontrar.
            </p>
          </AnimatedItem>

          {/* Áreas de atuação */}
          <AnimatedItem direction="up">
            <div className="mb-5">
              <h3 className="text-xs font-bold text-txt uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-primary" /> Áreas de Atuação
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Ansiedade", "Depressão", "Traumas", "Autoestima",
                  "Burnout Digital", "Relacionamentos", "Luto",
                  "Autoconhecimento", "ACT",
                ].map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full text-[0.68rem] font-semibold bg-primary/8 text-primary-dark border border-primary/12 hover:bg-primary/15 transition-colors">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Experience highlights */}
          <AnimatedItem direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { icon: <Brain className="w-4 h-4 text-primary" />, title: "Psicóloga Clínica (desde ago/2024)", sub: "35 atendimentos semanais · Público adulto · Remoto" },
                { icon: <Building className="w-4 h-4 text-primary" />, title: "Privacy (2022 – 2024)", sub: "35-40 atendimentos/semana · Criadores digitais · Colunista" },
                { icon: <Building className="w-4 h-4 text-primary" />, title: "CRAS (2021 – 2022)", sub: "Vulnerabilidade social · Grupos · Visitas domiciliares" },
                { icon: <Backpack className="w-4 h-4 text-primary" />, title: "Colégio APOGEU (2019 – 2021)", sub: "Acompanhante terapêutica · Inclusão infantil (TEA)" },
              ].map((exp) => (
                <div key={exp.title} className="glass rounded-xl p-3 flex items-start gap-2">
                  {exp.icon}
                  <div>
                    <p className="text-xs font-bold text-txt">{exp.title}</p>
                    <p className="text-[0.68rem] text-txt-muted mt-0.5">{exp.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-sm font-bold text-primary-dark mb-2">
              Psicóloga Clínica · CRP 06/173961 · Terapia Online · +3.500 Atendimentos
            </p>
            <p className="flex gap-4 text-sm">
              <a href="https://www.instagram.com/psicolobiaa" target="_blank" rel="noopener" className="text-accent font-bold hover:underline flex items-center gap-1">
                📸 @psicolobiaa
              </a>
              <a href="https://www.tiktok.com/@psicolobiaa" target="_blank" rel="noopener" className="text-accent font-bold hover:underline flex items-center gap-1">
                🎵 TikTok
              </a>
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
