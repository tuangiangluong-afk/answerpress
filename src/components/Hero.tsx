"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { HeroMediaCockpit } from "@/components/HeroMediaCockpit";

interface HeroProps {
  onOpenAudit: () => void;
  onScrollToPacks: () => void;
}

export default function Hero({ onOpenAudit, onScrollToPacks }: HeroProps) {
  const publisherLogos = [
    { name: "Les Numériques", img: "/media/publishers/les-numeriques.png" },
    { name: "Marmiton", img: "/media/publishers/marmiton.png" },
    { name: "Maison & Travaux", img: "/media/publishers/maison-travaux.png" },
    { name: "Beauté Test", img: "/media/publishers/beaute-test.png" },
    { name: "Science & Vie", img: "/media/publishers/science-vie.png" },
    { name: "Aufeminin", img: "/media/publishers/aufeminin.png" },
  ];

  return (
    <section className="bg-paper pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Proposition de valeur */}
          <div className="lg:col-span-7">
            <p className="press-eyebrow flex items-center gap-2">
              <span>Recommandation d&apos;Achat sur les IA</span>
              <span className="text-stone/40">&bull;</span>
              <time dateTime="2026-10-13" className="text-stone">Édition Octobre 2026</time>
            </p>

            <h1 className="press-title mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.25rem]">
              Ne cherchez plus seulement à être cliqué.
              <br />
              <span className="text-press italic">
                Soyez la marque recommandée par ChatGPT.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-lg text-graphite leading-relaxed">
              Quand vos clients demandent à <strong className="text-ink">ChatGPT, Perplexity ou Google</strong> quel produit acheter, l&apos;IA lit la presse pour choisir. Nous publions vos produits dans les comparatifs de <strong className="text-ink">Les Numériques, Marmiton et Maison &amp; Travaux</strong> pour que l&apos;IA vous recommande en premier.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenAudit} className="btn-press btn-press-red shadow-md shadow-red-600/15">
                <span>Tester mon produit gratuitement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={onScrollToPacks} className="btn-press btn-press-outline">
                Voir les offres — dès 4 900 € HT
              </button>
            </div>

            {/* Titres du réseau */}
            <div className="mt-12">
              <hr className="press-rule-double" />
              <div className="mt-5 grid grid-cols-6 gap-4">
                {publisherLogos.map((pub) => (
                  <div key={pub.name} className="border border-ink/15 bg-white overflow-hidden shadow-xs">
                    <img
                      src={pub.img}
                      alt={pub.name}
                      title={pub.name}
                      className="w-full h-11 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Chiffres clés sans jargon */}
            <div className="mt-10 grid grid-cols-3 border-t border-ink/25">
              {[
                { num: "70 %", label: "Des réponses d'achat ChatGPT citent la presse", accent: true },
                { num: "35 M", label: "De Français consultent ces médias chaque mois" },
                { num: "48 h", label: "Pour que l'IA intègre votre recommandation" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`pt-5 ${idx > 0 ? "border-l border-ink/15 pl-5" : "pr-5"}`}
                >
                  <p
                    className={`press-num text-3xl leading-none ${
                      stat.accent ? "text-press" : "text-ink"
                    }`}
                  >
                    {stat.num}
                  </p>
                  <p className="mt-2 text-xs text-graphite leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preuve en direct */}
          <div className="lg:col-span-5 w-full">
            <HeroMediaCockpit />
          </div>
        </div>
      </div>
    </section>
  );
}
