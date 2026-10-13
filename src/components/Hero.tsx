"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import LiveGeoConsole from "@/components/LiveGeoConsole";

interface HeroProps {
  onOpenAudit: () => void;
  onScrollToPacks: () => void;
}

export default function Hero({ onOpenAudit, onScrollToPacks }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-18 md:pb-28">
      {/* Background Subtle Gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Pill */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>NOUVEAU PARADIGME 2026 : LE GEO REMPLACE LES LIENS BLEUS</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Ne cherchez plus à être cliqué. <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              Devenez la réponse citée par les IA.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            La 1ère centrale d’autorité média &amp; GEO en France. Nous packageons les inventaires 
            des plus grands titres de presse (<span className="text-white font-semibold">Les Numériques</span>, <span className="text-white font-semibold">Marmiton</span>, <span className="text-white font-semibold">Maison &amp; Travaux</span>, <span className="text-white font-semibold">Aufeminin</span>) pour saturer les moteurs génératifs (<span className="text-white font-semibold">ChatGPT</span>, <span className="text-white font-semibold">Perplexity</span>, <span className="text-white font-semibold">Copilot</span>).
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:bg-blue-500 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-blue-200" />
              <span>Simuler mon Indice de Citation IA</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>

            <button
              onClick={onScrollToPacks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-base font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition-all duration-200 cursor-pointer"
            >
              <span>Voir les Packages Média (dès 4 900 €)</span>
            </button>
          </div>

          {/* Micro Trust Proof */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zéro négociation régie de 3 mois
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Articles &amp; Infiltrations 100% Indexés RAG
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Audit &amp; Suivi AnswerShaper inclus
            </span>
          </div>
        </div>

        {/* Dynamic Metric Ticker Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-6 text-left">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Sollicitations Quotidiennes</p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-mono-num">12M+</p>
            <p className="mt-1 text-xs text-slate-400">crawls d’agents IA par jour sur nos marques partenaires</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-left">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Origine des Réponses GPT</p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono-num">70%</p>
            <p className="mt-1 text-xs text-slate-400">des sources citées par ChatGPT sont issues des médias</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-left">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Audience Intentionniste</p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono-num">34,5M</p>
            <p className="mt-1 text-xs text-slate-400">visiteurs uniques/mois sur les verticales activées</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-left">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Ticket d'Entrée Packagé</p>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono-num">4 900 €</p>
            <p className="mt-1 text-xs text-slate-400">vs 50 000 € à 100 000 € en régie traditionnelle</p>
          </div>
        </div>

        {/* Interactive Live GEO Console (Cockpit Média & Capture RAG) */}
        <div className="mt-14">
          <LiveGeoConsole />
        </div>

      </div>
    </section>
  );
}
