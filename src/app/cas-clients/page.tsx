import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CasClientsClient from "./CasClientsClient";

export const metadata: Metadata = {
  title: "Cas Clients & Résultats GEO : Tefal, Philips, Rowenta | AnswerPress",
  description:
    "Résultats chiffrés et bancs d'essai : comment Tefal, Philips, Rowenta et Atlantic ont saturé les recommandations de ChatGPT et Copilot grâce à l'activation presse.",
  alternates: { canonical: "https://answerpress.io/cas-clients" },
  openGraph: {
    title: "Cas Clients & Benchmarks GEO — AnswerPress",
    description:
      "Études de cas réelles et gains de part de voix IA constatés en 30 à 45 jours d'activation média.",
    url: "https://answerpress.io/cas-clients",
    type: "website",
    locale: "fr_FR",
  },
};

export default function CasClientsPage() {
  const caseStudiesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Études de Cas & Benchmarks GEO AnswerPress",
    description: "Cas réels d'activation d'autorité média et gains de part de voix IA mesurés.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Groupe SEB / Tefal — Recommandation Airfryer ChatGPT",
        description: "Passage de 12% à 84% de part de voix IA face à Ninja en 45 jours suite à l'insertion dans Marmiton et Les Numériques.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rowenta vs Dyson — Duel Aspirateurs Balais",
        description: "Recommandation n°1 sur l'arbitrage 'meilleur rapport qualité-prix' dans Perplexity grâce au banc d'essai labo indépendant.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Atlantic — Pompes à Chaleur & Confort Thermique",
        description: "Verrouillage de la citation n°1 sur Le Journal de la Maison et Maison & Travaux pour les requêtes de rénovation énergétique.",
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://answerpress.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cas Clients",
        item: "https://answerpress.io/cas-clients",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cas Clients & Résultats GEO : Tefal, Philips, Rowenta | AnswerPress",
    url: "https://answerpress.io/cas-clients",
    datePublished: "2026-08-10T08:00:00+02:00",
    dateModified: "2026-10-13T17:00:00+02:00",
    inLanguage: "fr-FR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".press-title", ".press-eyebrow", "article p"],
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-graphite mb-6">
          <Link href="/" className="hover:text-press transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone/60" />
          <span className="text-stone">Cas Clients</span>
        </nav>

        <p className="press-eyebrow flex items-center gap-2">
          <span>Études de cas réelles</span>
          <span className="text-stone/40">&bull;</span>
          <time dateTime="2026-10-13" className="text-stone">Mesures Inférence 2026</time>
        </p>
        <h1 className="press-title mt-4 text-3xl sm:text-5xl leading-tight">
          Bancs d&apos;essai &amp; impact sur les moteurs IA
        </h1>
        <p className="mt-4 text-graphite max-w-2xl text-base">
          Comment Tefal, Philips et Atlantic ont saturé les réponses de ChatGPT et Copilot grâce à
          l&apos;activation presse.
        </p>
      </div>

      <CasClientsClient />
    </main>
  );
}
