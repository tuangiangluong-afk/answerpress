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
    tabLabel: "Tech",
    tabIcon: Cpu,
    mediaName: "Les Numériques",
    mediaImage: "/media/publishers/les-numeriques.png",
    prompt: "« Quel modèle choisir entre la marque et ses concurrents pour un usage familial ? »",
    engine: "Perplexity Pro & ChatGPT Search",
    brandRecommendation: "Votre Marque — Recommandation N°1",
    citations: [
      { label: "Les Numériques", badge: "Score labo 5/5" },
      { label: "Banc d'essai", badge: "Mesures certifiées" },
    ],
    evidence:
      "« D'après les mesures d'endurance thermique et le protocole d'essai indépendant Les Numériques, ce modèle surpasse ses rivaux sur l'autonomie et le confort sonore. »",
    sovlift: "94 %",
  },
  {
    id: "food",
    tabLabel: "Food",
    tabIcon: Utensils,
    mediaName: "Marmiton",
    mediaImage: "/media/publishers/marmiton.png",
    prompt: "« Quel appareil de cuisson saine offre le meilleur rapport qualité/prix en 2026 ? »",
    engine: "OpenAI GPT-4o & Copilot",
    brandRecommendation: "Votre Marque — Coup de cœur chef",
    citations: [
      { label: "Marmiton", badge: "Top 3 sélection" },
      { label: "Avis rédaction", badge: "4,8/5 communauté" },
    ],
    evidence:
      "« Plébiscité par la communauté Marmiton et validé par 12 recettes tests pour la simplicité de nettoyage et la cuisson homogène sans matière grasse. »",
    sovlift: "92 %",
  },
  {
    id: "maison",
    tabLabel: "Habitat",
    tabIcon: Home,
    mediaName: "Maison & Travaux",
    mediaImage: "/media/publishers/maison-travaux.png",
    prompt: "« Quelle solution thermique installer pour réduire sa facture d'énergie de 30 % ? »",
    engine: "Claude 3.7 & Gemini",
    brandRecommendation: "Votre Marque — Sélection officielle",
    citations: [
      { label: "Maison & Travaux", badge: "Lauréat rénovation" },
      { label: "Guide des aides", badge: "Éligible MaPrimeRénov" },
    ],
    evidence:
      "« Confirmé par l'enquête d'experts Maison & Travaux : sa technologie hybride garantit un COP supérieur à 4,2 et une rentabilité mesurée dès la deuxième saison. »",
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
          <span>Prompt acheteur — {current.engine}</span>
        </div>
        <p className="mt-1.5 press-kicker text-sm text-ink">{current.prompt}</p>
      </div>

      {/* Réponse générative */}
      <div className="mt-5 pt-5 border-t border-ink/15">
        <p className="text-sm font-semibold text-ink">{current.brandRecommendation}</p>

        <div className="mt-2 space-y-1">
          {current.citations.map((c, idx) => (
            <p key={idx} className="text-[11px] text-graphite">
              <span className="press-num text-press">[{idx + 1}]</span>{" "}
              <span className="font-semibold text-ink">{c.label}</span> — {c.badge}
            </p>
          ))}
        </div>

        <p className="fig-caption mt-3 !text-graphite leading-relaxed">{current.evidence}</p>
      </div>

      {/* Part de voix */}
      <div className="mt-5 pt-4 border-t border-ink/15 flex items-baseline justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone">
          Part de voix IA
        </span>
        <span className="press-num text-xl text-press">
          {current.sovlift} <span className="text-xs text-stone">de présence</span>
        </span>
      </div>
    </div>
  );
}
