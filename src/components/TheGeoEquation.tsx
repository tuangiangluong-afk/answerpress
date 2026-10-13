"use client";

import React from "react";

export default function TheGeoEquation() {
  return (
    <section id="methodologie" className="py-20 sm:py-24 bg-white border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="max-w-3xl">
          <p className="press-eyebrow">Google classique vs Recommandation IA</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            Pourquoi le SEO classique
            <br />
            ne suffit plus en 2026.
          </h2>
          <p className="mt-4 text-base text-graphite max-w-2xl leading-relaxed">
            Google affiche 10 liens bleus. ChatGPT et Perplexity rédigent une réponse directe et ne conseillent que 2 ou 3 marques. Voici les 4 critères qu&apos;ils utilisent pour trancher :
          </p>
        </div>

        {/* Les 4 piliers */}
        <div className="mt-12 press-card border-ink/25 p-8 sm:p-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite">
            Les 4 piliers analysés par l&apos;IA pour recommander votre produit
          </p>

          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4 sm:gap-5">
            {[
              { lever: "Critère 1", title: "Médias de Référence", sub: "Les Numériques, Marmiton" },
              { lever: "Critère 2", title: "Preuves Chiffrées", sub: "Tests labo et mesures réelles" },
              { lever: "Critère 3", title: "Comparatifs Clairs", sub: "Tableaux et avantages produits" },
              { lever: "Critère 4", title: "Fraîcheur des Infos", sub: "Articles mis à jour en 2026" },
            ].map((item, idx) => (
              <React.Fragment key={item.lever}>
                {idx > 0 && (
                  <span className="press-num text-2xl text-stone self-center">×</span>
                )}
                <div className="press-card px-5 py-4 min-w-[168px] text-center">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-stone">
                    {item.lever}
                  </p>
                  <p className="press-title text-base mt-1">{item.title}</p>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-press">
                    {item.sub}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-ink/20 text-center">
            <p className="press-title text-base sm:text-xl">
              = <span className="text-press">Votre marque recommandée en n°1</span> auprès des acheteurs
            </p>
          </div>
        </div>

        {/* Pipeline */}
        <div className="mt-8 press-card border-ink/25 p-8 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite">
            Architecture du flux — de la publication de presse à la réponse de l&apos;agent IA
          </p>
          <img
            src="/illustrations/rag-inference-flow.svg"
            alt="Pipeline RAG presse et bots IA"
            className="w-full max-h-[320px] object-contain mx-auto mt-5"
          />
        </div>

        {/* Tableau comparatif — mise en page de journal */}
        <div className="mt-12 overflow-x-auto border-y-2 border-ink/70">
          <table className="press-table min-w-[640px]">
            <thead>
              <tr>
                <th className="text-graphite">Critère stratégique</th>
                <th className="text-stone">SEO classique (2015 – 2024)</th>
                <th className="text-press">GEO média AnswerPress (2025 – 2027)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  crit: "Objectif final",
                  seo: "Être cliqué parmi 10 liens bleus",
                  geo: "Être la réponse unique et le choix conseillé",
                },
                {
                  crit: "Source de confiance",
                  seo: "Backlinks sur blogs satellites ou PBNs",
                  geo: "Presse patrimoniale d'autorité (Les Numériques, Marmiton)",
                },
                {
                  crit: "Fréquence de crawl",
                  seo: "Googlebot passe 1 fois par mois",
                  geo: "GPTBot & PerplexityBot crawlent toutes les 15 minutes",
                },
                {
                  crit: "Comportement utilisateur",
                  seo: "Navigation et comparaison manuelle longue",
                  geo: "47 % achètent directement après recommandation du bot",
                },
                {
                  crit: "Format privilégié",
                  seo: "Articles kilométriques farcis de mots-clés",
                  geo: "Infiltrations, tableaux comparatifs, FAQ et bancs d'essai",
                },
                {
                  crit: "Mesure du succès",
                  seo: "Positions de mots-clés (SERP)",
                  geo: "Taux de présence dans les réponses & part de voix IA",
                },
              ].map((row) => (
                <tr key={row.crit}>
                  <td className="press-title !text-[13px]">{row.crit}</td>
                  <td className="text-graphite">{row.seo}</td>
                  <td className="text-ink font-semibold border-l border-press/40">{row.geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
