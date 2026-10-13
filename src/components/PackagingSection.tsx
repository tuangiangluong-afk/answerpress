"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

interface PackagingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export default function PackagingSection({ onSelectPlan }: PackagingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"one-off" | "annual">("one-off");

  const plans = [
    {
      id: "starter",
      name: "Infiltration & Fast Citation",
      subtitle: "Pour 1 produit héros ou tester la puissance du GEO sur les LLMs",
      priceOneOff: "4 900 €",
      priceLabel: "HT / activation",
      popular: false,
      badge: "Pack Découverte",
      description: "Intégrez immédiatement l'index des IA sans passer par le cycle lourd des régies.",
      deliverables: [
        { label: "2 Infiltrations de guides historiques", detail: "Sur des articles déjà crawlés quotidiennement par GPTBot" },
        { label: "1 Article GEO natif optimisé RAG", detail: "Rédigé selon l'équation sémantique des modèles" },
        { label: "3 FAQ sémantiques ciblées", detail: "Extractibles pour les réponses directes ChatGPT / Perplexity" },
        { label: "1 Média de premier rang activé", detail: "Au choix : Les Numériques, Aufeminin, Maison & Travaux..." },
        { label: "Audit T0 AnswerShaper inclus", detail: "Cartographie de départ sur 10 prompts d'intention d'achat" },
        { label: "Rapport de persistance à J+30", detail: "Preuve chiffrée de présence dans les réponses génératives" },
      ],
      ctaText: "Commander ce Pack",
    },
    {
      id: "hegemony",
      name: "Hégémonie de Catégorie",
      subtitle: "Pour saturer une verticale et dépasser vos 2 concurrents principaux",
      priceOneOff: "14 900 €",
      priceLabel: "HT / campagne",
      popular: true,
      badge: "Le Plus Sélectionné",
      description: "Le dispositif recommandé par les experts média pour verrouiller les requêtes d'achat.",
      deliverables: [
        { label: "5 Articles GEO natifs sur 2 médias majeurs", detail: "Ex: Les Numériques + Maison & Travaux ou Marmiton + Aufeminin" },
        { label: "3 Infiltrations de guides de référence", detail: "Mise à jour des sélections d'achats top-positions" },
        { label: "1 Top position tableau de prix / mois", detail: "Le format aspiré en priorité par Copilot et Perplexity" },
        { label: "1 Fiche test / Banc d'essai labellisé", detail: "Mesures objectives et validation de réassurance" },
        { label: "6 FAQ conversationnelles & 2 forums", detail: "Pour saturer les requêtes de questions d'usage et prix" },
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
        { label: "Label ou Mention de recommandation", detail: "Ex: Sélection officielle ou lauréat thématique" },
        { label: "Dashboard AnswerShaper temps réel 6 mois", detail: "Suivi de 50 prompts, alertes de décrochage IA et reporting comex" },
      ],
      ctaText: "Planifier la Domination",
    },
  ];

  return (
    <section id="tarifs" className="py-24 border-t border-white/[0.08] bg-[#08090C] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>PACKAGES MÉDIA TRANSPARENTS — ZÉRO SURPRISE</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Comme une plateforme de netlinking, mais pour l'autorité des LLMs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Fini les briefs régie de 3 mois et les tickets d'entrée à 100 000 €. Choisissez votre pack, 
            vos médias d'autorité, et nous déployons la saturation sémantique sous 10 jours ouvrés.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#131B2E] via-[#0E1322] to-[#0A0D17] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-2"
                  : "bg-[#0E1118] border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {/* Badge for Popular */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.popular && (
                  <span className="inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-300 min-h-[36px]">{plan.subtitle}</p>

                {/* Price block */}
                <div className="mt-6 flex items-baseline gap-2 border-b border-white/[0.08] pb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono-num">
                    {plan.priceOneOff}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{plan.priceLabel}</span>
                </div>

                <p className="mt-4 text-xs text-slate-400 italic">
                  {plan.description}
                </p>

                {/* Deliverables list */}
                <div className="mt-6 space-y-3.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Livrables Clés Inclus :
                  </p>
                  {plan.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-blue-500/20 p-1 text-blue-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs sm:text-sm font-semibold text-slate-200">{item.label}</p>
                        <p className="text-[11px] text-slate-400">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <button
                  onClick={() => onSelectPlan(plan.name, plan.priceOneOff)}
                  className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/25 hover:scale-[1.02]"
                      : "bg-white/[0.08] text-white hover:bg-white/[0.14]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-2 text-[10px] text-center text-slate-500">
                  Déploiement garanti en 10 jours ouvrés • Contrats transparents
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout vs Traditional Regie */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#0E1118] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                POURQUOI CE FORMAT CHANGE TOUT
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                Régie Média Traditionnelle vs AnswerPress
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Les grandes régies média vendent du "sur-mesure" avec 3 intermédiaires, des plannings de 6 mois et des budgets inabordables. AnswerPress pré-négocie les inventaires et standardise la production sémantique au format exact que les crawlers IA recherchent.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-red-950/20 border border-red-500/20 p-3 text-xs">
                <span className="text-red-300 font-medium">Régie Traditionnelle : 50k€ - 100k€ ticket d'entrée</span>
                <span className="text-red-400 font-mono">Délai 60-90 jours</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-emerald-950/20 border border-emerald-500/30 p-3 text-xs">
                <span className="text-emerald-300 font-bold">AnswerPress : Dès 4 900 € en package transparent</span>
                <span className="text-emerald-400 font-mono font-bold">En ligne en 10 jours</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-blue-950/20 border border-blue-500/20 p-3 text-xs">
                <span className="text-blue-300 font-medium">Monitoring AnswerShaper natif inclus</span>
                <span className="text-blue-400 font-mono">Radar 12 critères</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
