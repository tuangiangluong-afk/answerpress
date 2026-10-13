"use client";

import React from "react";
import { Layers, FileText, Database, HelpCircle, Award, BarChart2, CheckCircle2, ArrowRight } from "lucide-react";

export default function FormatShowcase() {
  const formats = [
    {
      icon: Database,
      name: "1. L'Infiltration de Guides Existants",
      badge: "Format N°1 en ROI",
      image: "/media/decks/tefal-deck-1.png",
      desc: "Nous mettons à jour un article pilier existant (ex: 'Les meilleurs Airfryers 2026') déjà crawlé par GPTBot plusieurs fois par jour. Votre produit y est inséré dans le top 3 sans attendre des semaines d'indexation.",
      power: "Indexation sous 48h chrono",
      tag: "Vitesse d'ingestion maximale",
    },
    {
      icon: FileText,
      name: "2. L'Article GEO Natif RAG",
      badge: "Autorité Éditoriale",
      image: "/media/tefal/image57.png",
      desc: "Rédigé par des journalistes experts selon les critères d'extraction sémantique des LLMs (structure en chunks, micro-résumés, données techniques chiffrées).",
      power: "Sature les requêtes longues traînes",
      tag: "Chunking sémantique optimisé",
    },
    {
      icon: BarChart2,
      name: "3. Le Tableau Top Position",
      badge: "Capture des Prix",
      image: "/media/tefal/image59.png",
      desc: "Les modèles d'IA générative adorent ingérer les matrices comparatives. Votre produit est placé en haut du tableau avec son lien marchand affilié ou direct.",
      power: "Indispensable pour Perplexity & Copilot",
      tag: "Matrice de comparaison directe",
    },
    {
      icon: Award,
      name: "4. Le Banc d'Essai Labo",
      badge: "Caution Scientifique",
      image: "/media/decks/les-numeriques-deck-2.png",
      desc: "Mesures objectives, protocole de test rigoureux et notation indépendante. L'IA a besoin de critères vérifiables pour justifier sa recommandation.",
      power: "Élimine les doutes sur la qualité",
      tag: "Mesures et bancs d'essai 5/5",
    },
    {
      icon: HelpCircle,
      name: "5. La FAQ Conversationnelle",
      badge: "Réassurance Achat",
      image: "/media/decks/prime-days-2.png",
      desc: "Alimente directement le robot sur les questions d'arbitrage : 'Quels sont les défauts ? Est-ce facile à nettoyer ? Quel est le SAV ?'.",
      power: "Contrecarre les attaques concurrentes",
      tag: "Follow-up questions ciblées",
    },
    {
      icon: Layers,
      name: "6. Le Label & Prix Éditorial",
      badge: "Trust Absolu",
      image: "/media/decks/prime-days-3.png",
      desc: "L'attribution d'une distinction officielle (ex: 'Lauréat Maison & Travaux' ou 'Recommandé par Les Numériques'). Un trust signal irréfutable pour le modèle.",
      power: "Ancrage durable dans les poids du modèle",
      tag: "Caution officielle de presse",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>LES 6 FORMATS RECONNUS PAR LES CRAWLERS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
            Un arsenal éditorial conçu pour être aspiré par l'IA.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Les LLMs ne lisent pas le web comme des humains. Ils recherchent des structures de données précises, des consensus d'experts et des comparatifs factuels.
          </p>
        </div>

        {/* Bento Grid of Formats with Real Visual Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formats.map((fmt, idx) => {
            const Icon = fmt.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl border border-neutral-200 bg-[#FAFAF9] overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Visual Proof Header */}
                  <div className="relative h-36 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={fmt.image}
                      alt={fmt.name}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-blue-600 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="rounded-full bg-blue-600/90 backdrop-blur-md text-white px-2.5 py-0.5 text-[10px] font-semibold">
                        {fmt.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-neutral-300">
                      {fmt.tag}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-base font-bold text-neutral-900">{fmt.name}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[56px]">
                      {fmt.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Pill Power */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-[11px] font-mono font-semibold border border-emerald-200">
                      ⚡ {fmt.power}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
