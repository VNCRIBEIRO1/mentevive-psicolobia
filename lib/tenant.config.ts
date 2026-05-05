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
      "psicóloga online",
      "terapia online para criadores de conteúdo",
      "psicóloga São Paulo",
      "psicóloga especialista em burnout digital",
      "terapia ACT online",
      "tratamento ansiedade digital",
      "Beatriz Matos psicóloga",
      "Psicolobia Beatriz Matos",
      "terapia para influenciadores",
      "psicologia clínica online Brasil",
      "CRP 06/173961",
    ],
    twitterHandle: "@psicolobiaa",
  },
} as const;

export type TenantConfig = typeof tenantConfig;
