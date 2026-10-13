import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MethodologieClient from "./MethodologieClient";

export const metadata: Metadata = {
  title: "Méthodologie GEO 2026 : Architecture RAG & Inférence LLM | AnswerPress",
  description:
    "Comment les IA choisissent leurs réponses : l'architecture RAG (Retrieval-Augmented Generation) et l'équation mathématique qui régit la citation de votre marque par ChatGPT et Perplexity.",
  alternates: { canonical: "https://answerpress.io/methodologie" },
  openGraph: {
    title: "Méthodologie GEO & Architecture RAG — AnswerPress",
    description:
      "L'équation mathématique du référencement sur l'IA et le protocole d'inférence des moteurs conversationnels.",
    url: "https://answerpress.io/methodologie",
    type: "website",
    locale: "fr_FR",
  },
};

export default function MethodologiePage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Méthodologie GEO en 4 étapes pour verrouiller les citations IA",
    description:
      "Protocole d'autorité média pour faire recommander une marque en N°1 par ChatGPT, Perplexity, Claude et Gemini.",
    totalTime: "P45D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Forensique & Cartographie des Prompts",
        text: "Identifier les 25 requêtes d'achat clés et mesurer la part de voix initiale face aux rivaux.",
        url: "https://answerpress.io/methodologie#audit",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Infiltration des Guides de Référence & Bancs d'Essai",
        text: "Intégrer les comparatifs déjà crawlés par GPTBot sur Les Numériques, Marmiton ou Maison & Travaux.",
        url: "https://answerpress.io/methodologie#infiltration",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Consolidation Sémantique & FAQ d'Arbitrage",
        text: "Publier les données chiffrées et réponses conversationnelles aux questions de doute d'achat.",
        url: "https://answerpress.io/methodologie#consolidation",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Monitoring & Verrouillage du Consensus IA",
        text: "Surveiller mensuellement la persistance du rang de citation et neutraliser les contre-attaques.",
        url: "https://answerpress.io/methodologie#monitoring",
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
        name: "Méthodologie GEO",
        item: "https://answerpress.io/methodologie",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Méthodologie GEO 2026 : Architecture RAG & Inférence LLM | AnswerPress",
    url: "https://answerpress.io/methodologie",
    datePublished: "2026-08-10T08:00:00+02:00",
    dateModified: "2026-10-13T17:00:00+02:00",
    inLanguage: "fr-FR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".press-title", ".press-eyebrow", "article p", ".geo-equation"],
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
          <span className="text-stone">Méthodologie GEO</span>
        </nav>

        <p className="press-eyebrow flex items-center gap-2">
          <span>Science du référencement IA</span>
          <span className="text-stone/40">&bull;</span>
          <time dateTime="2026-10-13" className="text-stone">Mise à jour Octobre 2026</time>
        </p>
        <h1 className="press-title mt-4 text-3xl sm:text-5xl leading-tight">
          Comment les IA choisissent leurs réponses
        </h1>
        <p className="mt-4 text-graphite max-w-2xl text-base">
          L&apos;architecture RAG (Retrieval-Augmented Generation) et l&apos;équation qui régit
          l&apos;inférence des moteurs conversationnels.
        </p>
      </div>

      <MethodologieClient />
    </main>
  );
}
