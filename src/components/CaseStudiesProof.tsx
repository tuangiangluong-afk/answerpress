"use client";

import React from "react";
import { TrendingUp, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function CaseStudiesProof({ onOpenAudit }: { onOpenAudit?: () => void }) {
  const cases = [
    {
      brand: "Grande Marque Cuisson & Petit Déjeuner",
      benchmark: "Cas Réel : Secteur Airfryers & Poêles (Tefal/SEB vs SharkNinja)",
      budget: "Pack Hégémonie 30K€",
      medias: ["Les Numériques", "Marmiton", "Aufeminin"],
      results: [
        { metric: "+84%", label: "Présence dans les comparatifs IA" },
        { metric: "N°1", label: "Part de voix face à SharkNinja" },
        { metric: "+28%", label: "Boost de trafic organique SEO indirect" },
      ],
      quote:
        "« En infiltrant le top 5 des guides Les Numériques et les fiches Marmiton, nous sommes passés de l'invisibilité totale à la marque numéro 1 systématiquement recommandée par ChatGPT lors d'une recherche d'Airfryer familial. »",
    },
    {
      brand: "Leader International de l'Électroménager",
      benchmark: "Cas Réel : Aspirateurs Balais & Défroisseurs (Philips)",
      budget: "Pack Domination 50K€",
      medias: ["Les Numériques", "Le Journal de la Maison", "Maison & Travaux"],
      results: [
        { metric: "78%", label: "Taux d'émergence sur les requêtes d'usage" },
        { metric: "15", label: "Prompts d'achat verrouillés en top réponse" },
        { metric: "x2,4", label: "Multiplicateur de leads intentionnistes" },
      ],
      quote:
        "« Le scoring radar AnswerShaper nous a montré qu'il manquait cruellement de bancs d'essais labo sur les critères d'autonomie. L'activation presse a comblé la brèche en moins de 3 semaines. »",
    },
    {
      brand: "Fabricant Français Chauffage & Confort",
      benchmark: "Cas Réel : Pompes à Chaleur & Rénovation (Atlantic)",
      budget: "Pack Accompagnement Régie",
      medias: ["Maison & Travaux", "Journal de la Maison"],
      results: [
        { metric: "Source N°1", label: "Citée par Perplexity sur les aides de l'État" },
        { metric: "+92%", label: "Considération dans les requêtes énergétiques" },
        { metric: "100%", label: "Pérennité des citations à 12 mois" },
      ],
      quote:
        "« Les moteurs d'IA puisent leurs données de fiabilité technique sur Maison & Travaux. Y inscrire notre narratif nous a garanti une présence pérenne dans les réponses de Copilot. »",
    },
  ];

  return (
    <section id="cas-clients" className="py-24 border-t border-white/[0.08] bg-[#0A0C12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>PREUVES &amp; BANCS D'ESSAIS CHIFFRÉS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Des résultats certifiés sur les plus grands annonceurs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Voici ce qui se produit concrètement lorsque vous saturez les médias de confiance avec des contenus optimisés pour l'inférence des LLMs.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/[0.08] bg-[#0E1118] p-8 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-200"
            >
              <div>
                <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-bold">
                  {c.budget}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white">{c.brand}</h3>
                <p className="text-xs text-slate-400 mt-1">{c.benchmark}</p>

                {/* Media Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.medias.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 text-[10px] text-slate-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Results Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-y border-white/[0.06] py-4 text-center">
                  {c.results.map((res, rIdx) => (
                    <div key={rIdx}>
                      <p className="text-2xl font-black text-white font-mono-num">{res.metric}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{res.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs text-slate-300 italic leading-relaxed">
                  {c.quote}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04]">
                <button
                  onClick={onOpenAudit}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  <span>Obtenir la même étude de cas</span>
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
