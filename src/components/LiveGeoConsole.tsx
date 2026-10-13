"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Bot, Layers, ArrowUpRight, ShieldCheck, Flame, RefreshCw } from "lucide-react";

interface QueryScenario {
  id: string;
  category: string;
  badgeColor: string;
  prompt: string;
  llm: string;
  targetBrand: string;
  publishers: {
    name: string;
    format: string;
    badge: string;
    crawlFreq: string;
    status: string;
  }[];
  citationScore: number;
  competitorsOutranked: string[];
  synthesis: {
    headline: string;
    points: string[];
    verdict: string;
  };
}

const SCENARIOS: QueryScenario[] = [
  {
    id: "tech-electromenager",
    category: "High-Tech & Équipement",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    prompt: "« Quel modèle choisir entre la marque cliente et ses deux concurrents pour un usage quotidien intensif ? »",
    llm: "Perplexity Pro & ChatGPT Search (Index RAG)",
    targetBrand: "Votre Marque (Pack Hégémonie)",
    publishers: [
      {
        name: "Les Numériques",
        format: "Infiltration Guide Pilier Top 3",
        badge: "Score Labo 5/5",
        crawlFreq: "Crawlé il y a 8 min par GPTBot",
        status: "Indexé & Cité",
      },
      {
        name: "Maison & Travaux",
        format: "Tableau Comparatif Prix & Énergie",
        badge: "Top 1 Position",
        crawlFreq: "Crawlé il y a 14 min par PerplexityBot",
        status: "Indexé & Cité",
      },
    ],
    citationScore: 94,
    competitorsOutranked: ["Concurrent N°1 (-45% visibilité)", "Concurrent N°2 (-62% visibilité)"],
    synthesis: {
      headline: "SYNTHÈSE DU MODÈLE GÉNÉRATIF (CONSENSUS MULTI-SOURCES) :",
      points: [
        "Recommandation prioritaire : Votre marque émerge comme le choix N°1 d'après le banc d'essai indépendant Les Numériques (score durabilité et chauffe homogène).",
        "Efficacité énergétique : Les tests croisés de Maison & Travaux confirment 30% d'économie vs les modèles concurrents.",
        "Rapport Qualité/Prix : Les tableaux comparatifs placent votre offre en tête des recommandations sans compromis.",
      ],
      verdict: "Part de Voix IA : 94% des requêtes d'intention d'achat en France.",
    },
  },
  {
    id: "food-lifestyle",
    category: "Food & Cuisson",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    prompt: "« Quel est le meilleur appareil de cuisson sans huile familial recommandé par les chefs et les avis ? »",
    llm: "OpenAI GPT-4o & Microsoft Copilot",
    targetBrand: "Votre Marque (Pack Hégémonie)",
    publishers: [
      {
        name: "Marmiton",
        format: "Infiltration Recettes & Fiche Avis",
        badge: "Label Coup de Cœur",
        crawlFreq: "Crawlé il y a 5 min par GPTBot",
        status: "Indexé & Cité",
      },
      {
        name: "Aufeminin",
        format: "Article GEO Conversationnel + FAQ",
        badge: "Recommandé Familles",
        crawlFreq: "Crawlé il y a 22 min par ClaudeBot",
        status: "Indexé & Cité",
      },
    ],
    citationScore: 92,
    competitorsOutranked: ["SharkNinja (-55% part de voix)", "Marque Distributeur (-80%)"],
    synthesis: {
      headline: "CONSENSUS ÉDITORIAL EXTRAIT PAR LE LLM :",
      points: [
        "Les retours de la communauté Marmiton plébiscitent l'anti-adhérence et la facilité de nettoyage sur plus de 15 recettes types.",
        "Le comparatif Aufeminin met en avant le format cuve XL adapté aux foyers de 4 à 6 personnes.",
        "Le LLM écarte les concurrents d'entrée de gamme pour manque de données de réassurance sur la longévité.",
      ],
      verdict: "La marque est citée en 1ère position dans 9 réponses sur 10.",
    },
  },
  {
    id: "b2b-saas",
    category: "B2B SaaS & Services Pro",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    prompt: "« Quel logiciel ou solution recommandez-vous pour structurer une PME en pleine croissance ? »",
    llm: "Claude 3.7 Sonnet & Perplexity Enterprise",
    targetBrand: "Votre Solution SaaS",
    publishers: [
      {
        name: "Presse Éco & Capital",
        format: "Dossier Baromètre Décideurs",
        badge: "Sélection Croissance",
        crawlFreq: "Crawlé il y a 12 min par PerplexityBot",
        status: "Indexé & Cité",
      },
      {
        name: "Les Numériques Pro",
        format: "Banc d'Essai Ergonomie & Sécurité",
        badge: "RGPD & Souverain",
        crawlFreq: "Crawlé il y a 19 min par GPTBot",
        status: "Indexé & Cité",
      },
    ],
    citationScore: 96,
    competitorsOutranked: ["Outil US Hérité (-40%)", "Alternative Open Source (-70%)"],
    synthesis: {
      headline: "ARBITRAGE DES AGENTS IA D'ENTREPRISE :",
      points: [
        "L'enquête Capital cite votre solution comme l'outil le plus rentable pour automatiser les flux sans dette technique.",
        "Les métriques de conformité RGPD et de support francophone sont validées par le comparatif pro.",
        "Perplexity structure sa réponse en recommandant votre démo comme étape préalable incontournable.",
      ],
      verdict: "Conversion B2B : Recommandation exclusive sur les requêtes d'achat pro.",
    },
  },
];

