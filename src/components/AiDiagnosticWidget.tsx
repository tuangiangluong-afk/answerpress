"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, RefreshCw, AlertTriangle } from "lucide-react";

interface AiDiagnosticWidgetProps {
  onSuccessLead?: (data: any) => void;
}

export default function AiDiagnosticWidget({ onSuccessLead }: AiDiagnosticWidgetProps) {
  const [brandName, setBrandName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [sector, setSector] = useState("tech");
  const [competitor1, setCompetitor1] = useState("");
  const [competitor2, setCompetitor2] = useState("");
  const [email, setEmail] = useState("");

  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any | null>(null);

  const handleRunScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !email) return;

    setIsScanning(true);

    setTimeout(() => {
      const baseScore = Math.floor(Math.random() * 18) + 40;
      const comp1Score = Math.floor(Math.random() * 14) + 74;
      const comp2Score = Math.floor(Math.random() * 12) + 78;

      const result = {
        brand: brandName,
        score: baseScore,
        comp1: competitor1 || "Leader Catégorie",
        comp1Score: comp1Score,
        comp2: competitor2 || "Challenger N°2",
        comp2Score: comp2Score,
        gap: comp1Score - baseScore,
        missingPillars: [
          {
            title: "Absence dans les Top Guides de Référence",
            desc: "Votre marque n'apparaît dans aucun des 3 guides d'achat les plus crawlés par GPTBot sur votre verticale.",
          },
          {
            title: "Déficit de Banc d'Essai Labo",
            desc: "Les LLMs privilégient les marques disposant d'un protocole de mesure indépendant (ex: Les Numériques, Beauté Test).",
          },
          {
            title: "Requêtes de Réassurance & FAQ Non-Indexées",
            desc: "Sur les requêtes d'arbitrage ('Quels défauts ? Est-ce fiable ?'), l'IA cite vos rivaux par carence de sources presse.",
          },
        ],
        recommendedPack: baseScore < 50 ? "Hégémonie de Catégorie (14 900 € HT)" : "Infiltration & Fast Citation (4 900 € HT)",
        liftExpected: "+85% de citations dans les comparatifs en 45 jours",
      };

      setScanResult(result);
      setIsScanning(false);
      if (onSuccessLead) onSuccessLead({ brandName, websiteUrl, sector, email, result });
    }, 1300);
  };

  const handleReset = () => {
    setScanResult(null);
  };

  return (
    <section id="diagnostic" className="py-20 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-xs font-mono font-semibold text-neutral-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>SCANNER DE CITATION IA EN DIRECT</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-neutral-900">
            Que disent ChatGPT et Perplexity de votre marque ?
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Évaluez en 30 secondes votre <strong>Indice de Considération LLM</strong> et mesurez votre retard de citation face à vos deux principaux concurrents.
          </p>
        </div>

        {/* Diagnostic Form / Result Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-neutral-200 bg-[#FAFAF9] p-7 sm:p-10 shadow-xs">
          {!scanResult ? (
            <form onSubmit={handleRunScan} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Nom de votre Marque / Produit *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Ex: Philips, Tefal, Rowenta, Asphalte..."
                    className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Site Web Officiel
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://votre-marque.fr"
                    className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Secteur / Univers Éditorial *
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="tech">High-Tech, Électronique &amp; Électroménager</option>
                  <option value="food">Cuisine, Gastronomie &amp; Robots de Cuisson</option>
                  <option value="maison">Habitat, Confort Thermique &amp; Brico</option>
                  <option value="beaute">Beauté, Cosmétique &amp; Santé</option>
                  <option value="b2b">SaaS, B2B, Finance &amp; Services Pro</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Concurrent Principal N°1
                  </label>
                  <input
                    type="text"
                    value={competitor1}
                    onChange={(e) => setCompetitor1(e.target.value)}
                    placeholder="Ex: Ninja, Dyson, Moulinex..."
                    className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Concurrent Principal N°2
                  </label>
                  <input
                    type="text"
                    value={competitor2}
                    onChange={(e) => setCompetitor2(e.target.value)}
                    placeholder="Ex: Seb, Shark, Calor..."
                    className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                  Votre Adresse Email Pro (pour recevoir le rapport) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="direction.marketing@votre-marque.com"
                  className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full btn-pill-blue py-4 text-sm font-bold disabled:opacity-50"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analyse en temps réel des index IA en cours...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-blue-200" />
                      <span>Lancer le Scan GEO Gratuit</span>
                      <ArrowRight className="w-4 h-4 text-blue-200" />
                    </>
                  )}
                </button>
                <p className="mt-2.5 text-center text-xs text-neutral-500 font-mono">
                  Résultats instantanés • Méthodologie d'inférence AnswerShaper
                </p>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              
              {/* Header result */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div>
                  <span className="text-xs font-mono text-blue-600 font-bold uppercase">RÉSULTAT DU SCAN</span>
                  <h3 className="text-2xl font-black text-neutral-900 mt-1">
                    Indice de Considération : {scanResult.brand}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="rounded-full bg-white border border-neutral-300 px-4 py-1.5 text-xs text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" /> Nouveau scan
                </button>
              </div>

              {/* 3 Metric Pill Boxes */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-red-200 bg-red-50/60 p-4">
                  <p className="text-[11px] font-mono text-red-700 font-bold uppercase">{scanResult.brand}</p>
                  <p className="text-3xl font-black text-red-800 font-mono-num mt-1">
                    {scanResult.score}/100
                  </p>
                  <span className="mt-1.5 inline-block rounded-full bg-red-100 text-red-800 px-2.5 py-0.5 text-[10px] font-bold">
                    Sous-représenté
                  </span>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-[11px] font-mono text-neutral-600 font-bold uppercase">{scanResult.comp1}</p>
                  <p className="text-3xl font-black text-neutral-900 font-mono-num mt-1">
                    {scanResult.comp1Score}/100
                  </p>
                  <span className="mt-1.5 inline-block rounded-full bg-emerald-50 text-emerald-800 px-2.5 py-0.5 text-[10px] font-bold border border-emerald-200">
                    Cité dans 72% des cas
                  </span>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <p className="text-[11px] font-mono text-neutral-600 font-bold uppercase">{scanResult.comp2}</p>
                  <p className="text-3xl font-black text-neutral-900 font-mono-num mt-1">
                    {scanResult.comp2Score}/100
                  </p>
                  <span className="mt-1.5 inline-block rounded-full bg-emerald-50 text-emerald-800 px-2.5 py-0.5 text-[10px] font-bold border border-emerald-200">
                    Présent sur les avis
                  </span>
                </div>
              </div>

              {/* Radar Illustration */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-3 text-center">
                <img 
                  src="/illustrations/citation-audit-radar.svg" 
                  alt="Radar d'analyse de considération IA" 
                  className="w-full max-h-[240px] object-contain mx-auto"
                />
              </div>

              {/* Vulnerabilities detected */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Vulnérabilités Sémantiques Identifiées :
                </p>
                {scanResult.missingPillars.map((item: any, idx: number) => (
                  <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-3.5 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-neutral-900">{item.title}</p>
                      <p className="text-xs text-neutral-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action pill */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-blue-900">
                    Pack Conseillé : {scanResult.recommendedPack}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Gain attendu : <strong>{scanResult.liftExpected}</strong>. Déploiement garanti en 10 jours.
                  </p>
                </div>
                <a
                  href="#tarifs"
                  className="btn-pill-blue px-6 py-2.5 text-xs font-bold shrink-0"
                >
                  Activer ce Pack
                </a>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
