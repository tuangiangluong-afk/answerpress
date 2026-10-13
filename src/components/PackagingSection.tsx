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
      name: "Découverte & Impact Rapide",
      subtitle: "Idéal pour tester sur un produit phare et être recommandé sous 48h.",
      priceOneOff: "4 900 €",
      priceLabel: "HT / activation",
      popular: false,
      deliverables: [
        "2 insertions dans des guides d'achat existants",
        "1 article test dédié rédigé par la rédaction",
        "1 grand média activé (ex : Les Numériques ou Marmiton)",
        "3 réponses aux questions fréquentes d'achat",
        "Audit de départ de vos recommandations",
        "Bilan d'impact et de présence à J+30",
      ],
      ctaText: "Choisir cette offre",
    },
    {
      id: "hegemony",
      name: "Leader de Catégorie",
      subtitle: "Pour saturer votre marché et dépasser vos deux principaux concurrents.",
      priceOneOff: "14 900 €",
      priceLabel: "HT / campagne",
      popular: true,
      deliverables: [
        "5 articles dédiés sur 2 grands médias leaders",
        "3 insertions en tête des guides de référence",
        "1 tableau comparatif avec votre produit en N°1",
        "1 banc d'essai labo avec mesures concrètes",
        "Audit comparatif face à vos concurrents directs",
        "Suivi des recommandations IA pendant 90 jours",
      ],
      ctaText: "Réserver ce pack",
    },
    {
      id: "sovereign",
      name: "Grande Campagne Multi-Médias",
      subtitle: "Dispositif complet pour lancements de produits et temps forts (Black Friday).",
      priceOneOff: "39 000 €",
      priceLabel: "HT / temps fort",
      popular: false,
      deliverables: [
        "18 articles et comparatifs sur tout le réseau",
        "6 insertions dans les grands dossiers d'achat",
        "4 tableaux comparatifs en première position",
        "Banc d'essai complet en laboratoire certifié",
        "Label officiel de recommandation de la rédaction",
        "Tableau de bord de suivi mensuel pendant 6 mois",
      ],
      ctaText: "Planifier la campagne",
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
