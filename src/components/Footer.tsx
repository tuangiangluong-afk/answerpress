"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-blue-700 flex items-center justify-center font-mono text-xs font-bold text-white">
                AP
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                AnswerPress<span className="text-blue-700">.io</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              La 1ère centrale d’autorité média &amp; de référencement génératif (GEO) en France. Nous transformons les requêtes d’achat des IA en recommandations pour votre marque.
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              Technologie d'inférence AnswerShaper
            </p>
          </div>

          {/* Col 2: Media Inventory */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3 font-mono">
              Inventaire &amp; Titres
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/medias" className="hover:text-slate-900 transition-colors">Les Numériques (Tech)</Link></li>
              <li><Link href="/medias" className="hover:text-slate-900 transition-colors">Marmiton (Food &amp; Cuisine)</Link></li>
              <li><Link href="/medias" className="hover:text-slate-900 transition-colors">Maison &amp; Travaux (Habitat)</Link></li>
              <li><Link href="/medias" className="hover:text-slate-900 transition-colors">Aufeminin &amp; Beauté Test</Link></li>
              <li><Link href="/medias" className="hover:text-slate-900 transition-colors">Le Journal de la Maison</Link></li>
              <li><Link href="/medias" className="hover:text-slate-900 transition-colors">Presse Éco &amp; B2B</Link></li>
            </ul>
          </div>

          {/* Col 3: GEO Methodology & Solutions */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3 font-mono">
              Solutions &amp; Packages
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tarifs" className="hover:text-slate-900 transition-colors">Pack Infiltration Rapide (4 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-slate-900 transition-colors">Pack Hégémonie Catégorie (14 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-slate-900 transition-colors">Pack Domination Black Friday (39 000 €)</Link></li>
              <li><Link href="/methodologie" className="hover:text-slate-900 transition-colors">L'Équation GEO vs SEO</Link></li>
              <li><Link href="/cas-clients" className="hover:text-slate-900 transition-colors">Bancs d'Essai (Tefal, Philips...)</Link></li>
              <li><a href="#diagnostic" className="hover:text-slate-900 transition-colors">Simulateur Radar 12 Critères</a></li>
            </ul>
          </div>

          {/* Col 4: Ethics & Compliance */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3 font-mono">
              Éthique &amp; Déontologie
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Toutes les activations respectent rigoureusement les chartes éditoriales des médias, la transparence légale des partenariats et la neutralité des bancs d’essai labo.
            </p>
            <div className="mt-3 rounded-lg border border-slate-200 bg-white p-2.5 text-[10px] text-slate-500">
              <span className="font-semibold text-slate-700">Déontologie :</span> Zéro dénigrement de concurrents, conformité RGPD stricte.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AnswerPress.io — Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-slate-700 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-slate-700 cursor-pointer">Confidentialité</span>
            <span className="hover:text-slate-700 cursor-pointer">CGV</span>
            <span className="hover:text-slate-700 cursor-pointer">Charte Éthique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
