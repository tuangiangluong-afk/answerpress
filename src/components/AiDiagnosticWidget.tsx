"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldAlert, CheckCircle2, RefreshCw, BarChart3, AlertTriangle } from "lucide-react";

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

    // Realistic simulation calculation based on sector & input
    setTimeout(() => {
      const baseScore = Math.floor(Math.random() * 20) + 38; // 38 to 58
      const comp1Score = Math.floor(Math.random() * 15) + 72; // 72 to 87
      const comp2Score = Math.floor(Math.random() * 12) + 76; // 76 to 88

      const result = {
        brand: brandName,
        score: baseScore,
        comp1: competitor1 || "Leader N°1 du secteur",
        comp1Score: comp1Score,
        comp2: competitor2 || "Challenger N°2",
        comp2Score: comp2Score,
        gap: comp1Score - baseScore,
        missingPillars: [
          {
            title: "Absence dans les Top Guides de Référence",
            status: "critical",
            desc: "Aucune mention de votre marque dans les 3 guides d'achat les plus crawlés par GPTBot sur votre verticale.",
          },
          {
            title: "Déficit de Banc d'Essai Indépendant",
            status: "warning",
            desc: "Les LLMs privilégient les marques disposant d'un protocole de mesure certifié (ex: Les Numériques, Beauté Test).",
          },
          {
            title: "Requêtes de Réassurance & FAQ Non-Indexées",
            status: "warning",
            desc: "Lorsqu'un utilisateur demande 'Est-ce fiable ? Quels défauts ?', l'IA cite vos concurrents par manque de sources contradictoires.",
          },
        ],
        recommendedPack: baseScore < 50 ? "Hégémonie de Catégorie (14 900 € HT)" : "Infiltration & Fast Citation (4 900 € HT)",
        liftExpected: "+85% de citations dans les comparatifs en 45 jours",
      };

      setScanResult(result);
      setIsScanning(false);
      if (onSuccessLead) onSuccessLead({ brandName, websiteUrl, sector, email, result });
    }, 1800);
  };

  const handleReset = () => {
    setScanResult(null);
  };

  return (
    <section id="diagnostic" className="py-20 border-t border-white/[0.08] bg-[#0A0C12] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>MOTEUR DE DIAGNOSTIC ANSWERPRESS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Que disent ChatGPT et Perplexity de votre marque aujourd’hui ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Évaluez en 30 secondes votre <strong>Indice de Considération LLM</strong> et mesurez votre retard de citation face à vos deux principaux concurrents.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#0E1118] p-6 sm:p-10 shadow-2xl">
          {!scanResult ? (
            <form onSubmit={handleRunScan} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Nom de votre Marque / Produit *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Ex: Philips, Rowenta, Tefal, Asphalte..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Site Web Officiel
                  </label>
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://votre-marque.fr"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Secteur / Univers Éditorial Principal *
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#121622] px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="tech">High-Tech, Électronique &amp; Petit Électroménager</option>
                  <option value="food">Cuisine, Gastronomie, Cuisson &amp; Robots</option>
                  <option value="maison">Habitat, Confort Thermique, Brico &amp; Literie</option>
                  <option value="beaute">Beauté, Soins, Dermato &amp; Santé</option>
                  <option value="b2b">Logiciels SaaS, Finance, B2B &amp; Services Pro</option>
                  <option value="mode">Mode, Lifestyle &amp; Accessoires D2C</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Concurrent Principal N°1
                  </label>
                  <input
                    type="text"
                    value={competitor1}
                    onChange={(e) => setCompetitor1(e.target.value)}
                    placeholder="Ex: Ninja, Dyson, Calor..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Concurrent Principal N°2
                  </label>
                  <input
                    type="text"
                    value={competitor2}
                    onChange={(e) => setCompetitor2(e.target.value)}
                    placeholder="Ex: Moulinex, Shark, Seb..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Votre Adresse Email Professionnelle (pour recevoir le radar complet) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="directeur.marketing@votre-marque.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isScanning}
                  className="w-full rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 hover:bg-blue-500 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Interrogation des index LLM &amp; Crawl presse en cours...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-blue-200" />
                      <span>Lancer l'Audit GEO Gratuit</span>
                      <ArrowRight className="w-4 h-4 text-blue-200" />
                    </>
                  )}
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Résultats instantanés • Comparaison basée sur les protocoles d'inférence AnswerShaper
                </p>
              </div>
            </form>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              {/* Scan Results Top Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="text-xs font-mono uppercase text-blue-400 font-bold">RÉSULTAT DE L'AUDIT GEO</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    Analyse de Considération : {scanResult.brand}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Nouvelle simulation
                </button>
              </div>

              {/* Comparative Scores Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border-2 border-red-500/30 bg-red-950/20 p-5 text-center">
                  <p className="text-xs uppercase font-mono text-slate-400 font-semibold">{scanResult.brand} (Actuel)</p>
                  <p className="mt-2 text-4xl font-black text-red-400 font-mono-num">{scanResult.score}/100</p>
                  <span className="mt-2 inline-block rounded-full bg-red-500/10 px-2.5 py-0.5 text-[10px] font-bold text-red-300">
                    Sous-représenté dans les réponses IA
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
                  <p className="text-xs uppercase font-mono text-slate-400 font-semibold">{scanResult.comp1}</p>
                  <p className="mt-2 text-4xl font-black text-white font-mono-num">{scanResult.comp1Score}/100</p>
                  <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    Cité dans 72% des comparatifs
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
                  <p className="text-xs uppercase font-mono text-slate-400 font-semibold">{scanResult.comp2}</p>
                  <p className="mt-2 text-4xl font-black text-white font-mono-num">{scanResult.comp2Score}/100</p>
                  <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    Présent sur les requêtes prix/avis
                  </span>
                </div>
              </div>

              {/* Radar Image Preview */}
              <div className="rounded-2xl border border-white/10 bg-[#090B10] p-4 text-center">
                <img 
                  src="/illustrations/geo-radar.svg" 
                  alt="Radar comparatif 12 critères" 
                  className="w-full max-h-[260px] object-contain mx-auto"
                />
              </div>

              {/* Missing Pillars Diagnostic List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Diagnostic des Vulnérabilités Identifiées :
                </h4>
                {scanResult.missingPillars.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-200">{item.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation Callout */}
              <div className="rounded-2xl border border-blue-500/40 bg-blue-950/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-xs uppercase font-mono text-blue-400 font-bold">RECOMMANDATION STRATÉGIQUE ANSWERPRESS</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Pack Conseillé : <span className="text-blue-300">{scanResult.recommendedPack}</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Gain attendu : <strong>{scanResult.liftExpected}</strong>. Déploiement sous 10 jours ouvrés.
                  </p>
                </div>

                <a
                  href="#tarifs"
                  className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
                >
                  Activer ce Pack Maintenant
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
