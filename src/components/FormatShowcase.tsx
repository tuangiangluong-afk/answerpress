"use client";

import React from "react";

export default function FormatShowcase() {
  const formats = [
    {
      num: "01",
      name: "La 1ère place dans les guides existants",
      image: "/media/decks/tefal-deck-1.png",
      desc: "Votre produit est inséré directement dans les guides d'achat déjà les plus consultés (ex : « Les meilleurs Airfryers 2026 »). Vous captez immédiatement les recommandations de l'IA sans attendre.",
    },
    {
      num: "02",
      name: "L'article test dédié par la rédaction",
      image: "/media/tefal/image57.png",
      desc: "Rédigé par les journalistes experts du média : mise en avant de vos points forts, photos en situation réelle et avis tranché pour guider le choix des acheteurs.",
    },
    {
      num: "03",
      name: "Le tableau comparatif en tête d'article",
      image: "/media/tefal/image59.png",
      desc: "Les IA adorent les tableaux pour comparer les produits. Le vôtre est placé en haut du comparatif avec son prix, ses avantages et le lien direct d'achat.",
    },
    {
      num: "04",
      name: "Le test en laboratoire certifié",
      image: "/media/decks/les-numeriques-deck-2.png",
      desc: "Mesures scientifiques réelles (autonomie, puissance, bruit) et notation indépendante. Des preuves concrètes et indiscutables pour convaincre l'IA.",
    },
    {
      num: "05",
      name: "Les réponses aux questions d'achat",
      image: "/media/decks/prime-days-2.png",
      desc: "L'article répond précisément aux doutes des acheteurs : « Quels sont les défauts ? Est-ce facile à nettoyer ? Que vaut le service après-vente ? »",
    },
    {
      num: "06",
      name: "Le label officiel de la rédaction",
      image: "/media/decks/prime-days-3.png",
      desc: "L'attribution d'un macaron officiel (« Recommandé par Les Numériques », « Choix Maison & Travaux ») réutilisable sur vos packagings et vos fiches e-commerce.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-paper border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="press-eyebrow">Nos formats éditoriaux</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            6 formats dans la presse pour faire
            <br />
            recommander votre produit.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {formats.map((fmt) => (
            <article key={fmt.num}>
              <div className="h-44 w-full overflow-hidden border border-ink/15 bg-white">
                <img
                  src={fmt.image}
                  alt={fmt.name}
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="press-num text-press text-2xl leading-none">{fmt.num}</span>
                <h3 className="press-title text-lg leading-snug">{fmt.name}</h3>
              </div>

              <p className="mt-3 text-[13px] text-graphite leading-relaxed">{fmt.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
