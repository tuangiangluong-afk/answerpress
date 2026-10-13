"use client";

import React from "react";
import { Cpu } from "lucide-react";

export default function TheGeoEquation() {
  return (
    <section id="methodologie" className="py-24 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-xs font-mono font-semibold text-neutral-800">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>MÉTHODOLOGIE &amp; SCIENCE DU GEO</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-neutral-900">
            La Nouvelle Équation du Référencement par l'IA.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Pourquoi le SEO traditionnel ne fonctionne plus sur ChatGPT et Perplexity : découvrez l'équation d'inférence RAG qui détermine la sélection d'une marque par les modèles.
          </p>
        </div>

        {/* The Equation Visual Box */}
        <div className="rounded-3xl border border-neutral-200 bg-[#FAFAF9] p-8 sm:p-12 shadow-xs mb-12">
          <p className="text-xs font-mono uppercase text-blue-700 font-bold tracking-wider mb-6">
            FORMULE D'INFERENCE RAG (RETRIEVAL-AUGMENTED GENERATION)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
            <div className="rounded-2xl border border-blue-200 bg-white px-5 py-4 min-w-[160px] shadow-2xs">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold">Levier 1</span>
              <p className="text-lg font-bold text-neutral-900 mt-0.5">Axe Éditorial</p>
              <span className="rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[10px] font-medium">Intentions d'achat</span>
            </div>

            <span className="text-2xl font-bold text-neutral-400">×</span>

            <div className="rounded-2xl border border-amber-200 bg-white px-5 py-4 min-w-[160px] shadow-2xs">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold">Levier 2</span>
              <p className="text-lg font-bold text-neutral-900 mt-0.5">Nature &amp; Formats</p>
              <span className="rounded-full bg-amber-50 text-amber-800 px-2 py-0.5 text-[10px] font-medium">Bancs labo, Tableaux</span>
            </div>

            <span className="text-2xl font-bold text-neutral-400">×</span>

            <div className="rounded-2xl border border-emerald-200 bg-white px-5 py-4 min-w-[160px] shadow-2xs">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold">Levier 3</span>
              <p className="text-lg font-bold text-neutral-900 mt-0.5">Autorité Publisher</p>
              <span className="rounded-full bg-emerald-50 text-emerald-800 px-2 py-0.5 text-[10px] font-medium">Presse &gt;90 Trust</span>
            </div>

            <span className="text-2xl font-bold text-neutral-400">×</span>

            <div className="rounded-2xl border border-indigo-200 bg-white px-5 py-4 min-w-[160px] shadow-2xs">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-semibold">Levier 4</span>
              <p className="text-lg font-bold text-neutral-900 mt-0.5">Volume &amp; Crawl</p>
              <span className="rounded-full bg-indigo-50 text-indigo-800 px-2 py-0.5 text-[10px] font-medium">Saturation multi-angles</span>
            </div>
          </div>

          <div className="mt-8 text-center border-t border-neutral-200 pt-6">
            <span className="rounded-full bg-emerald-100 text-emerald-900 font-mono font-bold px-6 py-2.5 text-xs sm:text-sm inline-block border border-emerald-200">
              = CONSIDÉRATION MAXIMALE &amp; RECOMMANDATION N°1 DANS LES LLMS
            </span>
          </div>
        </div>

        {/* The Pipeline Architecture Graphic */}
        <div className="rounded-3xl border border-neutral-200 bg-[#FAFAF9] p-8 shadow-xs mb-14 text-center">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-5 font-semibold">
            ARCHITECTURE DU FLUX : DE LA PUBLICATION DE PRESSE À LA RÉPONSE DE L'AGENT IA
          </p>
          <img 
            src="/illustrations/rag-inference-flow.svg" 
            alt="Pipeline RAG presse et bots IA" 
            className="w-full max-h-[320px] object-contain mx-auto"
          />
        </div>

        {/* SEO vs GEO Comparison Table with Rounded Pills */}
        <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50 text-[11px] uppercase font-mono tracking-wider">
                <th className="p-5 text-neutral-500">Critère Stratégique</th>
                <th className="p-5 text-red-700">SEO Classique (2015 - 2024)</th>
                <th className="p-5 text-blue-700 font-bold">GEO Média AnswerPress (2025 - 2027)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr>
                <td className="p-5 font-bold text-neutral-900">Objectif Final</td>
                <td className="p-5 text-neutral-600">Être cliqué parmi 10 liens bleus</td>
                <td className="p-5 text-emerald-800 font-semibold">Être la réponse unique et le choix conseillé</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-neutral-900">Source de Confiance</td>
                <td className="p-5 text-neutral-600">Backlinks sur blogs satellites ou PBNs</td>
                <td className="p-5 text-emerald-800 font-semibold">Presse patrimoniale d'autorité (Les Numériques, Marmiton)</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-neutral-900">Fréquence de Crawl</td>
                <td className="p-5 text-neutral-600">Googlebot passe 1 fois par mois</td>
                <td className="p-5 text-emerald-800 font-semibold">GPTBot &amp; PerplexityBot crawlent toutes les 15 minutes</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-neutral-900">Comportement Utilisateur</td>
                <td className="p-5 text-neutral-600">Navigation et comparaison manuelle longue</td>
                <td className="p-5 text-emerald-800 font-semibold">47% achètent directement après recommandation du bot</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-neutral-900">Format Privilégié</td>
                <td className="p-5 text-neutral-600">Articles kilométriques farcis de mots-clés</td>
                <td className="p-5 text-emerald-800 font-semibold">Infiltrations, tableaux comparatifs, FAQ et bancs d'essai</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-neutral-900">Mesure du Succès</td>
                <td className="p-5 text-neutral-600">Positions de mots-clés (SERP)</td>
                <td className="p-5 text-emerald-800 font-semibold">Taux de présence dans les réponses &amp; Part de Voix IA</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