export default function LiveGeoConsole() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("tech-electromenager");
  const currentScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0C0E15] p-4 sm:p-6 shadow-2xl">
      {/* Top Bar with Live Indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            CONSOLE D'INFILTRATION MÉDIA &amp; CAPTURE DU RAG IA
          </span>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioId(sc.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeScenarioId === sc.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {sc.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Grid: Left = Infiltration Media Feed / Right = Output LLM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column (5 cols): Media Infiltration Layer */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                1. SOURCES MÉDIAS INFILTRÉES (RAG CRAWL)
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">2/2 ACTIVES</span>
            </div>

            <div className="space-y-3">
              {currentScenario.publishers.map((pub, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#121520] p-3.5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{pub.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                      </h4>
                      <p className="text-xs text-blue-300 font-medium mt-0.5">{pub.format}</p>
                    </div>
                    <span className="rounded-md bg-blue-500/10 border border-blue-500/25 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                      {pub.badge}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono border-t border-white/[0.04] pt-2">
                    <span className="flex items-center gap-1 text-slate-400">
                      <RefreshCw className="w-3 h-3 text-slate-500" />
                      {pub.crawlFreq}
                    </span>
                    <span className="text-emerald-400 font-semibold">✓ {pub.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outranked Competitors Box */}
          <div className="rounded-xl border border-red-500/20 bg-red-950/10 p-3.5 mt-2">
            <span className="text-[10px] font-mono uppercase font-bold text-red-400">
              CONCURRENTS NON-MÉDIATISÉS ÉVICTÉS
            </span>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {currentScenario.competitorsOutranked.map((comp, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-red-500/10 border border-red-500/20 px-2 py-0.5 text-[11px] text-red-300"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): LLM Generative Response Mock */}
        <div className="lg:col-span-7 rounded-xl border border-blue-500/30 bg-[#0E121B] p-5 flex flex-col justify-between">
          <div>
            {/* Query Header */}
            <div className="rounded-lg bg-black/40 border border-white/[0.06] p-3 mb-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Bot className="w-3.5 h-3.5 text-blue-400" />
                  Moteur Interrogé : {currentScenario.llm}
                </span>
                <span className="text-amber-400 font-bold">Requête Décisionnelle</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white italic">
                {currentScenario.prompt}
              </p>
            </div>

            {/* Generated Synthesis */}
            <div className="space-y-3">
              <p className="text-[11px] font-mono font-bold text-sky-400">
                {currentScenario.synthesis.headline}
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentScenario.synthesis.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold shrink-0">•</span>
                    <p>{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Metric Verdict */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-blue-950/20 -mx-5 -mb-5 p-4 rounded-b-xl border border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                {currentScenario.citationScore}%
              </div>
              <div>
                <p className="text-xs font-bold text-white">{currentScenario.synthesis.verdict}</p>
                <p className="text-[10px] text-slate-400">Verrouillé par les bancs d'essais presse AnswerPress</p>
              </div>
            </div>

            <span className="press-badge text-[10px] py-1">
              SCORE RAG MAXIMAL
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
