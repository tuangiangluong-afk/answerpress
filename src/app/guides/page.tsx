import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides & Analyses — Être cité par les IA, mesurer sa part de voix | AnswerPress",
  description:
    "Guides pratiques sur le GEO (Generative Engine Optimization) : être cité par ChatGPT et Perplexity, mesurer sa part de voix IA, comprendre la différence entre SEO et GEO, budgéter une stratégie de citations IA.",
  alternates: { canonical: "https://answerpress.io/guides" },
};

const DATE_FMT = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-16 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="press-eyebrow">Guides &amp; analyses</p>
        <h1 className="press-title mt-5 text-3xl sm:text-5xl">
          Comprendre les moteurs génératifs,
          <br />
          et en faire un levier d&apos;acquisition.
        </h1>
        <p className="mt-4 text-graphite max-w-2xl">
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
                <span className="text-stone">
                  {DATE_FMT.format(new Date(guide.date))} — {guide.readingMinutes} min
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
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink hover:text-press border-b border-ink/30 hover:border-press pb-0.5 transition-colors"
              >
                Lire le guide
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
