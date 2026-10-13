"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-ink/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Bandeau supérieur : Manifeste Agence & Positionnement Indépendant (100% visible) */}
        <div className="border-b border-paper/15 pb-12 mb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <Link href="/" className="press-title text-3xl sm:text-4xl text-paper tracking-tight inline-block">
                AnswerPress<span className="text-press">.</span>
              </Link>
              <p className="mt-3 text-sm sm:text-base text-paper font-semibold tracking-wide">
                Agence conseil indépendante en autorité média &amp; référencement génératif (GEO).
              </p>
              <p className="mt-2 text-xs text-paper/70 font-mono uppercase tracking-[0.18em]">
                Centrale d&apos;Activation LLM &bull; Paris &bull; 2026
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-paper/15 lg:pl-10">
              <p className="text-sm sm:text-base text-paper/90 leading-relaxed font-normal">
                Nous activons les Lovebrands leaders (<strong className="text-paper font-semibold">groupe Reworld Media, Prisma Media &amp; partenaires</strong>) pour transformer les requêtes d&apos;achat de <strong className="text-paper font-semibold">ChatGPT, Perplexity et Gemini</strong> en recommandations directes pour votre marque.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/80">
                <span className="inline-flex items-center gap-1.5 text-paper">
                  <CheckCircle2 className="w-3.5 h-3.5 text-press" />
                  <span>Conseil objectif &amp; non captif</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-paper">
                  <CheckCircle2 className="w-3.5 h-3.5 text-press" />
                  <span>Inventaires officiels certifiés</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-paper">
                  <CheckCircle2 className="w-3.5 h-3.5 text-press" />
                  <span>Mesure de part de voix IA</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Colonnes de navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/60 pb-3 border-b border-paper/10">
              Réseau de Titres
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/80">
              <li><Link href="/medias" className="hover:text-press transition-colors">Les Numériques (Tech)</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Marmiton (Food)</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Maison &amp; Travaux (Habitat)</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Beauté Test &amp; Aufeminin</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Science &amp; Vie, Auto Plus</Link></li>
              <li><Link href="/medias" className="text-press hover:underline transition-colors mt-1 inline-block">Voir les 12 titres &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/60 pb-3 border-b border-paper/10">
              Packages &amp; Tarifs
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/80">
              <li><Link href="/tarifs" className="hover:text-press transition-colors">Infiltration Fast Citation (4 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-press transition-colors">Hégémonie de Catégorie (14 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-press transition-colors">Domination Souveraine (39 000 €)</Link></li>
              <li><Link href="/#diagnostic" className="hover:text-press transition-colors">Audit Indice de Citation IA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/60 pb-3 border-b border-paper/10">
              Méthode &amp; Guides
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-paper/80">
              <li><Link href="/methodologie" className="hover:text-press transition-colors">L&apos;Équation Mathématique GEO</Link></li>
              <li><Link href="/guides/etre-cite-par-chatgpt" className="hover:text-press transition-colors">Être cité par ChatGPT</Link></li>
              <li><Link href="/guides/seo-vs-geo" className="hover:text-press transition-colors">SEO vs GEO : les différences</Link></li>
              <li><Link href="/guides/part-de-voix-ia" className="hover:text-press transition-colors">Mesurer sa part de voix IA</Link></li>
              <li><Link href="/guides" className="text-press hover:underline transition-colors mt-1 inline-block">Tous les guides &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/60 pb-3 border-b border-paper/10">
              Tiers de Confiance
            </h4>
            <p className="mt-4 text-xs text-paper/80 leading-relaxed">
              AnswerPress est une agence de conseil indépendante. Nos recommandations reposent sur l&apos;audit algorithmique des sources RAG les plus interrogées par les LLMs, dans le respect strict des chartes éditoriales et de la conformité légale des partenariats.
            </p>
          </div>
        </div>

        {/* Ligne inférieure de copyright et mentions */}
        <div className="mt-14 pt-6 border-t border-paper/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-paper/60">
          <p>© {new Date().getFullYear()} AnswerPress.io — Agence Conseil en Autorité Média &amp; Référencement Génératif.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-paper cursor-pointer transition-colors">Mentions légales</span>
            <span className="hover:text-paper cursor-pointer transition-colors">Confidentialité</span>
            <span className="hover:text-paper cursor-pointer transition-colors">Conditions Générales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
