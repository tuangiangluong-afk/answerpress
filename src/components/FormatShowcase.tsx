"use client";

import React from "react";
import { Layers, FileText, CheckCircle, Database, HelpCircle, Award, BarChart2 } from "lucide-react";

export default function FormatShowcase() {
  const formats = [
    {
      icon: Database,
      name: "1. L'Infiltration de Guides Existants",
      badge: "Format N°1 en ROI",
      desc: "Nous mettons à jour un article pilier existant (ex: 'Les meilleurs Airfryers 2026') déjà crawlé par GPTBot plusieurs fois par jour. Votre produit y est inséré dans le top 3 sans attendre des semaines d'indexation.",
      power: "Indexation sous 48h chrono",
    },
    {
      icon: FileText,
      name: "2. L'Article GEO Natif RAG",
      badge: "Autorité Éditoriale",
      desc: "Rédigé par des journalistes experts selon les critères d'extraction sémantique des LLMs (structure en chunks, micro-résumés, données techniques chiffrées).",
      power: "Sature les requêtes longues traînes",
    },
    {
      icon: BarChart2,
      name: "3. Le Tableau Top Position",
      badge: "Capture des Prix",
      desc: "Les modèles d'IA générative adorent ingérer les matrices comparatives. Votre produit est placé en haut du tableau avec son lien marchand affilié ou direct.",
      power: "Indispensable pour Perplexity & Copilot",
    },
    {
      icon: Award,
      name: "4. Le Banc d'Essai Labo",
      badge: "Caution Scientifique",
      desc: "Mesures objectives, protocole de test rigoureux et notation indépendante. L'IA a besoin de critères vérifiables pour justifier sa recommandation.",
      power: "Élimine les doutes sur la qualité",
    },
    {
      icon: HelpCircle,
      name: "5. La FAQ Conversationnelle",
      badge: "Réassurance Achat",
      desc: "Alimente directement le robot sur les questions d'arbitrage : 'Quels sont les défauts ? Est-ce facile à nettoyer ? Quel est le SAV ?'.",
      power: "Contrecarre les attaques concurrentes",
    },
    {
      icon: Layers,
      name: "6. Le Label & Prix Éditorial",
      badge: "Trust Absolu",
      desc: "L'attribution d'une distinction officielle (ex: 'Lauréat Maison & Travaux' ou 'Recommandé par Les Numériques'). Un trust signal irréfutable pour le modèle.",
      power: "Ancrage durable dans les poids du modèle",
    },
  ];

  return (
    <section className="py-24 border-t border-white/[0.08] bg-[#08090C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>LES 6 FORMATS RECONNUS PAR LES CRAWLERS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Un arsenal éditorial conçu pour être aspiré par l'IA.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Les LLMs ne lisent pas le web comme des humains. Ils recherchent des structures 
            de données précises, des consensus d'experts et des comparatifs factuels.
          </p>
        </div>

        {/* Grid of formats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formats.map((fmt, idx) => {
            const Icon = fmt.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#0E1118] p-6 hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="rounded-full bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                      {fmt.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">{fmt.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {fmt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono text-emerald-400 font-semibold">
                    ⚡ {fmt.power}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
