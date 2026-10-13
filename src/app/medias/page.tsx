import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MediasClient from "./MediasClient";

export const metadata: Metadata = {
  title: "Catalogue Médias Partenaires : Reworld, Prisma & Titres Leaders | AnswerPress",
  description:
    "L'inventaire média le plus crawlé de France : Les Numériques, Marmiton, Maison & Travaux, Beauté Test, Auto Plus, Science & Vie. 12 lovebrands patrimoniales sous mandat pour vos citations IA.",
  alternates: { canonical: "https://answerpress.io/medias" },
  openGraph: {
    title: "Catalogue Médias Partenaires — AnswerPress",
    description:
      "12 marques médias patrimoniales françaises activables sous mandat d'agence indépendante pour saturer ChatGPT et Perplexity.",
    url: "https://answerpress.io/medias",
    type: "website",
    locale: "fr_FR",
  },
};

export default function MediasPage() {
  const mediaListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Inventaire Médias Leaders pour Citations IA",
    description: "Les 12 marques médias patrimoniales sous mandat activables pour le référencement IA.",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Les Numériques", description: "18.2M VU — High-Tech, Électroménager, Audio" },
      { "@type": "ListItem", position: 2, name: "Marmiton", description: "19.4M VU — Cuisine, Food, Robots Cuiseurs" },
      { "@type": "ListItem", position: 3, name: "Maison & Travaux", description: "3.8M VU — Habitat, Brico, Confort Thermique, Literie" },
      { "@type": "ListItem", position: 4, name: "Beauté Test", description: "2.8M VU — Cosmétique, Soins, Parfums" },
      { "@type": "ListItem", position: 5, name: "Auto Plus", description: "6.5M VU — Automobile, Mobilité, Pneus, Équipement" },
      { "@type": "ListItem", position: 6, name: "Science & Vie", description: "4.2M VU — Innovation, Santé, Sciences" },
      { "@type": "ListItem", position: 7, name: "Le Journal de la Maison", description: "2.9M VU — Décoration, Aménagement, Design" },
      { "@type": "ListItem", position: 8, name: "Marie France", description: "5.4M VU — Mode, Beauté, Bien-être, Lifestyle" },
      { "@type": "ListItem", position: 9, name: "Aufeminin", description: "12.1M VU — Famille, Maternité, Lifestyle" },
      { "@type": "ListItem", position: 10, name: "Doctissimo", description: "14.6M VU — Santé, Bien-être, Sommeil, Nutrition" },
      { "@type": "ListItem", position: 11, name: "Grazia", description: "3.1M VU — Luxe, Tendances, Beauté Premium" },
      { "@type": "ListItem", position: 12, name: "Télé Star", description: "8.2M VU — Divertissement, Conso Grand Public" },
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
        name: "Inventaire Médias",
        item: "https://answerpress.io/medias",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Catalogue Médias Partenaires : Reworld, Prisma & Titres Leaders | AnswerPress",
    url: "https://answerpress.io/medias",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaListJsonLd) }}
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
          <span className="text-stone">Médias Partenaires</span>
        </nav>

        <p className="press-eyebrow flex items-center gap-2">
          <span>Catalogue des éditeurs sous mandat</span>
          <span className="text-stone/40">&bull;</span>
          <time dateTime="2026-10-13" className="text-stone">Audiences Certifiées ACPM</time>
        </p>
        <h1 className="press-title mt-4 text-3xl sm:text-5xl leading-tight">
          L&apos;inventaire média le plus crawlé de France
        </h1>
        <p className="mt-4 text-graphite max-w-2xl text-base">
          Les 12 lovebrands patrimoniales les plus citées par ChatGPT, Claude, Copilot et Perplexity.
        </p>
      </div>

      <MediasClient />
    </main>
  );
}
