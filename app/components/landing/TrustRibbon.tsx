import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { value: "+3.500", label: "Sessões", sub: "conduzidas pessoalmente" },
  { value: "CRP 06", label: "173961", sub: "registro ativo no e-Psí" },
  { value: "Einstein", label: "2023", sub: "formação em ansiedade e depressão" },
  { value: "ACT", label: "Base teórica", sub: "terapia baseada em evidências" },
];

export function TrustRibbon() {
  return (
    <section
      aria-label="Credenciais profissionais"
      className="bg-bg-warm border-y border-gold/25"
    >
      <AnimatedSection direction="up" className="max-w-[1160px] mx-auto px-4 md:px-8 py-10">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-teal font-semibold text-center mb-6">
          Formação · Registro · Experiência
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/20">
          {stats.map((s) => (
            <div key={s.value + s.label} className="bg-bg-warm px-5 py-4 text-center">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-txt leading-none">
                {s.value}
              </p>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-teal-dark font-semibold mt-2">
                {s.label}
              </p>
              <p className="text-[0.68rem] text-txt-muted leading-tight mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
