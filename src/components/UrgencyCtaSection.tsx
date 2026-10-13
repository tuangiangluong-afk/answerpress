"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

interface UrgencyCtaSectionProps {
  onOpenAudit: () => void;
}

export default function UrgencyCtaSection({ onOpenAudit }: UrgencyCtaSectionProps) {
  return (
    <section className="bg-ink text-white py-20 sm:py-24 border-t border-b border-ink/40 relative overflow-hidden">
      {/* Texture subtile en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/60 via-ink to-ink pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-950/40 text-red-400 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
            <Clock className="w-3.5 h-3.5 text-press" />
            <span>Rareté Régie &bull; Maximum 3 marques par catégorie</span>
          </div>

          <h2 className="press-title mt-7 text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Pendant que vous hésitez,
            <br />
            <span className="text-press italic">
              vos concurrents verrouillent déjà ChatGPT.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Chaque jour, des milliers d&apos;acheteurs demandent à l&apos;IA quel produit acheter dans votre secteur. Les guides d&apos;achat de nos médias ne comportent que <strong className="text-white font-semibold">3 places de recommandation</strong>. Une fois prises, l&apos;IA retient ce choix pour les 12 prochains mois.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="btn-press btn-press-red !py-3.5 !px-8 text-xs sm:text-sm shadow-xl shadow-red-600/25 w-full sm:w-auto"
            >
              <span>Recevoir mon Audit Exécutif Board-Ready</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#inventaire"
              className="btn-press !border-white/20 !text-white hover:!bg-white/10 !py-3.5 !px-6 text-xs sm:text-sm w-full sm:w-auto text-center"
            >
              Consulter les 12 médias disponibles
            </a>
          </div>

          {/* Garanties psychologiques directes */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-press shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Format Prêt pour votre Board</p>
                <p className="mt-1 text-[11px] text-white/60 leading-snug">
                  Benchmark de vos 5 requêtes clés face à vos 2 rivaux principaux, chiffré et sourcé.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-press shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Livraison sous 24h chrono</p>
                <p className="mt-1 text-[11px] text-white/60 leading-snug">
                  Audit préparé par nos directeurs médias sans aucun engagement de votre part.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-press shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Échange Direct Directeur Média</p>
                <p className="mt-1 text-[11px] text-white/60 leading-snug">
                  Débriefing confidentiel de 15 min en visio : zéro commercial junior, stratégie pure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
