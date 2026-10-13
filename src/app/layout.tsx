import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://answerpress.io"),
  title: "Être cité par ChatGPT & Perplexity | AnswerPress — Autorité Média & GEO",
  description:
    "Comment être recommandé par les IA ? AnswerPress fait entrer votre marque dans les guides et bancs d'essai des grands médias (Les Numériques, Marmiton, Maison & Travaux) pour que ChatGPT, Perplexity et Gemini citent votre produit en N°1. Audit de visibilité IA gratuit.",
  // Ciblage : requêtes d'intention / pain points tapés par les directions marketing,
  // et reformulables en questions par les moteurs génératifs (GEO).
  keywords: [
    "être cité par ChatGPT",
    "apparaître dans ChatGPT",
    "comment être recommandé par les IA",
    "GEO generative engine optimization",
    "referencement IA",
    "visibilité ChatGPT Perplexity",
    "citations IA marque",
    "audit visibilité IA",
    "SEO vs GEO",
    "part de voix IA",
    "netlinking IA",
    "optimisation moteurs génératifs",
  ],
  authors: [{ name: "AnswerPress Intelligence" }],
  openGraph: {
    title: "AnswerPress — Devenez la Réponse Citée par les IA",
    description:
      "Votre marque absente des réponses de ChatGPT ? Nous l'infiltrons dans les guides des grands médias français pour verrouiller la recommandation IA. Audit gratuit.",
    url: "https://answerpress.io",
    siteName: "AnswerPress.io",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnswerPress — Devenez la Réponse Citée par les IA",
    description:
      "Autorité média & citations IA : faites citer votre marque par ChatGPT, Perplexity et Gemini.",
  },
  alternates: {
    canonical: "https://answerpress.io",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AnswerPress",
  url: "https://answerpress.io",
  description:
    "Centrale d'autorité média et de citations IA (GEO) : infiltration de marques dans les guides et bancs d'essai des grands médias français pour saturer les moteurs génératifs.",
  areaServed: "FR",
  knowsAbout: [
    "Generative Engine Optimization",
    "Citations IA",
    "Autorité média",
    "Netlinking IA",
    "Visibilité ChatGPT",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Generative Engine Optimization (GEO) & Autorité Média",
  provider: { "@type": "Organization", name: "AnswerPress", url: "https://answerpress.io" },
  areaServed: "FR",
  description:
    "Packages d'infiltration presse pour être cité par ChatGPT, Perplexity, Gemini et Copilot : guides d'achat, bancs d'essai labo, tableaux comparatifs et FAQ conversationnelles.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "4900",
    highPrice: "39000",
    offerCount: "3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
