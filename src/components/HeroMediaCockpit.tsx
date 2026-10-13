"use client";

import React, { useState } from "react";
import { Bot, Cpu, Utensils, Home } from "lucide-react";

interface Scenario {
  id: string;
  tabLabel: string;
  tabIcon: React.ElementType;
  mediaName: string;
  mediaImage: string;
  prompt: string;
  engine: string;
  brandRecommendation: string;
  citations: { label: string; badge: string }[];
  evidence: string;
  sovlift: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "tech",
    tabLabel: "Tech & Maison",
    tabIcon: Cpu,
    mediaName: "Les Numériques",
    mediaImage: "/media/publishers/les-numeriques.png",
    prompt: "« Quel aspirateur robot choisir avec des animaux en 2026 ? »",
    engine: "ChatGPT & Perplexity",
    brandRecommendation: "Votre Produit — Recommandé en 1er choix",
    citations: [
      { label: "Les Numériques", badge: "Score labo 5/5" },
      { label: "Banc d'essai officiel", badge: "Test indépendant vérifié" },
    ],
    evidence:
      "« Selon le banc d'essai indépendant des Numériques, ce modèle surpasse tous ses rivaux sur l'aspiration des poils et le silence en fonctionnement. »",
    sovlift: "94 %",
  },
  {
    id: "food",
    tabLabel: "Cuisine & Food",
    tabIcon: Utensils,
    mediaName: "Marmiton",
    mediaImage: "/media/publishers/marmiton.png",
    prompt: "« Quelle friteuse sans huile (airfryer) a le meilleur rapport qualité/prix ? »",
    engine: "ChatGPT & Google AI",
    brandRecommendation: "Votre Produit — Coup de cœur de la rédaction",
    citations: [
      { label: "Marmiton", badge: "N°1 du guide d'achat 2026" },
      { label: "Avis communauté", badge: "4,9/5 sur 3 200 avis" },
    ],
    evidence:
      "« Testé et approuvé par la rédaction Marmiton : cuisson croustillante sans huile et nettoyage express au lave-vaisselle. »",
    sovlift: "92 %",
  },
  {
    id: "maison",
    tabLabel: "Rénovation & Énergie",
    tabIcon: Home,
    mediaName: "Maison & Travaux",
    mediaImage: "/media/publishers/maison-travaux.png",
    prompt: "« Quelle pompe à chaleur installer pour réduire sa facture de 40 % ? »",
    engine: "Perplexity & Copilot",
    brandRecommendation: "Votre Marque — Recommandée pour les aides MaPrimeRénov",
    citations: [
      { label: "Maison & Travaux", badge: "Dossier référence confort" },
      { label: "Banc d'essai artisans", badge: "Note maximale fiabilité" },
    ],
    evidence:
      "« Validé par l'enquête d'experts Maison & Travaux : rendement énergétique supérieur et retour sur investissement le plus rapide du marché. »",
    sovlift: "88 %",
  },
];

export function HeroMediaCockpit() {
  const [activeTab, setActiveTab] = useState<string>("tech");
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="press-card p-6 sm:p-7 text-left shadow-[0_18px_50px_-24px_rgba(23,24,29,0.35)]">
      {/* Onglets */}
      <div className="flex gap-6 border-b border-ink/15">
        {SCENARIOS.map((sc) => {
          const Icon = sc.tabIcon;
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveTab(sc.id)}
              className={`flex items-center gap-1.5 pb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] border-b-2 -mb-px transition-colors cursor-pointer ${
                isActive
                  ? "border-press text-press"
                  : "border-transparent text-stone hover:text-ink"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sc.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Photo du titre */}
      <div className="relative h-32 w-full overflow-hidden border border-ink/15 mt-5">
        <img
          src={current.mediaImage}
          alt={current.mediaName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <p className="absolute bottom-2.5 left-3 text-white text-[11px] font-semibold uppercase tracking-[0.12em]">
          {current.mediaName}
        </p>
      </div>

      {/* Prompt acheteur */}
      <div className="mt-5 border-l-2 border-press pl-4">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone">
          <Bot className="w-3.5 h-3.5 text-press" />
          <span>Question posée à l&apos;IA &bull; {current.engine}</span>
        </div>
        <p className="mt-1.5 press-kicker text-sm text-ink">{current.prompt}</p>
      </div>

      {/* Réponse générative */}
      <div className="mt-5 pt-5 border-t border-ink/15">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">{current.brandRecommendation}</p>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-press bg-red-50 border border-red-200 px-2 py-0.5">
            Cité en N°1
          </span>
        </div>

        <div className="mt-3 space-y-1.5">
          {current.citations.map((c, idx) => (
            <p key={idx} className="text-xs text-graphite flex items-center gap-1.5">
              <span className="press-num text-press font-bold">[{idx + 1}]</span>{" "}
              <strong className="text-ink">{c.label}</strong> &mdash; <span>{c.badge}</span>
            </p>
          ))}
        </div>

        <p className="fig-caption mt-3 !text-graphite leading-relaxed text-xs sm:text-sm bg-slate-50 p-3 border-l-2 border-ink/20">
          {current.evidence}
        </p>
      </div>

      {/* Taux de recommandation */}
      <div className="mt-5 pt-4 border-t border-ink/15 flex items-baseline justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone">
          Taux de recommandation
        </span>
        <span className="press-num text-xl text-press">
          {current.sovlift} <span className="text-xs text-stone font-normal">des réponses</span>
        </span>
      </div>
    </div>
  );
}
