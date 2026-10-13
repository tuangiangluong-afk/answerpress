"use client";

import React from "react";
import { Check, ArrowRight, Zap, ShieldCheck } from "lucide-react";

interface PackagingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export default function PackagingSection({ onSelectPlan }: PackagingSectionProps) {
  const plans = [
    {
      id: "starter",
      name: "Infiltration & Fast Citation",
      subtitle: "Idéal pour 1 produit héros ou tester le GEO sur les requêtes d'achat",
      priceOneOff: "4 900 €",
      priceLabel: "HT / activation",
      popular: false,
      badge: "Pack Découverte",
      description: "Intégrez l'index des IA sans passer par le cycle lourd et lent des régies.",
      deliverables: [
        { label: "2 Infiltrations de guides existants", detail: "Mise à jour d'articles déjà crawlés chaque jour par GPTBot" },
        { label: "1 Article GEO natif optimisé RAG", detail: "Rédigé selon la grammaire sémantique des modèles" },
        { label: "3 FAQ sémantiques ciblées", detail: "Extractibles pour les réponses directes ChatGPT / Perplexity" },
        { label: "1 Média de 1er rang activé", detail: "Les Numériques, Aufeminin, Maison & Travaux au choix" },
        { label: "Audit T0 AnswerShaper inclus", detail: "Cartographie de départ sur 10 prompts critiques" },
        { label: "Rapport de persistance à J+30", detail: "Preuve chiffrée de présence dans les réponses génératives" },
      ],
      ctaText: "Choisir ce Pack",
    },
    {
      id: "hegemony",
      name: "Hégémonie de Catégorie",
      subtitle: "Pour saturer une verticale et dépasser vos 2 concurrents principaux",
      priceOneOff: "14 900 €",
      priceLabel: "HT / campagne",
      popular: true,
      badge: "Le Plus Sélectionné",
      description: "Le dispositif complet pour verrouiller durablement les comparatifs d'achat.",
      deliverables: [
        { label: "5 Articles GEO natifs sur 2 médias majeurs", detail: "Ex: Les Numériques + Maison & Travaux ou Marmiton + Aufeminin" },
        { label: "3 Infiltrations de guides de référence", detail: "Mise à jour des sélections d'achats top-positions" },
        { label: "1 Top position tableau de prix / mois", detail: "Le format aspiré en priorité par Copilot et Perplexity" },
        { label: "1 Fiche test / Banc d'essai labellisé", detail: "Mesures objectives et validation de réassurance" },
        { label: "6 FAQ conversationnelles & 2 forums", detail: "Pour saturer les requêtes d'usage, fiabilité et SAV" },
        { label: "Audit radar 12 critères AnswerShaper", detail: "Scoring comparatif complet vs 2 concurrents" },
        { label: "Monitoring 25 prompts pendant 90 jours", detail: "Suivi continu de la part de voix IA et des citations" },
      ],
      ctaText: "Réserver l'Hégémonie",
    },
    {
      id: "sovereign",
      name: "Domination Souveraine / Black Friday",
      subtitle: "Dispositif d'écrasement cross-médias pour lancements et temps forts",
      priceOneOff: "39 000 €",
      priceLabel: "HT / temps fort",
      popular: false,
      badge: "Full Impact Multi-Médias",
      description: "L'alternative directe aux offres régie 100k€, opérée et monitorée de bout en bout.",
      deliverables: [
        { label: "18 Contenus GEO cross-verticales", detail: "Déployés sur 3 à 4 médias phares (Tech + Maison + Food/Féminin)" },
        { label: "6 Infiltrations de dossiers mastodontes", detail: "Positionnement en tête de liste avant le pic d'achat" },
        { label: "4 Tops position tableaux comparatifs", detail: "Présence continue sur tous les comparatifs de prix" },
        { label: "Banc d'essai labo & mesures certifiées", detail: "Caution journalistique maximale" },
        { label: "12 FAQ sémantiques + 4 topics forums", detail: "Saut qualitatif de considération algorithmique" },
        { label: "Label ou Mention de recommandation", detail: "Sélection officielle ou lauréat thématique" },
        { label: "Dashboard AnswerShaper temps réel 6 mois", detail: "Suivi de 50 prompts, alertes de décrochage IA et reporting comex" },
      ],
      ctaText: "Planifier la Domination",
    },
  ];

  return (
    <section id="tarifs" className="py-24 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-xs font-mono font-semibold text-neutral-800">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>PACKAGES MÉDIA TRANSPARENTS — ZÉRO SURPRISE</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-neutral-900">
            Comme une plateforme de netlinking, mais pour l'autorité des LLMs.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Fini les briefs régie de 3 mois et les tickets d'entrée à 100 000 €. Choisissez votre pack, vos titres de presse, et nous déployons la saturation sous 10 jours ouvrés.
          </p>
        </div>

        {/* Pricing Cards Grid with Rounded-3xl and Pill Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all bg-[#FAFAF9] ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-md relative bg-white"
                  : "border border-neutral-200 shadow-xs hover:border-neutral-300"
              }`}
            >
              <div>
                {/* Pill Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`rounded-full text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 ${
                      plan.popular
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 min-h-[36px]">{plan.subtitle}</p>

                {/* Price block */}
                <div className="mt-5 flex items-baseline gap-2 border-b border-neutral-200 pb-5">
                  <span className="text-4xl sm:text-5xl font-black text-neutral-900 font-mono-num">
                    {plan.priceOneOff}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">{plan.priceLabel}</span>
                </div>

                <p className="mt-4 text-xs text-neutral-600 italic">
                  {plan.description}
                </p>

                {/* Deliverables */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Livrables Clés Inclus :
                  </p>
                  {plan.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 rounded-full bg-blue-100 p-1 text-blue-700 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-900">{item.label}</p>
                        <p className="text-[11px] text-neutral-500">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pill Action Button */}
              <div className="mt-8 pt-5 border-t border-neutral-200">
                <button
                  onClick={() => onSelectPlan(plan.name, plan.priceOneOff)}
                  className={`w-full rounded-full py-3.5 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? "btn-pill-blue"
                      : "btn-pill-primary"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="mt-2.5 text-[11px] text-center text-neutral-500 font-mono">
                  Déploiement sous 10 jours ouvrés • Contrats transparents
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout */}
        <div className="mt-14 rounded-3xl border border-neutral-200 bg-[#FAFAF9] p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                COMPARAISON OPÉRATIONNELLE
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mt-2">
                Régie Média Traditionnelle vs AnswerPress
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                Les grandes régies média vendent du « sur-mesure » avec 3 intermédiaires, des plannings de 3 mois et des budgets inabordables. AnswerPress pré-négocie les inventaires et standardise la production sémantique au format exact que les crawlers IA recherchent.
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between rounded-full bg-red-50 border border-red-200 px-4 py-2.5">
                <span className="text-red-800 font-medium">Régie Traditionnelle : 50k€ - 100k€ ticket d'entrée</span>
                <span className="text-red-700 font-mono font-semibold">Délai 60-90 jours</span>
              </div>
              <div className="flex items-center justify-between rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2.5">
                <span className="text-emerald-900 font-bold">AnswerPress : Dès 4 900 € en package transparent</span>
                <span className="text-emerald-700 font-mono font-bold">En ligne en 10 jours</span>
              </div>
              <div className="flex items-center justify-between rounded-full bg-blue-50 border border-blue-200 px-4 py-2.5">
                <span className="text-blue-900 font-medium">Monitoring AnswerShaper natif inclus</span>
                <span className="text-blue-700 font-mono font-semibold">Radar 12 critères</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
