import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides & Analyses — Être cité par les IA, mesurer sa part de voix | AnswerPress",
  description:
    "Guides pratiques sur le GEO (Generative Engine Optimization) : être cité par ChatGPT et Perplexity, mesurer sa part de voix IA, comprendre la différence entre SEO et GEO, budgéter une stratégie de citations IA.",
  alternates: { canonical: "https://answerpress.io/guides" },
  openGraph: {
    title: "Guides & Méthodologie GEO — AnswerPress",
    description:
      "Ressources et analyses sur le référencement génératif et la présence dans les index RAG de ChatGPT, Perplexity et Gemini.",
    url: "https://answerpress.io/guides",
    type: "website",
    locale: "fr_FR",
  },
};

const DATE_FMT = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function GuidesPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides & Analyses GEO — Référencement sur l'Intelligence Artificielle",
    url: "https://answerpress.io/guides",
    description:
      "Guides pratiques sur le GEO : être cité par ChatGPT et Perplexity, mesurer sa part de voix IA, SEO vs GEO, coûts.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: GUIDES.map((g, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://answerpress.io/guides/${g.slug}`,
        name: g.title,
      })),
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".press-title", ".press-eyebrow", "article p"],
    },
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
        name: "Guides & Analyses GEO",
        item: "https://answerpress.io/guides",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <div className="pt-12 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fil d'Ariane visuel */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-graphite mb-6">
          <Link href="/" className="hover:text-press transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone/60" />
          <span className="text-stone">Guides GEO</span>
        </nav>

        <p className="press-eyebrow">Guides &amp; analyses</p>
        <h1 className="press-title mt-4 text-3xl sm:text-5xl leading-tight">
          Comprendre les moteurs génératifs,
          <br />
          et en faire un levier d&apos;acquisition.
        </h1>
        <p className="mt-4 text-graphite max-w-2xl text-base">
          Méthodologie GEO, mesure de la part de voix IA, budgets et comparaisons SEO/GEO : les
          ressources rédigées par notre équipe pour les directions marketing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {GUIDES.map((guide) => (
            <article key={guide.slug} className="border-t border-ink/20 pt-6">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em]">
                <span className="text-press">{guide.category}</span>
                <span className="text-stone flex items-center gap-1">
                  <Clock className="w-3 h-3 text-stone/70" />
                  <time dateTime={guide.date}>
                    {DATE_FMT.format(new Date(guide.date))}
                  </time>
                  <span>— {guide.readingMinutes} min</span>
                </span>
              </div>

              <h2 className="press-title text-2xl mt-3">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="hover:text-press transition-colors"
                >
                  {guide.title}
                </Link>
              </h2>

              <p className="mt-3 text-[13px] text-graphite leading-relaxed">{guide.excerpt}</p>

              <Link
                href={`/guides/${guide.slug}`}
                className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-press hover:underline"
              >
                Lire le guide &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
