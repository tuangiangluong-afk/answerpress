import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TarifsClient from "./TarifsClient";

export const metadata: Metadata = {
  title: "Tarifs & Packages GEO 2026 : Offres Infiltration & Domination | AnswerPress",
  description:
    "Grille tarifaire transparente d'activation média pour être cité par les IA. Dès 4 900 € HT pour 2 insertions garanties sous 10 jours ouvrés. Zéro surprise, zéro régie opaque.",
  alternates: { canonical: "https://answerpress.io/tarifs" },
  openGraph: {
    title: "Tarifs & Packages GEO — AnswerPress",
    description:
      "Packages d'activation média pour saturer ChatGPT et Perplexity. De 4 900 € à 14 900 € HT avec garantie d'indexation.",
    url: "https://answerpress.io/tarifs",
    type: "website",
    locale: "fr_FR",
  },
};

export default function TarifsPage() {
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Packages d'Activation Média & Citations IA AnswerPress",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Pack Infiltration & Fast Citation",
        price: "4900",
        priceCurrency: "EUR",
        description: "2 insertions dans des guides de référence, indexation garantie sous 10 jours ouvrés, 1 produit héros.",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pack Domination Éditoriale",
        price: "8900",
        priceCurrency: "EUR",
        description: "3 insertions guides + 1 banc d'essai labo indépendant + FAQ d'arbitrage. Le plus sélectionné.",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pack Hégémonie de Catégorie",
        price: "14900",
        priceCurrency: "EUR",
        description: "6 activations cross-médias, saturation d'une verticale complète, monitoring mensuel de part de voix IA.",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Audit Exécutif Board-Ready",
        price: "0",
        priceCurrency: "EUR",
        description: "Audit d'Indice de Considération LLM face à 2 concurrents sur 5 requêtes d'achat clés, livré sous 24h.",
        availability: "https://schema.org/InStock",
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
        name: "Tarifs & Packages",
        item: "https://answerpress.io/tarifs",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tarifs & Packages GEO 2026 : Offres Infiltration & Domination | AnswerPress",
    url: "https://answerpress.io/tarifs",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
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
          <span className="text-stone">Tarifs &amp; Packages</span>
        </nav>

        <p className="press-eyebrow flex items-center gap-2">
          <span>Offres &amp; prix packagés</span>
          <span className="text-stone/40">&bull;</span>
          <time dateTime="2026-10-13" className="text-stone">Tarifs Régie 2026</time>
        </p>
        <h1 className="press-title mt-4 text-3xl sm:text-5xl leading-tight">
          Packages média &amp; citations IA clés en main
        </h1>
        <p className="mt-4 text-graphite max-w-2xl text-base">
          Des offres calibrées pour court-circuiter les régies traditionnelles et saturer l&apos;index
          des LLMs sous 10 jours ouvrés.
        </p>
      </div>

      <TarifsClient />
    </main>
  );
}
