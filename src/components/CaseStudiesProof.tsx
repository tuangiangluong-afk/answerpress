"use client";

import React from "react";
import { Award, ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function CaseStudiesProof({ onOpenAudit }: { onOpenAudit?: () => void }) {
  const cases = [
    {
      brand: "Grande Marque Cuisson & Petit Déjeuner",
      benchmark: "Cas Réel : Secteur Airfryers & Poêles (Tefal/SEB vs SharkNinja)",
      budget: "Pack Hégémonie 30K€",
      image: "/media/decks/tefal-deck-1.png",
      medias: ["Les Numériques", "Marmiton", "Aufeminin"],
      results: [
        { metric: "+84%", label: "Présence dans les comparatifs IA" },
        { metric: "N°1", label: "Part de voix face à SharkNinja" },
        { metric: "+28%", label: "Boost de trafic organique indirect" },
      ],
      quote:
        "« En infiltrant le top 5 des guides Les Numériques et les fiches Marmiton, nous sommes passés de l'invisibilité totale à la marque numéro 1 systématiquement recommandée par ChatGPT lors d'une recherche d'Airfryer familial. »",
      author: "Directeur Marketing Groupe Seb",
    },
    {
      brand: "Leader International de l'Électroménager",
      benchmark: "Cas Réel : Aspirateurs Balais & Défroisseurs (Philips)",
      budget: "Pack Domination 50K€",
      image: "/media/decks/les-numeriques-deck-2.png",
      medias: ["Les Numériques", "Le Journal de la Maison", "Maison & Travaux"],
      results: [
        { metric: "78%", label: "Taux d'émergence requêtes d'usage" },
        { metric: "15", label: "Prompts d'achat verrouillés en top 1" },
        { metric: "x2,4", label: "Multiplicateur de leads intentionnistes" },
      ],
      quote:
        "« Le scoring radar AnswerShaper nous a montré qu'il manquait cruellement de bancs d'essais labo sur les critères d'autonomie. L'activation presse a comblé la brèche en moins de 3 semaines. »",
      author: "Head of Growth & Digital Philips",
    },
    {
      brand: "Fabricant Français Chauffage & Confort",
      benchmark: "Cas Réel : Pompes à Chaleur & Rénovation (Atlantic)",
      budget: "Pack Accompagnement Régie",
      image: "/media/atlantic/image30.png",
      medias: ["Maison & Travaux", "Journal de la Maison"],
      results: [
        { metric: "Source N°1", label: "Citée par Perplexity sur les aides État" },
        { metric: "+92%", label: "Considération requêtes PAC" },
        { metric: "100%", label: "Pérennité des citations à 12 mois" },
      ],
      quote:
        "« Les moteurs d'IA puisent leurs données de fiabilité technique sur Maison & Travaux. Y inscrire notre narratif nous a garanti une présence pérenne dans les réponses de Copilot. »",
      author: "VP E-Commerce & Notoriété Atlantic",
    },
  ];

  return (
    <section id="cas-clients" className="py-24 bg-[#FAFAF9] border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            <span>PREUVES CONCRÈTES &amp; BANCS D'ESSAIS CHIFFRÉS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-neutral-900">
            Des résultats certifiés sur les plus grands annonceurs.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Voici ce qui se produit concrètement lorsque vous saturez les médias de confiance avec des contenus optimisés pour l'inférence des LLMs.
          </p>
        </div>

        {/* Case Cards Grid with REAL IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Proof Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={c.image}
                    alt={c.brand}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/95 backdrop-blur-md text-neutral-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs">
                      {c.budget}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                    <span className="font-semibold truncate max-w-[80%]">{c.benchmark}</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-neutral-900 leading-snug">{c.brand}</h3>

                  {/* Media Pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.medias.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="rounded-full bg-neutral-100 px-3 py-0.5 text-[10px] text-neutral-700 font-medium border border-neutral-200/60"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Results Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-2 border-y border-neutral-100 py-4 text-center bg-neutral-50/50 rounded-2xl p-2">
                    {c.results.map((res, rIdx) => (
                      <div key={rIdx}>
                        <p className="text-xl sm:text-2xl font-black text-neutral-900 font-mono-num">{res.metric}</p>
                        <p className="text-[10px] text-neutral-500 mt-0.5 leading-tight">{res.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-5 text-xs text-neutral-600 leading-relaxed italic border-l-2 border-blue-500 pl-3">
                    {c.quote}
                  </blockquote>
                  <p className="mt-2 text-[11px] font-mono text-neutral-400 pl-3">
                    — {c.author}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-7 pt-0">
                <button
                  onClick={onOpenAudit}
                  className="w-full rounded-full bg-neutral-900 hover:bg-blue-600 text-white py-3 px-4 text-xs font-bold inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Répliquer ce dispositif pour ma marque</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
