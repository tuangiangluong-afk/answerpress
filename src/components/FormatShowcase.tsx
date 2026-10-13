"use client";

import React from "react";

export default function FormatShowcase() {
  const formats = [
    {
      num: "01",
      name: "L'Infiltration de Guides Existants",
      image: "/media/decks/tefal-deck-1.png",
      desc: "Nous mettons à jour un article pilier existant (ex : « Les meilleurs Airfryers 2026 »), déjà crawlé plusieurs fois par jour par GPTBot. Votre produit y est inséré dans le top 3, sans attendre des semaines d'indexation.",
    },
    {
      num: "02",
      name: "L'Article GEO Natif RAG",
      image: "/media/tefal/image57.png",
      desc: "Rédigé par des journalistes experts selon les critères d'extraction sémantique des LLMs : structure en chunks, micro-résumés, données techniques chiffrées.",
    },
    {
      num: "03",
      name: "Le Tableau Top Position",
      image: "/media/tefal/image59.png",
      desc: "Les modèles d'IA générative ingèrent en priorité les matrices comparatives. Votre produit est placé en haut du tableau, avec son lien marchand affilié ou direct.",
    },
    {
      num: "04",
      name: "Le Banc d'Essai Labo",
      image: "/media/decks/les-numeriques-deck-2.png",
      desc: "Mesures objectives, protocole de test rigoureux et notation indépendante. L'IA a besoin de critères vérifiables pour justifier sa recommandation.",
    },
    {
      num: "05",
      name: "La FAQ Conversationnelle",
      image: "/media/decks/prime-days-2.png",
      desc: "Alimente directement le robot sur les questions d'arbitrage : « Quels sont les défauts ? Est-ce facile à nettoyer ? Quel est le SAV ? »",
    },
    {
      num: "06",
      name: "Le Label & Prix Éditorial",
      image: "/media/decks/prime-days-3.png",
      desc: "L'attribution d'une distinction officielle (« Lauréat Maison & Travaux », « Recommandé par Les Numériques ») : un signal de confiance irréfutable pour le modèle.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-paper border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="press-eyebrow">Les six formats d&apos;inférence</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            Un arsenal éditorial conçu
            <br />
            pour être aspiré par l&apos;IA.
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
