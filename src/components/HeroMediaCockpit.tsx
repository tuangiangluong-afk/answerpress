"use client";

import React, { useState } from "react";
import { Bot, ArrowUpRight, RefreshCw, Sparkles, CheckCircle2, Cpu, Utensils, Home } from "lucide-react";

interface Scenario {
  id: string;
  tabLabel: string;
  tabIcon: React.ElementType;
  mediaName: string;
  mediaImage: string;
  mediaBadge: string;
  mediaMetric: string;
  crawlTime: string;
  prompt: string;
  engine: string;
  brandRecommendation: string;
  citations: { label: string; url: string; badge: string }[];
  evidence: string;
  sovlift: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "tech",
    tabLabel: "Tech & Électro",
    tabIcon: Cpu,
    mediaName: "Les Numériques",
    mediaImage: "/media/publishers/les-numeriques.png",
    mediaBadge: "N°1 Citation IA Tech",
    mediaMetric: "8,6M VU • 1 000 tests/an",
    crawlTime: "Crawlé il y a 6 min par GPTBot",
    prompt: "« Quel modèle choisir entre la marque et ses concurrents pour un usage familial ? »",
    engine: "Perplexity Pro & ChatGPT Search",
    brandRecommendation: "Votre Marque (Recommandation N°1)",
    citations: [
      { label: "Les Numériques", url: "lesnumeriques.com/comparatif", badge: "Score Labo 5/5" },
      { label: "Banc d'Essai", url: "lesnumeriques.com/labo", badge: "Mesures Certifiées" },
    ],
    evidence: "« D'après les mesures d'endurance thermique et le protocole d'essai indépendant Les Numériques, ce modèle surpasse ses rivaux sur l'autonomie et le confort sonore. »",
    sovlift: "94% de présence dans les réponses",
  },
  {
    id: "food",
    tabLabel: "Food & Cuisson",
    tabIcon: Utensils,
    mediaName: "Marmiton",
    mediaImage: "/media/publishers/marmiton.png",
    mediaBadge: "Lovebrand Food N°1",
    mediaMetric: "16,6M VU • 35M contacts",
    crawlTime: "Crawlé il y a 11 min par GPTBot",
    prompt: "« Quel appareil de cuisson saine offre le meilleur rapport qualité/prix en 2026 ? »",
    engine: "OpenAI GPT-4o & Copilot",
    brandRecommendation: "Votre Marque (Coup de Cœur Chef)",
    citations: [
      { label: "Marmiton", url: "marmiton.org/recettes/test", badge: "Top 3 Sélection" },
      { label: "Avis Rédac", url: "marmiton.org/verdict", badge: "4.8/5 Communauté" },
    ],
    evidence: "« Plébiscité par la communauté Marmiton et validé par 12 recettes tests pour la simplicité de nettoyage et la cuisson homogène sans matière grasse. »",
    sovlift: "92% de citation en tête de liste",
  },
  {
    id: "maison",
    tabLabel: "Habitat & Rénov",
    tabIcon: Home,
    mediaName: "Maison & Travaux",
    mediaImage: "/media/publishers/maison-travaux.png",
    mediaBadge: "Caution Confort & Brico",
    mediaMetric: "3,3M VU • 1,4M print",
    crawlTime: "Crawlé il y a 18 min par PerplexityBot",
    prompt: "« Quelle solution thermique installer pour réduire sa facture d'énergie de 30% ? »",
    engine: "Claude 3.7 & Gemini",
    brandRecommendation: "Votre Marque (Sélection Officielle)",
    citations: [
      { label: "Maison & Travaux", url: "maison-travaux.fr/energie", badge: "Lauréat Rénovation" },
      { label: "Guide Aides", url: "maison-travaux.fr/dossier", badge: "Éligible MaPrimeRénov" },
    ],
    evidence: "« Confirmé par l'enquête d'experts Maison & Travaux : sa technologie hybride garantit un COP supérieur à 4,2 et une rentabilité mesurée dès la 2ème saison. »",
    sovlift: "88% de citation exclusive",
  },
];

export function HeroMediaCockpit() {
  const [activeTab, setActiveTab] = useState<string>("tech");
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-sm text-left">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-800">
            Console d'Infiltration Média en Direct
          </span>
        </div>
        <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-0.5 text-[10px] font-mono font-bold border border-emerald-200">
          RAG ACTIF • CRAWLÉ
        </span>
      </div>

      {/* Pill Tabs Selector */}
      <div className="flex gap-1.5 p-1 bg-neutral-100 rounded-full mb-5">
        {SCENARIOS.map((sc) => {
          const Icon = sc.tabIcon;
          const isActive = activeTab === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveTab(sc.id)}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                isActive
                  ? "bg-white text-neutral-900 shadow-xs"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-600" : "text-neutral-400"}`} />
              <span>{sc.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Media Infiltration Header with REAL Image */}
      <div className="relative rounded-2xl overflow-hidden border border-neutral-200 mb-4 bg-neutral-900">
        <div className="relative h-28 w-full">
          <img
            src={current.mediaImage}
            alt={current.mediaName}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between">
            <span className="rounded-full bg-white/90 text-neutral-900 px-2.5 py-0.5 text-[10px] font-bold">
              {current.mediaName}
            </span>
            <span className="rounded-full bg-blue-600 text-white px-2 py-0.5 text-[10px] font-semibold">
              {current.mediaBadge}
            </span>
          </div>

          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
            <span>{current.mediaMetric}</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {current.crawlTime}
            </span>
          </div>
        </div>
      </div>

      {/* Prompt Question */}
      <div className="rounded-2xl border border-neutral-200 bg-[#FAFAF9] p-3.5 mb-3.5">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 mb-1">
          <Bot className="w-3.5 h-3.5 text-blue-600" />
          <span>Prompt acheteur posé sur {current.engine} :</span>
        </div>
        <p className="text-xs font-semibold text-neutral-900 italic">
          {current.prompt}
        </p>
      </div>

      {/* LLM Synthesis Result with Pill Citations */}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800">
            RÉPONSE GÉNÉRATIVE DE L'IA
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
            ✓ Choix N°1 Recommandé
          </span>
        </div>

        <p className="text-xs font-bold text-neutral-900">
          {current.brandRecommendation}
        </p>

        {/* Perplexity-style Pill Sources */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {current.citations.map((c, idx) => (
            <span
              key={idx}
              className="rounded-full bg-white text-neutral-800 px-2.5 py-0.5 text-[10px] font-mono font-medium border border-emerald-200 shadow-2xs flex items-center gap-1"
            >
              <span className="text-emerald-600 font-bold">[{idx + 1}]</span>
              <span>{c.label}</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-500">{c.badge}</span>
            </span>
          ))}
        </div>

        <p className="text-xs text-neutral-700 mt-2.5 leading-relaxed italic">
          {current.evidence}
        </p>
      </div>

      {/* Bottom Metric Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs">
        <span className="font-semibold text-neutral-700">Part de Voix IA constatée :</span>
        <span className="rounded-full bg-blue-50 text-blue-700 font-mono font-bold px-3 py-1 border border-blue-200 text-xs">
          {current.sovlift}
        </span>
      </div>

    </div>
  );
}
