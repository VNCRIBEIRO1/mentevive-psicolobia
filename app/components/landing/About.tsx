import Image from "next/image";
import { Award, Building, Target } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export function About() {
  return (
    <section className="py-20 px-4 md:px-8" id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center max-w-[1100px] mx-auto">
        {/* Photo */}
        <AnimatedSection direction="left" staggerType="premium" className="relative max-w-[420px] mx-auto lg:mx-0">
          <div className="p-1 bg-gradient-to-br from-gold/30 via-teal/15 to-gold/20 rounded-[24px_24px_24px_80px]">
            <Image
              src="/bia-perfil.jpeg"
              alt="Beatriz — Psicóloga Clínica Psicolobia"
              width={400}
              height={500}
              className="rounded-[24px_24px_24px_80px] shadow-warm-lg w-full h-[500px] object-cover object-top"
              priority
            />
          </div>
          <div className="glass-strong absolute bottom-5 right-5 p-4 rounded-brand shadow-warm-md flex items-center gap-3 border border-gold/20">
            <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-teal" />
            </div>
            <div>
              <div className="text-sm font-bold">+3.500 Atendimentos</div>
              <div className="text-[0.68rem] text-txt-muted">Escuta sensível e acolhimento real</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection direction="right" staggerType="premium" staggerChildren={0.08}>
          <AnimatedItem direction="up">
            <div className="section-label">Sobre Mim</div>
            <h2 className="section-title">Beatriz (Bea)</h2>
            <p className="text-xs text-teal-dark font-semibold mb-2">
              CRP 06/173961 · UNOESTE — Universidade do Oeste Paulista
            </p>
          </AnimatedItem>

          {/* Einstein Badge — Destaque */}
          <AnimatedItem direction="up">
            <div className="relative rounded-brand p-5 mb-6 bg-gradient-to-r from-gold-soft/60 via-amber-50 to-gold-soft/60 border border-gold/25 shadow-warm-md hover:shadow-gold-glow transition-shadow duration-300">
              <div className="absolute -top-3 left-5 px-3 py-0.5 rounded-full bg-teal text-white text-[0.6rem] font-bold uppercase tracking-widest shadow-sm">
                Certificação
              </div>
              <div className="flex items-center gap-3.5 mt-1">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-soft to-amber-100 rounded-full flex items-center justify-center shrink-0 ring-2 ring-gold/30 shadow-sm">
                  <Award className="w-7 h-7 text-gold-dark" />
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-900">Faculdade Israelita Albert Einstein</p>
                  <p className="text-xs text-amber-700 mt-0.5">Transtorno Ansioso e Depressivo · agosto de 2023</p>
                  <p className="text-[0.68rem] text-amber-600/80 mt-1">Formação complementar em uma das instituições de saúde mais renomadas do Brasil.</p>
                </div>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-sm text-txt-light leading-relaxed mb-4">
              Sou psicóloga clínica e atuo com foco no emocional de quem vive da internet. Ao longo da minha trajetória, já realizei mais de 3.500 atendimentos e desenvolvi uma abordagem própria — fundamentada na escuta genuína, na ética profissional e no compromisso de acolher cada história com a profundidade que ela merece.
            </p>
            <p className="text-sm text-txt-light leading-relaxed mb-4">
              Minha principal referência teórica é a <strong>Terapia de Aceitação e Compromisso (ACT)</strong>, que me permite trabalhar flexibilidade psicológica, regulação emocional e construção de uma vida orientada por valores — mesmo em meio à ansiedade, ao esgotamento ou à pressão de estar sempre visível.
            </p>
            <p className="text-sm text-txt-light leading-relaxed mb-5">
              Atendo exclusivamente online, mas a conexão é viva, humana e presente. Sem pressa, sem moldes, sem máscaras. Se você sente que é hora de ser escutado(a) de verdade, talvez seja hora de a gente se conhecer.
            </p>
          </AnimatedItem>

          {/* Áreas de atuação */}
          <AnimatedItem direction="up">
            <div className="mb-5">
              <h3 className="text-xs font-bold text-txt uppercase tracking-wide mb-3 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-teal" /> Áreas de Atuação
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Ansiedade", "Depressão", "Autoestima",
                  "Burnout Digital", "Relacionamentos", "Luto",
                  "Autoconhecimento", "Regulação Emocional",
                  "Flexibilidade Psicológica", "ACT",
                ].map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full text-[0.68rem] font-semibold bg-teal/10 text-teal-dark border border-gold/15 hover:border-gold/30 hover:bg-teal/20 transition-colors">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedItem>

          {/* Experience highlight — Privacy */}
          <AnimatedItem direction="up">
            <div className="glass gold-border-accent rounded-brand-sm p-4 mb-5 flex items-start gap-3">
              <Building className="w-5 h-5 text-teal mt-0.5" />
              <div>
                <p className="text-sm font-bold text-txt">Privacy — Psicóloga Clínica (2022 – 2024)</p>
                <p className="text-xs text-txt-light mt-1 leading-relaxed">
                  Durante dois anos, conduzi entre 35 e 40 atendimentos semanais voltados a criadores de conteúdo digital e colunistas — profissionais que enfrentam demandas emocionais específicas da exposição online, como cobrança por performance, comparação constante e dificuldade de impor limites entre vida pessoal e pública.
                </p>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem direction="up">
            <p className="text-sm font-bold text-teal-dark mb-2">
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
