"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-ink/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Bandeau supérieur : 100% lisible, zéro jargon, orienté business */}
        <div className="border-b border-white/15 pb-12 mb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <Link href="/" className="press-title text-3xl sm:text-4xl tracking-tight inline-block text-white">
                <span className="text-white">AnswerPress</span><span className="text-press">.</span>
              </Link>
              <p className="mt-3 text-base text-white font-semibold">
                Faites recommander vos produits par ChatGPT, Perplexity et Google.
              </p>
              <p className="mt-2 text-xs text-white/70">
                Agence média &amp; visibilité IA &bull; Paris
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-10">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Quand vos clients demandent à une IA quel produit acheter, elle lit les grands médias pour choisir. Nous plaçons vos produits dans les guides et comparatifs des plus grands titres (<strong className="text-white font-semibold">Les Numériques, Marmiton, Maison &amp; Travaux</strong>) pour que l&apos;IA recommande votre marque en premier.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/80">
                <span className="inline-flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-press" />
                  <span>Recommandations d&apos;achat en N°1</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-press" />
                  <span>Médias français les plus lus</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-press" />
                  <span>Résultats mesurés sur vos ventes</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Colonnes de navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 pb-3 border-b border-white/10">
              Réseau de Titres
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-white/80">
              <li><Link href="/medias" className="hover:text-press transition-colors">Les Numériques (Tech)</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Marmiton (Cuisine &amp; Électro)</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Maison &amp; Travaux (Habitat)</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Beauté Test &amp; Aufeminin</Link></li>
              <li><Link href="/medias" className="hover:text-press transition-colors">Science &amp; Vie, Auto Plus</Link></li>
              <li><Link href="/medias" className="text-press hover:underline transition-colors mt-1 inline-block">Voir les 12 titres &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 pb-3 border-b border-white/10">
              Packages &amp; Tarifs
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-white/80">
              <li><Link href="/tarifs" className="hover:text-press transition-colors">Découverte Produit (4 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-press transition-colors">Leader de Catégorie (14 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-press transition-colors">Grande Campagne (39 000 €)</Link></li>
              <li><Link href="/#diagnostic" className="hover:text-press transition-colors">Tester mon produit gratuitement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 pb-3 border-b border-white/10">
              Conseils &amp; Guides
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-white/80">
              <li><Link href="/methodologie" className="hover:text-press transition-colors">Comment les IA choisissent les produits</Link></li>
              <li><Link href="/guides/etre-cite-par-chatgpt" className="hover:text-press transition-colors">Être cité par ChatGPT</Link></li>
              <li><Link href="/guides/seo-vs-geo" className="hover:text-press transition-colors">Google vs ChatGPT : les différences</Link></li>
              <li><Link href="/guides/part-de-voix-ia" className="hover:text-press transition-colors">Mesurer sa part de recommandation</Link></li>
              <li><Link href="/guides" className="text-press hover:underline transition-colors mt-1 inline-block">Tous les guides &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 pb-3 border-b border-white/10">
              Transparence &amp; Déontologie
            </h4>
            <p className="mt-4 text-xs text-white/80 leading-relaxed">
              AnswerPress est une agence de conseil indépendante. Nous analysons en toute neutralité les médias les plus lus et cités par ChatGPT, Perplexity et Google pour placer votre marque là où elle aura le plus d&apos;impact commercial.
            </p>
          </div>
        </div>

        {/* Ligne inférieure de copyright et mentions */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <p>© {new Date().getFullYear()} AnswerPress.io — Agence de Recommandation Média &amp; Citations IA.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Mentions légales</span>
            <span className="hover:text-white cursor-pointer transition-colors">Confidentialité</span>
            <span className="hover:text-white cursor-pointer transition-colors">Conditions Générales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
