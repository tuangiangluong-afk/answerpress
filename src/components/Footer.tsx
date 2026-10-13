"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="press-title text-2xl text-paper">
              AnswerPress<span className="text-press">.</span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed max-w-xs">
              Centrale d&apos;autorité média et de référencement génératif (GEO). Nous transformons
              les requêtes d&apos;achat des IA en recommandations pour votre marque.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/50">
              Inventaire
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li><Link href="/medias" className="hover:text-white transition-colors">Les Numériques</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Marmiton</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Maison & Travaux</Link></li>
              <li><Link href="/medias" className="hover:text-white transition-colors">Aufeminin & Beauté Test</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/50">
              Packages
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Infiltration & Fast Citation</Link></li>
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Hégémonie de Catégorie</Link></li>
              <li><Link href="/tarifs" className="hover:text-white transition-colors">Domination Souveraine</Link></li>
              <li><Link href="/methodologie" className="hover:text-white transition-colors">Méthodologie GEO</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">Guides &amp; Analyses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/50">
              Éthique
            </h4>
            <p className="mt-4 text-xs leading-relaxed">
              Toutes les activations respectent les chartes éditoriales des médias, la transparence
              légale des partenariats et la neutralité des bancs d&apos;essai. Zéro dénigrement de
              concurrents, conformité RGPD stricte.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-paper/50">
          <p>© {new Date().getFullYear()} AnswerPress — Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Mentions légales</span>
            <span className="cursor-pointer hover:text-white transition-colors">Confidentialité</span>
            <span className="cursor-pointer hover:text-white transition-colors">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
