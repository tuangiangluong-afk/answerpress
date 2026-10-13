"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Comment faire pour que ChatGPT cite ma marque ou mon produit ?",
    answer:
      "ChatGPT, Perplexity et Gemini ne citent presque jamais les sites de marque : ils s'appuient sur les médias indépendants qu'ils crawlent (guides d'achat, bancs d'essai, tableaux comparatifs). Pour être cité, votre produit doit apparaître dans ces sources tierces avec des données vérifiables. C'est exactement ce que fait AnswerPress.",
  },
  {
    question: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
    answer:
      "Le GEO est l'optimisation de la visibilité d'une marque dans les réponses des moteurs génératifs (ChatGPT, Perplexity, Gemini, Copilot). Là où le SEO vise la position sur Google, le GEO vise la citation dans la réponse de l'IA : présence dans les sources RAG, cohérence des entités, preuves chiffrées, réponses aux questions d'arbitrage.",
  },
  {
    question: "Quelle est la différence entre SEO et GEO ?",
    answer:
      "Le SEO optimise un classement de liens bleus ; le GEO optimise une citation dans une synthèse rédigée par une IA. Le GEO privilégie les sources tierces à fort trust score, les données structurées et les comparatifs chiffrés. Un bon GEO renforce le SEO classique, mais l'inverse n'est pas vrai.",
  },
  {
    question: "Combien coûte une stratégie de citations IA ?",
    answer:
      "Les packages démarrent à 4 900 € HT (Infiltration & Fast Citation sur un produit héros), 14 900 € HT pour saturer une verticale complète, et 39 000 € HT pour un dispositif cross-médias de domination. Production éditoriale, diffusion sur des médias majeurs et monitoring des citations inclus.",
  },
  {
    question: "Comment mesurer la visibilité de ma marque sur les IA ?",
    answer:
      "Avec la part de voix IA : sur un panel de prompts d'achat réels de votre catégorie, on mesure la fréquence et le rang de citation de votre marque chez ChatGPT, Perplexity, Gemini et Copilot, face à vos concurrents. AnswerShaper fournit ce score en base et le suit mois par mois.",
  },
  {
    question: "Le netlinking traditionnel suffit-il pour être cité par les IA ?",
    answer:
      "Non. Les moteurs génératifs ne comptent pas les liens, ils pondèrent la fiabilité de la source et la précision des données. Un backlink sur un annuaire n'a quasiment aucun effet, tandis qu'un banc d'essai chiffré sur un média comme Les Numériques peut verrouiller la recommandation sur une catégorie entière.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

interface FaqSectionProps {
  onOpenAudit?: () => void;
}

export default function FaqSection({ onOpenAudit }: FaqSectionProps) {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-ink/15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="press-eyebrow">Questions fréquentes</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            Ce que se demandent
            <br />
            les directions marketing.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl">
          {faqItems.map((item) => (
            <div key={item.question} className="border-t border-ink/20 pt-5">
              <h3 className="press-title text-lg leading-snug">{item.question}</h3>
              <p className="mt-3 text-[13px] text-graphite leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        {onOpenAudit && (
          <div className="mt-14 border-t border-ink/20 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="press-title text-lg">
              Une question sur votre cas précis ? Mesurons votre Indice de Citation IA.
            </p>
            <button onClick={onOpenAudit} className="btn-press btn-press-red">
              <span>Lancer mon audit gratuit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
