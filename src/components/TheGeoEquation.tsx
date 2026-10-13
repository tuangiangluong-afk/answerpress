"use client";

import React from "react";
import { Cpu, Check, X, ShieldCheck, Zap, BookOpen, Layers } from "lucide-react";

export default function TheGeoEquation() {
  return (
    <section id="methodologie" className="py-24 border-t border-white/[0.08] bg-[#08090C] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>MÉTHODOLOGIE &amp; SCIENCE DU GEO</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            La Nouvelle Équation du Référencement par l'IA.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Pourquoi vos techniques SEO traditionnelles ne fonctionnent plus sur ChatGPT, Perplexity et Copilot. 
            Découvrez la formule mathématique qui régit l’apparition d’une marque dans la synthèse des modèles.
          </p>
        </div>

        {/* The Equation Visual Box */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1422] to-[#0A0D15] p-6 sm:p-10 shadow-2xl">
          <p className="text-xs font-mono uppercase text-blue-400 font-bold tracking-wider">
            FORMULE D'INFERENCE RAG (RETRIEVAL-AUGMENTED GENERATION)
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-4">
              <span className="text-[11px] font-mono uppercase text-slate-400">Levier 1</span>
              <p className="text-lg sm:text-xl font-black text-white">Axe Éditorial</p>
              <span className="text-[10px] text-blue-300">Intentions d'achat réelles</span>
            </div>

            <span className="text-2xl font-black text-slate-500">×</span>

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-4">
              <span className="text-[11px] font-mono uppercase text-slate-400">Levier 2</span>
              <p className="text-lg sm:text-xl font-black text-white">Nature &amp; Formats</p>
              <span className="text-[10px] text-amber-300">Bancs d'essais, FAQ, Tableaux</span>
            </div>

            <span className="text-2xl font-black text-slate-500">×</span>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4">
              <span className="text-[11px] font-mono uppercase text-slate-400">Levier 3</span>
              <p className="text-lg sm:text-xl font-black text-white">Autorité Publisher</p>
              <span className="text-[10px] text-emerald-300">Presse patrimoniale &gt;90 Trust</span>
            </div>

            <span className="text-2xl font-black text-slate-500">×</span>

            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-4">
              <span className="text-[11px] font-mono uppercase text-slate-400">Levier 4</span>
              <p className="text-lg sm:text-xl font-black text-white">Volume &amp; Crawl</p>
              <span className="text-[10px] text-indigo-300">Saturation multi-angles</span>
            </div>
          </div>

          <div className="mt-8 text-center border-t border-white/[0.08] pt-6">
            <p className="text-sm font-mono text-emerald-400 font-bold">
              = CONSIDÉRATION MAXIMALE &amp; RECOMMANDATION N°1 DANS LES LLMS
            </p>
          </div>
        </div>

        {/* The Pipeline Architecture Graphic */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0E1118] p-6 text-center">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            ARCHITECTURE DU FLUX : DE LA PUBLICATION DE PRESSE À LA RÉPONSE DE L'AGENT IA
          </p>
          <img 
            src="/illustrations/rag-pipeline.svg" 
            alt="Pipeline RAG presse et bots IA" 
            className="w-full max-h-[360px] object-contain mx-auto"
          />
        </div>

        {/* SEO vs GEO Contrast Table */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center">
            Pourquoi le SEO traditionnel est mort face au GEO Média
          </h3>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-white/10 bg-[#0E1118]">
              <thead>
                <tr className="border-b border-white/10 bg-black/40 text-xs uppercase font-mono tracking-wider">
                  <th className="p-4 sm:p-5 text-slate-400">Critère Stratégique</th>
                  <th className="p-4 sm:p-5 text-red-400">SEO Classique (2015 - 2024)</th>
                  <th className="p-4 sm:p-5 text-blue-400">GEO Média AnswerPress (2025 - 2027)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Objectif Final</td>
                  <td className="p-4 sm:p-5 text-slate-300">Être cliqué parmi 10 liens bleus</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">Être la réponse unique et le choix conseillé</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Source de Confiance</td>
                  <td className="p-4 sm:p-5 text-slate-300">Backlinks sur blogs satellites ou PBNs</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">Presse patrimoniale d'autorité (Les Numériques, Marmiton)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Fréquence de Crawl</td>
                  <td className="p-4 sm:p-5 text-slate-300">Googlebot passe 1 fois par mois</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">GPTBot &amp; PerplexityBot crawlent toutes les 15 minutes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Comportement Utilisateur</td>
                  <td className="p-4 sm:p-5 text-slate-300">Navigation et comparaison manuelle longue</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">47% achètent directement après recommandation du bot</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Format Privilégié</td>
                  <td className="p-4 sm:p-5 text-slate-300">Articles kilométriques farcis de mots-clés</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">Infiltrations, tableaux comparatifs, FAQ et bancs d'essai</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-white">Mesure du Succès</td>
                  <td className="p-4 sm:p-5 text-slate-300">Positions de mots-clés (SERP)</td>
                  <td className="p-4 sm:p-5 text-emerald-300 font-semibold">Taux de présence dans les réponses &amp; Part de Voix IA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
