import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Clock, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GUIDES, getGuide } from "@/lib/guides";

const DATE_FMT = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return {
    title: `${guide.title} | AnswerPress — Autorité Média & GEO`,
    description: guide.excerpt,
    alternates: { canonical: `https://answerpress.io/guides/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | AnswerPress`,
      description: guide.excerpt,
      type: "article",
      locale: "fr_FR",
      url: `https://answerpress.io/guides/${guide.slug}`,
      publishedTime: `${guide.date}T08:00:00+02:00`,
      modifiedTime: "2026-10-13T17:00:00+02:00",
      authors: ["AnswerPress Intelligence"],
      images: [
        {
          url: "https://answerpress.io/apple-icon.png",
          width: 512,
          height: 512,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.excerpt,
      images: ["https://answerpress.io/apple-icon.png"],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  // Related guides for internal linking
  const relatedGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 2);

  // Article schema with full Google & AEO requirements
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guide.title,
    description: guide.excerpt,
    image: [
      "https://answerpress.io/apple-icon.png",
      "https://answerpress.io/favicon.svg",
    ],
    datePublished: `${guide.date}T08:00:00+02:00`,
    dateModified: "2026-10-13T17:00:00+02:00",
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: "AnswerPress Intelligence",
      url: "https://answerpress.io",
      logo: {
        "@type": "ImageObject",
        url: "https://answerpress.io/apple-icon.png",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "AnswerPress",
      url: "https://answerpress.io",
      logo: {
        "@type": "ImageObject",
        url: "https://answerpress.io/apple-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://answerpress.io/guides/${guide.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".press-title",
        "#reponse-courte",
        ".guide-intro",
        ".press-eyebrow",
        ".speakable-summary",
      ],
    },
  };

  // Breadcrumb schema
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
        name: "Guides & Méthodes GEO",
        item: "https://answerpress.io/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `https://answerpress.io/guides/${guide.slug}`,
      },
    ],
  };

  // HowTo schema for procedural guides
  let howToJsonLd: any = null;
  if (guide.slug === "etre-cite-par-chatgpt") {
    howToJsonLd = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Comment être cité par ChatGPT, Perplexity et Gemini : protocole 2026",
      description: "Méthode en 4 étapes pour faire entrer votre produit dans les sources RAG et verrouiller la recommandation d'achat sur les LLMs.",
      totalTime: "P10D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Identifier les sources consultées par les index RAG",
          text: "Cibler les médias indépendants d'autorité (Les Numériques, Marmiton, Maison & Travaux) que GPTBot et PerplexityBot consultent prioritairement.",
          url: "https://answerpress.io/guides/etre-cite-par-chatgpt#step-1",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Valider les 4 conditions simultanées de citation",
          text: "Garantir la présence dans une source tierce, des données de mesure vérifiables, la cohérence d'entité et la fraîcheur du crawl.",
          url: "https://answerpress.io/guides/etre-cite-par-chatgpt#step-2",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Infiltrer les guides existants et FAQ d'arbitrage",
          text: "Intégrer le Top 3 d'un comparatif existant déjà indexé et publier des réponses conversationnelles aux questions d'arbitrage (fiabilité, défauts, SAV).",
          url: "https://answerpress.io/guides/etre-cite-par-chatgpt#step-3",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Mesurer et pérenniser la part de voix IA",
          text: "Interroger mensuellement ChatGPT et Perplexity sur un panel de 10 à 25 prompts d'achat pour suivre la fréquence et le rang de recommandation.",
          url: "https://answerpress.io/guides/etre-cite-par-chatgpt#step-4",
        },
      ],
    };
  } else if (guide.slug === "part-de-voix-ia") {
    howToJsonLd = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Mesurer sa part de voix sur ChatGPT et les IA en 4 étapes",
      description: "Protocole mensuel pour mesurer et piloter la visibilité d'une marque face à ses concurrents dans les réponses des moteurs génératifs.",
      totalTime: "P1D",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Constituer le panel de prompts d'achat",
          text: "Sélectionner 10 à 25 requêtes d'achat réelles (catégorie, duels de marques, arbitrage de fiabilité).",
          url: "https://answerpress.io/guides/part-de-voix-ia#step-1",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Interroger les moteurs dans des conditions constantes",
          text: "Tester chaque prompt une fois par mois sur ChatGPT, Perplexity, Gemini et Copilot sans historique de conversation.",
          url: "https://answerpress.io/guides/part-de-voix-ia#step-2",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Calculer la part de voix (Share of Model)",
          text: "Calculer le pourcentage de réponses citant votre marque, pondéré par le rang d'apparition face aux rivaux.",
          url: "https://answerpress.io/guides/part-de-voix-ia#step-3",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Relier la part de voix aux conversions business",
          text: "Croiser la progression des citations IA avec les demandes de devis et les ventes pour piloter le ROI.",
          url: "https://answerpress.io/guides/part-de-voix-ia#step-4",
        },
      ],
    };
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Structured Data: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Structured Data: HowTo (if applicable) */}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}

      <Header />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Breadcrumb visuel */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs text-graphite mb-6">
          <Link href="/" className="hover:text-press transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone/60" />
          <Link href="/guides" className="hover:text-press transition-colors">Guides GEO</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone/60" />
          <span className="text-stone truncate max-w-[200px] sm:max-w-xs">{guide.category}</span>
        </nav>

        <p className="press-eyebrow">{guide.category}</p>

        <h1 className="press-title mt-4 text-3xl sm:text-5xl leading-tight">{guide.title}</h1>

        <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone">
          <Clock className="w-3.5 h-3.5 text-press" />
          <time dateTime={guide.date}>
            {DATE_FMT.format(new Date(guide.date))}
          </time>
          <span>&bull;</span>
          <span>Lecture {guide.readingMinutes} min</span>
          <span>&bull;</span>
          <span className="text-press">Par AnswerPress Intelligence</span>
        </div>

        <hr className="press-rule-double mt-7" />

        {/* Introduction */}
        <p className="guide-intro mt-7 text-lg text-ink leading-relaxed font-normal">
          {guide.intro}
        </p>

        {/* Direct Answer Card & Speakable Chunk for Google AI Overviews */}
        <div
          id="reponse-courte"
          className="speakable-summary mt-6 p-5 border-l-4 border-press bg-neutral-50 border border-ink/10"
        >
          <p className="text-[11px] font-mono uppercase tracking-wider text-press font-semibold mb-1.5">
            Synthèse Extractible pour Moteurs IA &amp; Comex
          </p>
          <p className="text-sm font-medium text-ink leading-relaxed">
            {guide.excerpt}
          </p>
        </div>

        {/* Sections de contenu */}
        {guide.sections.map((section, idx) => (
          <section key={section.title} id={`step-${idx + 1}`} className="mt-10">
            <h2 className="press-title text-xl sm:text-2xl text-ink">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-[15px] text-graphite leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-2.5">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-graphite leading-relaxed">
                    <span className="press-num text-press text-xs mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Résumé / Conclusion */}
        <div className="mt-12 border-l-4 border-press bg-paper p-6">
          <p className="press-title text-base">En résumé</p>
          <p className="mt-2 text-[15px] text-graphite leading-relaxed">{guide.conclusion}</p>
        </div>

        {/* Maillage interne vers les solutions & médias */}
        <div className="mt-12 p-6 border border-ink/15 bg-neutral-50/70">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone">Ressources &amp; Solutions Associées</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <Link href="/medias" className="px-3 py-1.5 bg-white border border-ink/15 hover:border-ink hover:text-press transition-colors">
              Catalogue 12 Médias Partenaires
            </Link>
            <Link href="/methodologie" className="px-3 py-1.5 bg-white border border-ink/15 hover:border-ink hover:text-press transition-colors">
              Méthodologie RAG &amp; Équation GEO
            </Link>
            <Link href="/tarifs" className="px-3 py-1.5 bg-white border border-ink/15 hover:border-ink hover:text-press transition-colors">
              Packs d&apos;Activation dès 4 900 €
            </Link>
            <Link href="/cas-clients" className="px-3 py-1.5 bg-white border border-ink/15 hover:border-ink hover:text-press transition-colors">
              Cas Clients Tefal &amp; Philips
            </Link>
          </div>
        </div>

        {/* Bloc CTA Diagnostic */}
        <div className="mt-10 border-t border-ink/20 pt-8">
          <p className="press-title text-xl sm:text-2xl">
            Mesurez votre Indice de Citation IA en 30 secondes.
          </p>
          <p className="mt-2 text-sm text-graphite">
            Découvrez si votre marque est recommandée face à vos 2 principaux concurrents sur ChatGPT et Perplexity.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link href="/#diagnostic" className="btn-press btn-press-red text-center">
              Lancer mon diagnostic gratuit
            </Link>
            <Link href="/guides" className="btn-press btn-press-outline text-center">
              Tous les guides GEO
            </Link>
          </div>
        </div>

        {/* Maillage interne : Guides Recommandés */}
        {relatedGuides.length > 0 && (
          <div className="mt-16 pt-10 border-t border-ink/15">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-press" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone">
                Sur le même sujet
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedGuides.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/guides/${rel.slug}`}
                  className="group block p-5 border border-ink/15 hover:border-ink transition-all bg-white"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-press">
                    {rel.category}
                  </p>
                  <h4 className="press-title text-base mt-2 group-hover:text-press transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs text-graphite line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ink group-hover:text-press">
                    Lire le guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}
