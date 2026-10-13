"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Cpu, ShieldCheck } from "lucide-react";
import { HeroMediaCockpit } from "@/components/HeroMediaCockpit";

interface HeroProps {
  onOpenAudit: () => void;
  onScrollToPacks: () => void;
}

export default function Hero({ onOpenAudit, onScrollToPacks }: HeroProps) {
  const publisherLogos = [
    { name: "Les Numériques", img: "/media/publishers/les-numeriques.png", tag: "Tech" },
    { name: "Marmiton", img: "/media/publishers/marmiton.png", tag: "Food" },
    { name: "Maison & Travaux", img: "/media/publishers/maison-travaux.png", tag: "Maison" },
    { name: "Beauté Test", img: "/media/publishers/beaute-test.png", tag: "Cosmétique" },
    { name: "Science & Vie", img: "/media/publishers/science-vie.png", tag: "Science" },
    { name: "Aufeminin", img: "/media/publishers/aufeminin.png", tag: "Féminin" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-neutral-200">
      
      {/* Subtle modern dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#18181B 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-mono font-semibold text-blue-800 mb-6 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>RÉVOLUTION GEO 2026 : LA FIN DU CLIC</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.08] mb-6">
              Ne cherchez plus à être cliqué. <br />
              <span className="text-blue-600">Devenez la réponse citée par les IA.</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              La 1ère centrale d’autorité média &amp; de citations IA. Nous infiltrons les guides et bancs d'essai des plus grands titres de presse (<span className="text-neutral-900 font-bold">Les Numériques</span>, <span className="text-neutral-900 font-bold">Marmiton</span>, <span className="text-neutral-900 font-bold">Maison &amp; Travaux</span>, <span className="text-neutral-900 font-bold">Beauté Test</span>) pour verrouiller la recommandation d'achat sur <span className="text-neutral-900 font-bold">ChatGPT, Perplexity et Copilot</span>.
            </p>

            {/* Pill CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenAudit}
                className="btn-pill-blue px-8 py-4 text-sm w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Simuler mon Indice de Citation IA</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                onClick={onScrollToPacks}
                className="btn-pill-secondary px-7 py-4 text-sm w-full sm:w-auto"
              >
                <span>Voir les Packages (dès 4 900 €)</span>
              </button>
            </div>

            {/* Publisher Visual Strip */}
            <div className="w-full pt-8 border-t border-neutral-200 text-left">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                Diffusion certifiée sur les 12 lovebrands majeures :
              </p>
              
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {publisherLogos.map((pub, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 h-16 shadow-2xs hover:border-blue-400 transition-all cursor-pointer"
                  >
                    <img
                      src={pub.img}
                      alt={pub.name}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white tracking-tight truncate max-w-[90%]">
                      {pub.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* 3 Trust Key Figures */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-neutral-100">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono-num">
                    12M+
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Crawls IA par jour sur notre réseau
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-600 font-mono-num">
                    70%
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Des sources ChatGPT issues des médias
                  </p>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 font-mono-num">
                    4 900 €
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Packagé clé en main sous 10 jours
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: HeroMediaCockpit (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroMediaCockpit />
          </div>

        </div>
      </div>
    </section>
  );
}
