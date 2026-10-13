"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesProof({ onOpenAudit }: { onOpenAudit?: () => void }) {
  const cases = [
    {
      brand: "Grande marque cuisson & petit-déjeuner",
      benchmark: "Airfryers & poêles — Tefal/SEB vs SharkNinja",
      image: "/media/decks/tefal-deck-1.png",
      results: [
        { metric: "+84 %", label: "Présence dans les comparatifs IA" },
        { metric: "N°1", label: "Part de voix face à SharkNinja" },
        { metric: "+28 %", label: "Trafic organique indirect" },
      ],
      quote:
        "« En infiltrant le top 5 des guides Les Numériques et les fiches Marmiton, nous sommes passés de l'invisibilité totale à la marque numéro 1 recommandée par ChatGPT sur l'Airfryer familial. »",
      author: "Directeur Marketing, Groupe Seb",
    },
    {
      brand: "Leader international de l'électroménager",
      benchmark: "Aspirateurs balais & défroisseurs — Philips",
      image: "/media/decks/les-numeriques-deck-2.png",
      results: [
        { metric: "78 %", label: "Taux d'émergence requêtes d'usage" },
        { metric: "15", label: "Prompts d'achat verrouillés en top 1" },
        { metric: "x2,4", label: "Leads intentionnistes" },
      ],
      quote:
        "« Le scoring radar nous a montré qu'il manquait des bancs d'essai labo sur l'autonomie. L'activation presse a comblé la brèche en moins de trois semaines. »",
      author: "Head of Growth & Digital, Philips",
    },
    {
      brand: "Fabricant français chauffage & confort",
      benchmark: "Pompes à chaleur & rénovation — Atlantic",
      image: "/media/atlantic/image30.png",
      results: [
        { metric: "N°1", label: "Source citée par Perplexity sur les aides" },
        { metric: "+92 %", label: "Considération requêtes PAC" },
        { metric: "100 %", label: "Citations pérennes à 12 mois" },
      ],
      quote:
        "« Les moteurs d'IA puisent leurs données de fiabilité technique sur Maison & Travaux. Y inscrire notre narratif garantit une présence pérenne dans les réponses de Copilot. »",
      author: "VP E-Commerce & Notoriété, Atlantic",
    },
  ];

  return (
    <section id="cas-clients" className="py-20 sm:py-24 bg-paper border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="press-eyebrow">Études de cas</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            Des résultats certifiés sur
            <br />
            les plus grands annonceurs.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
          {cases.map((c) => (
            <article key={c.brand} className="flex flex-col">
              <div className="h-48 w-full overflow-hidden border border-ink/15 bg-ink">
                <img
                  src={c.image}
                  alt={c.brand}
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-press">
                {c.benchmark}
              </p>
              <h3 className="press-title text-xl mt-1.5">{c.brand}</h3>

              <div className="mt-5 grid grid-cols-3 border-y border-ink/15 divide-x divide-ink/10">
                {c.results.map((res) => (
                  <div key={res.label} className="py-3.5 px-2 first:pl-0 last:pr-0">
                    <p className="press-num text-xl text-ink leading-none">{res.metric}</p>
                    <p className="mt-1.5 text-[9.5px] text-stone leading-tight">{res.label}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-5 press-kicker text-[13px] text-ink leading-relaxed flex-1">
                {c.quote}
              </blockquote>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone">
                {c.author}
              </p>

              <button onClick={onOpenAudit} className="mt-6 w-full btn-press btn-press-outline !py-2.5">
                <span>Répliquer ce dispositif</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
