"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface PackagingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export default function PackagingSection({ onSelectPlan }: PackagingSectionProps) {
  const plans = [
    {
      id: "starter",
      name: "Infiltration & Fast Citation",
      subtitle: "Un produit héros, ou un premier test du GEO sur les requêtes d'achat.",
      priceOneOff: "4 900 €",
      priceLabel: "HT / activation",
      popular: false,
      deliverables: [
        "2 infiltrations de guides existants",
        "1 article GEO natif optimisé RAG",
        "3 FAQ sémantiques ciblées",
        "1 média de 1er rang activé",
        "Audit T0 sur 10 prompts critiques",
        "Rapport de persistance à J+30",
      ],
      ctaText: "Choisir ce pack",
    },
    {
      id: "hegemony",
      name: "Hégémonie de Catégorie",
      subtitle: "Saturer une verticale et dépasser vos deux concurrents principaux.",
      priceOneOff: "14 900 €",
      priceLabel: "HT / campagne",
      popular: true,
      deliverables: [
        "5 articles GEO natifs sur 2 médias majeurs",
        "3 infiltrations de guides de référence",
        "1 tableau de prix en top position / mois",
        "1 fiche test / banc d'essai labellisé",
        "6 FAQ conversationnelles & 2 forums",
        "Audit radar 12 critères vs concurrents",
        "Monitoring de 25 prompts pendant 90 jours",
      ],
      ctaText: "Réserver l'Hégémonie",
    },
    {
      id: "sovereign",
      name: "Domination Souveraine",
      subtitle: "Dispositif cross-médias pour lancements et temps forts (Black Friday).",
      priceOneOff: "39 000 €",
      priceLabel: "HT / temps fort",
      popular: false,
      deliverables: [
        "18 contenus GEO cross-verticales",
        "6 infiltrations de dossiers majeurs",
        "4 tableaux comparatifs en top position",
        "Banc d'essai labo & mesures certifiées",
        "12 FAQ sémantiques + 4 topics forums",
        "Label ou mention de recommandation",
        "Dashboard temps réel 6 mois",
      ],
      ctaText: "Planifier la Domination",
    },
  ];

  return (
    <section id="tarifs" className="py-20 sm:py-24 bg-white border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="press-eyebrow">Packages & tarifs</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            La carte tarifaire de l&apos;autorité,
            <br />
            sans brief régie de trois mois.
          </h2>
        </div>

        {/* Cartes tarifaires */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`press-card flex flex-col ${
                plan.popular ? "border-ink shadow-[0_18px_50px_-24px_rgba(23,24,29,0.4)]" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-ink text-paper px-7 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Le plus sélectionné
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                <h3 className="press-title text-xl">{plan.name}</h3>
                <p className="mt-2 text-xs text-graphite leading-relaxed">{plan.subtitle}</p>

                <div className="mt-6 border-y border-ink/20 py-4 flex items-baseline gap-2.5">
                  <span
                    className={`press-num text-4xl leading-none ${
                      plan.popular ? "text-press" : "text-ink"
                    }`}
                  >
                    {plan.priceOneOff}
                  </span>
                  <span className="text-xs text-stone uppercase tracking-[0.1em]">
                    {plan.priceLabel}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.deliverables.map((item) => (
                    <li key={item} className="text-[13px] text-graphite leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPlan(plan.name, plan.priceOneOff)}
                  className={`mt-8 w-full btn-press ${
                    plan.popular ? "btn-press-red" : "btn-press-ink"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparaison */}
        <div className="mt-16 max-w-3xl">
          <p className="press-eyebrow">Face à la régie traditionnelle</p>
          <div className="mt-5 border-y border-ink/20">
            {[
              { left: "Régie traditionnelle", right: "50 – 100 k€ d'entrée, 60 à 90 jours" },
              { left: "AnswerPress", right: "Dès 4 900 €, en ligne en 10 jours", accent: true },
              { left: "Monitoring AnswerShaper", right: "Inclus, radar 12 critères" },
            ].map((row, idx) => (
              <div
                key={idx}
                className={`py-4 flex items-baseline justify-between gap-6 ${
                  idx > 0 ? "border-t border-ink/15" : ""
                }`}
              >
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                    row.accent ? "text-press" : "text-stone"
                  }`}
                >
                  {row.left}
                </p>
                <p className={`text-sm text-right ${row.accent ? "text-press font-semibold" : "text-ink"}`}>
                  {row.right}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
