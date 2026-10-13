"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, BookOpen, Layers, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060709] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-mono text-base font-black text-white">
                AP
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                AnswerPress<span className="text-blue-500">.io</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              La 1ère centrale d’autorité média &amp; de référencement génératif (GEO) en France. Nous transformons les requêtes d’achat des IA en recommandations pour votre marque.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <span>Propulsé par la technologie AnswerShaper</span>
            </div>
          </div>

          {/* Col 2: Media Inventory */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Inventaire &amp; Marques
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/medias" className="hover:text-white transition-colors">Les Numériques (Tech)</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Marmiton (Food &amp; Cuisine)</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Maison &amp; Travaux (Habitat)</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Aufeminin &amp; Beauté Test</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Le Journal de la Maison</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Presse Éco &amp; B2B</Link></li>
            </ul>
          </div>

          {/* Col 3: GEO Methodology & Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Solutions &amp; Formats
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Pack Infiltration Rapide (4 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Pack Hégémonie Catégorie (14 900 €)</Link></li>
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Pack Domination Black Friday (39 000 €)</Link></li>
              <li><Link href="/methodologie" className="hover:text-white transition-colors">L'Équation GEO vs SEO</Link></li>
              <li><Link href="/cas-clients" className="hover:text-white transition-colors">Bancs d'Essai (Tefal, Philips...)</Link></li>
              <li><a href="#diagnostic" className="hover:text-white transition-colors">Simulateur Radar 12 Critères</a></li>
            </ul>
          </div>

          {/* Col 4: Ethics & Compliance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Éthique &amp; Gouvernance
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Toutes les activations AnswerPress respectent rigoureusement les chartes éditoriales des médias, la transparence de l’information pour les lecteurs et la neutralité des bancs d’essai labo.
            </p>
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">Indépendance &amp; Déontologie :</span> Aucun dénigrement de marque, conformité RGPD et signalement légal des collaborations.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AnswerPress.io — Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-slate-400 cursor-pointer">Politique de Confidentialité</span>
            <span className="hover:text-slate-400 cursor-pointer">CGV Mandat d'Achat</span>
            <span className="hover:text-slate-400 cursor-pointer">Charte Éthique GEO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
