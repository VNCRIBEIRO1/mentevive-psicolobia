import { Header } from "@/app/components/landing/Header";
import { Hero } from "@/app/components/landing/Hero";
import { About } from "@/app/components/landing/About";
import { Services } from "@/app/components/landing/Services";
import { Blog } from "@/app/components/landing/Blog";
import { Contact } from "@/app/components/landing/Contact";
import { Footer } from "@/app/components/landing/Footer";
import { WhatsAppFloat } from "@/app/components/landing/WhatsAppFloat";
import { SectionDivider } from "@/app/components/landing/SectionDivider";
import { tenantConfig } from "@/lib/tenant.config";
import dynamic from "next/dynamic";

const Scheduling = dynamic(
  () => import("@/app/components/landing/Scheduling").then((m) => m.Scheduling),
  { loading: () => <div className="py-20" /> }
);
const Chatbot = dynamic(
  () => import("@/app/components/landing/Chatbot").then((m) => m.Chatbot)
);
const PortalShowcase = dynamic(
  () => import("@/app/components/landing/PortalShowcase").then((m) => m.PortalShowcase),
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
    founder: {
      "@type": "Person",
      "@id": personPath,
      name: professional.name,
      givenName: professional.name.split(" ")[0],
      familyName: professional.name.split(" ").slice(1).join(" "),
      jobTitle: professional.title,
      description: `${professional.crp} - ${professional.formation}. ${professional.specialties.join(" e ")}.`,
      image: `${siteUrl}${professional.photo}`,
      url: siteUrl,
      sameAs: [social.instagram, social.tiktok],
    },
    areaServed: { "@type": "Country", name: location.country },
    serviceType: [
      "Terapia Individual Online",
      "Ansiedade e Depressão",
      "Tratamento de Traumas",
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
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funciona o cadastro no portal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você cria a conta pelo link do tenant e entra no Portal do Paciente para agendar e acompanhar sessões.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o agendamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O agendamento é feito no portal, com horários disponíveis em tempo real e confirmação no próprio sistema.",
        },
      },
      {
        "@type": "Question",
        name: "As sessões são presenciais ou online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As sessões são realizadas por videochamada em ambiente seguro.",
        },
      },
    ],
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
        <Hero />
        <SectionDivider variant="wave-up" colorFrom="var(--teal)" colorTo="var(--primary)" />
        <About />
        <SectionDivider variant="wave-down" />
        <Services />
        <SectionDivider variant="wave-up" colorFrom="var(--primary)" colorTo="var(--teal)" />
        <PortalShowcase />
        <SectionDivider variant="wave-down" colorFrom="var(--teal)" colorTo="var(--primary)" />
        <Blog />
        <SectionDivider variant="wave-up" colorFrom="var(--primary)" colorTo="var(--teal)" />
        <Scheduling />
        <SectionDivider variant="wave-down" colorFrom="var(--primary)" colorTo="var(--teal)" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </>
  );
}
