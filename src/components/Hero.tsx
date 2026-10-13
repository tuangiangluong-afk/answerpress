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
            <p className="press-eyebrow">Generative Engine Optimization</p>

            <h1 className="press-title mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.25rem]">
              Ne cherchez plus à être cliqué.
              <br />
              <span className="text-press italic">
                Devenez la réponse citée par les IA.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-lg text-graphite leading-relaxed">
              AnswerPress fait entrer votre marque dans les guides et bancs d&apos;essai des plus
              grands titres de presse pour verrouiller la recommandation d&apos;achat sur{" "}
              <strong className="text-ink">ChatGPT, Perplexity et Copilot</strong>.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenAudit} className="btn-press btn-press-red">
                <span>Simuler mon Indice de Citation IA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={onScrollToPacks} className="btn-press btn-press-outline">
                Voir les packages — dès 4 900 € HT
              </button>
            </div>

            {/* Titres du réseau */}
            <div className="mt-12">
              <hr className="press-rule-double" />
              <div className="mt-5 grid grid-cols-6 gap-4">
                {publisherLogos.map((pub) => (
                  <div key={pub.name} className="border border-ink/15 bg-white overflow-hidden">
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

            {/* Chiffres clés */}
            <div className="mt-10 grid grid-cols-3 border-t border-ink/25">
              {[
                { num: "12 M+", label: "Crawls IA par jour sur notre réseau" },
                { num: "70 %", label: "Des sources ChatGPT issues des médias", accent: true },
                { num: "10 j", label: "Déploiement clé en main, dès 4 900 € HT" },
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
