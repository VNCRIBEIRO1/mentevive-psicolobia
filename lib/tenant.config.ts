/**
 * ============================================================
 * CONFIGURAÇÃO DO TENANT — MenteVive Landing Template
 * ============================================================
 *
 * Este arquivo centraliza TODOS os dados específicos do tenant
 * que aparecem no site de landing.
 *
 * Para criar um novo site para um novo psicólogo/consultório:
 * 1. Clone este repositório
 * 2. Edite apenas este arquivo (e o .env.local)
 * 3. Faça deploy na Vercel
 * 4. Configure o domínio customizado
 *
 * ============================================================
 */

export const tenantConfig = {
  // ── Identidade do Consultório ──────────────────────────────
  slug: "psicolobia", // Mesmo slug cadastrado na plataforma MenteVive
  name: "Psicolobia",
  tagline: "Psicóloga para Profissionais Digitais e Criadores",
  description:
    "Especialista no emocional de quem vive da internet. +3500 atendimentos realizados. Terapia online para ansiedade, burnout digital e autoconhecimento através da abordagem ACT.",
  longDescription:
    "Beatriz Matos (Bea) — Psicóloga Clínica CRP 06/173961. Especialista no impacto emocional da vida digital. Com mais de 3.500 atendimentos, ofereço terapia online focada em Terapia de Aceitação e Compromisso (ACT) para tratar ansiedade, burnout, depressão e autoestima. Atendimento seguro em todo o Brasil a partir de São Paulo.",

  // ── Profissional ───────────────────────────────────────────
  professional: {
    name: "Beatriz Matos",
    nickname: "Bea",
    title: "Psicóloga Clínica",
    crp: "CRP 06/173961",
    formation: "UNOESTE",
    specialties: [
      "Terapia de Aceitação e Compromisso (ACT)",
    ],
    photo: "/perfilsobre.jpeg", // Foto principal do About (usada em OG/JSON-LD)
    sessionCount: "+3500 atendimentos",
  },

  // ── URLs ───────────────────────────────────────────────────
  urls: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://mentevive-psicolobia.vercel.app",
    platformUrl: process.env.NEXT_PUBLIC_PLATFORM_URL || "https://mentevive.vercel.app",
    whatsapp: "https://wa.me/5511988840525",
  },

  // ── Redes Sociais ──────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/psicolobiaa",
    instagramHandle: "@psicolobiaa",
    tiktok: "https://www.tiktok.com/@psicolobiaa",
    linktree: "https://linktr.ee/psicolobiaa",
  },

  // ── Endereço / SEO ─────────────────────────────────────────
  location: {
    city: "São Paulo",
    state: "SP",
    country: "BR",
    latitude: -23.5505,
    longitude: -46.6333,
  },

  // ── Aparência ──────────────────────────────────────────────
  branding: {
    // Cores CSS customizadas (sobrepõem tailwind.config.ts se necessário)
    primaryColor: "#2d6a4f",
    accentColor: "#95d5b2",
    priceRange: "$$", // Schema.org markup
  },

  // ── SEO / Meta ─────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | Psicolobia",
    keywords: [
      "psicóloga para criadores de conteúdo", "terapia online para influenciadores", "burnout digital", "ansiedade por engajamento",
      "saúde mental na internet", "psicologia para nômades digitais", "pressão do algoritmo", "síndrome do impostor criadores",
      "fadiga de decisão digital", "estresse por redes sociais", "terapia ACT online", "psicóloga Beatriz Matos",
      "saúde mental criativa", "equilíbrio vida digital e pessoal", "compulsão por métricas", "ansiedade de performance online",
      "terapia para produtores de conteúdo", "esgotamento mental youtubers", "saúde mental streamers", "psicologia da comparação",
      "terapia de aceitação e compromisso online", "psicóloga São Paulo online", "atendimento clínico digital", "flexibilidade emocional",
      "desconexão saudável", "vício em redes sociais terapia", "fomo saúde mental", "pânico por cancelamento", "gestão de crise de imagem emocional",
      "saúde mental para empreendedores digitais", "fobia social online", "depressão e redes sociais", "autoestima no digital",
      "psicóloga especialista em burnout", "terapia para marketing digital", "estresse crônico influenciadores", "insônia por telas",
      "saúde mental tiktokers", "psicologia comportamental online", "mentevive psicolobia", "atendimento ético psicologia online",
      "CRP 06/173961", "Beatriz Matos CRP", "terapia científica criadores", "protocolo burnout digital", "recuperação mental pós-burnout",
      "ansiedade generalizada criadores", "saúde mental e algoritmos", "pressão estética digital", "solidão no digital",
      "terapia para agências de influência", "suporte emocional para talentos", "gestão de estresse criativo", "bloqueio criativo terapia",
      "burnout profissional digital", "saúde mental em lançamentos", "ansiedade em infoprodutores", "terapia para gamers",
      "psicologia do esporte digital", "e-sports saúde mental", "fadiga por zoom", "work-life balance criadores",
      "psicóloga para youtubers brasileiros", "terapia online exterior brasileiros", "saúde mental expatriados digitais",
      "estresse de produção de conteúdo", "comparação social instagram", "dependência de validação online", "limites no digital",
      "terapia breve foco em burnout", "acolhimento psicológico digital", "psicoterapia para influentes", "saúde mental e privacidade",
      "estresse por haters", "gestão de comentários negativos", "blindagem emocional digital", "resiliência psicológica online",
      "terapia ACT para ansiedade", "ciência da felicidade digital", "mindfulness para criadores", "foco e produtividade saúde mental",
      "psicóloga Beatriz Matos Psicolobia", "atendimento humanizado online", "terapia para profissionais de tecnologia",
      "saúde mental devs", "ansiedade programadores", "estresse em startups", "burnout em founders", "psicologia para copywriters",
      "saúde mental gestores de tráfego", "ansiedade social digital", "medo de aparecer nos stories", "fobia de câmera terapia",
      "saúde mental para editores de vídeo", "estresse de prazos digitais", "vício em dopamina digital", "desintoxicação digital guiada",
      "psicóloga clínica online Brasil", "terapia especializada em internet"
    ],
    twitterHandle: "@psicolobiaa",
  },
} as const;

export type TenantConfig = typeof tenantConfig;
