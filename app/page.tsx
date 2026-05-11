import { Header } from "@/app/components/landing/Header";
import { HeroBio } from "@/app/components/landing/HeroBio";
import { Services } from "@/app/components/landing/Services";
import { MessageCarousel } from "@/app/components/landing/MessageCarousel";
import { Blog } from "@/app/components/landing/Blog";
import { Footer } from "@/app/components/landing/Footer";
import { WhatsAppFloat } from "@/app/components/landing/WhatsAppFloat";
import { tenantConfig } from "@/lib/tenant.config";
import dynamic from "next/dynamic";

const Chatbot = dynamic(
  () => import("@/app/components/landing/Chatbot").then((m) => m.Chatbot),
  { loading: () => null }
);

const Scheduling = dynamic(
  () => import("@/app/components/landing/Scheduling").then((m) => m.Scheduling),
  { loading: () => <div className="py-20" /> }
);
const Contact = dynamic(
  () => import("@/app/components/landing/Contact").then((m) => m.Contact),
  { loading: () => <div className="py-20" /> }
);

const { name, description, professional, urls, social, location, branding } = tenantConfig;
const siteUrl = urls.siteUrl;
const namePath = `${siteUrl}/#organization`;
const personPath = `${siteUrl}/#${professional.nickname.toLowerCase()}`;
const phone = urls.whatsapp.replace("https://wa.me/", "+");

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": namePath,
    name,
    alternateName: `${name} - ${professional.name}`,
    description,
    url: siteUrl,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    priceRange: branding.priceRange,
    image: `${siteUrl}${professional.photo}`,
    logo: `${siteUrl}/icon.svg`,
    sameAs: [
      social.instagram,
      social.tiktok,
      ...(social.linktree ? [social.linktree] : []),
    ],
    founder: { "@id": personPath },
    employee: { "@id": personPath },
    areaServed: { "@type": "Country", name: location.country },
    serviceType: [
      "Terapia Individual Online",
      "Ansiedade e Depressão",
      "Terapia de Aceitação e Compromisso (ACT)",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personPath,
    name: professional.name,
    alternateName: professional.nickname,
    givenName: professional.name.split(" ")[0],
    familyName: professional.name.split(" ").slice(1).join(" "),
    jobTitle: professional.title,
    description: `${professional.crp} - Especialista no impacto emocional da vida digital. Com mais de 3.500 atendimentos, ofereço suporte para ansiedade, burnout e autoconhecimento através da abordagem ACT. Atendimento seguro e ético online.`,
    image: `${siteUrl}${professional.photo}`,
    url: siteUrl,
    sameAs: [social.instagram, social.tiktok],
    alumniOf: { "@type": "CollegeOrUniversity", name: "UNOESTE — Universidade do Oeste Paulista" },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Registro Profissional",
        name: professional.crp,
        recognizedBy: { "@type": "Organization", name: "Conselho Regional de Psicologia — CRP 06/SP" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Formação complementar",
        name: "Transtornos de Ansiedade e Depressivos",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "Faculdade Israelita de Ciências da Saúde Albert Einstein" },
        dateCreated: "2023-08",
      },
    ],
    knowsAbout: [
      "Terapia de Aceitação e Compromisso (ACT)",
      "Ansiedade",
      "Depressão",
      "Burnout digital",
      "Autoestima",
      "Autoconhecimento",
      "Regulação emocional",
    ],
    worksFor: { "@id": namePath },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name,
    inLanguage: "pt-BR",
    publisher: { "@id": namePath },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Sobre", item: `${siteUrl}/#sobre` },
      { "@type": "ListItem", position: 3, name: "Áreas de atuação", item: `${siteUrl}/#servicos` },
      { "@type": "ListItem", position: 4, name: "Agendamento", item: `${siteUrl}/#agendamento` },
      { "@type": "ListItem", position: 5, name: "Blog", item: `${siteUrl}/#blog` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "A terapia online é eficaz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia (Resolução CFP 11/2018) e, com plano clínico estruturado e frequência consistente, tem eficácia comparável ao presencial para a maioria dos quadros emocionais.",
        },
      },
      {
        "@type": "Question",
        name: "Qual é o valor da sessão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sessões semanais: R$ 120. Sessões avulsas, quinzenais ou mensais: R$ 150. O valor do semanal é reduzido para incentivar a continuidade do processo terapêutico.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo dura uma sessão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cada sessão dura entre 50 minutos e 1 hora, realizada por videochamada em ambiente criptografado.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso abrir a câmera durante a sessão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. Você participa com câmera aberta ou fechada, como se sentir mais à vontade. O importante é a conexão e o processo terapêutico.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o agendamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Após criar conta no portal, você acessa a agenda com horários disponíveis em tempo real, confirma o agendamento e recebe notificações e o link da videochamada no dia da sessão.",
        },
      },
      {
        "@type": "Question",
        name: "Como é a primeira sessão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A primeira sessão é dedicada a conhecer sua história, entender o que te trouxe até a terapia e alinhar frequência, formato e objetivos iniciais. Você não precisa chegar com nada pronto — traga sua principal inquietação e o resto construímos juntas.",
        },
      },
      {
        "@type": "Question",
        name: "Minhas informações ficam protegidas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Todo conteúdo clínico é protegido pelo sigilo profissional previsto no Código de Ética Profissional do Psicólogo e pela LGPD. Os dados trafegam em ambiente criptografado e não são compartilhados com terceiros sem autorização.",
        },
      },
      {
        "@type": "Question",
        name: "Atende presencialmente em São Paulo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No momento, atendo exclusivamente online — o que permite manter qualidade de escuta e regularidade independente da cidade onde você mora.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/#blog`,
    name: `Blog ${name}`,
    author: { "@id": personPath },
    publisher: { "@id": namePath },
    inLanguage: "pt-BR",
  },
];

export default function Home() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main id="main">
        <HeroBio />
        <MessageCarousel />
        <Services />
        <Scheduling />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </>
  );
}
