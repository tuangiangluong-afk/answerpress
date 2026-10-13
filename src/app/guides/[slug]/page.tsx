import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    title: `${guide.title} | AnswerPress`,
    description: guide.excerpt,
    alternates: { canonical: `https://answerpress.io/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
      locale: "fr_FR",
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.date,
    dateModified: guide.date,
    inLanguage: "fr",
    author: { "@type": "Organization", name: "AnswerPress Intelligence" },
    publisher: {
      "@type": "Organization",
      name: "AnswerPress",
      url: "https://answerpress.io",
    },
    mainEntityOfPage: `https://answerpress.io/guides/${guide.slug}`,
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <p className="press-eyebrow">{guide.category}</p>

        <h1 className="press-title mt-5 text-3xl sm:text-5xl">{guide.title}</h1>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone">
          {DATE_FMT.format(new Date(guide.date))} — Lecture {guide.readingMinutes} min
        </p>

        <hr className="press-rule-double mt-8" />

        <p className="mt-8 text-lg text-ink leading-relaxed">{guide.intro}</p>

        {guide.sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="press-title text-xl sm:text-2xl">{section.title}</h2>
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

        <div className="mt-12 border-l-4 border-press bg-paper p-6">
          <p className="press-title text-base">En résumé</p>
          <p className="mt-2 text-[15px] text-graphite leading-relaxed">{guide.conclusion}</p>
        </div>

        <div className="mt-12 border-t border-ink/20 pt-8">
          <p className="press-title text-xl">
            Mesurez votre Indice de Citation IA en 30 secondes.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link href="/#diagnostic" className="btn-press btn-press-red">
              Lancer mon audit gratuit
            </Link>
            <Link href="/guides" className="btn-press btn-press-outline">
              Tous les guides
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
