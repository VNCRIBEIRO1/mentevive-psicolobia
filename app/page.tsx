import { Header } from "@/app/components/landing/Header";
import { Hero } from "@/app/components/landing/Hero";
import { Journey } from "@/app/components/landing/Journey";
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

const { name, description, professional, urls, social, location, branding } = tenantConfig;
const siteUrl = urls.siteUrl;
const namePath = `${siteUrl}/#organization`;
const personPath = `${siteUrl}/#${professional.nickname.toLowerCase()}`;
// Extract phone from whatsapp URL (wa.me/5511988840525 → +5511988840525)
const phone = urls.whatsapp.replace("https://wa.me/", "+");

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": namePath,
    name,
    alternateName: `${name} — ${professional.name}`,
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
      description: `${professional.crp} — ${professional.formation}. ${professional.specialties.join(" e ")}.`,
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
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: siteUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funciona a terapia online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As sessões acontecem por videochamada em uma sala segura e privada. Você pode participar de qualquer lugar com internet. A eficácia é a mesma da terapia presencial.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a abordagem terapêutica utilizada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `A principal abordagem é ${professional.specialties[0]}, que ajuda a desenvolver flexibilidade psicológica e a viver de acordo com seus valores.`,
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo dura cada sessão?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As sessões individuais têm duração de 50 minutos. Sessões de casal podem ter duração diferenciada conforme a necessidade.",
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
        <SectionDivider variant="wave-down" />
        <Journey />
        <SectionDivider variant="wave-up" colorFrom="var(--teal)" colorTo="var(--primary)" />
        <About />
        <SectionDivider variant="wave-down" />
        <Services />
        <SectionDivider variant="wave-up" colorFrom="var(--primary)" colorTo="var(--teal)" />
        <Scheduling />
        <SectionDivider variant="wave-down" colorFrom="var(--teal)" colorTo="var(--primary)" />
        <Blog />
        <SectionDivider variant="wave-down" colorFrom="var(--primary)" colorTo="var(--teal)" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </>
  );
}
