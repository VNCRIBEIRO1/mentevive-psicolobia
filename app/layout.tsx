import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { tenantConfig } from "@/lib/tenant.config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const { professional, urls, social, seo, name, longDescription, description } = tenantConfig;
const siteUrl = urls.siteUrl;
const defaultTitle = `${name} — ${professional.name} | ${professional.title} Online em ${tenantConfig.location.city}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: seo.titleTemplate,
  },
  description: longDescription,
  authors: [{ name: professional.name, url: siteUrl }],
  creator: `${professional.name} — ${professional.title}`,
  publisher: name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: name,
    title: `${name} — ${professional.name} | ${professional.title} Online`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${professional.name} | ${professional.title} Online`,
    description,
    ...(seo.twitterHandle ? { creator: seo.twitterHandle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-[url('/planofundo.jpeg')] bg-center bg-cover bg-fixed">{children}</body>
    </html>
  );
}

