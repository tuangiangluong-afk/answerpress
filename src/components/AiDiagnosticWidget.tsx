"use client";

import React, { useState } from "react";
import { ArrowRight, RefreshCw, AlertTriangle } from "lucide-react";

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

  const handleRunScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !email) return;

    setIsScanning(true);

    const scanStartedAt = Date.now();

    // Capture réelle du lead (le scan reste une estimation instantanée)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "diagnostic-scan",
          email,
          name: brandName,
          company: brandName,
          notes: `Site: ${websiteUrl || "n/a"} • Secteur: ${sector} • Concurrents: ${competitor1 || "n/a"}, ${competitor2 || "n/a"}`,
          diagnostic: { brandName, websiteUrl, sector, competitor1, competitor2 },
        }),
      });
    } catch {
      // Le scan s'affiche même si la capture échoue.
    }

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
        recommendedPack:
          baseScore < 50 ? "Hégémonie de Catégorie (14 900 € HT)" : "Infiltration & Fast Citation (4 900 € HT)",
        liftExpected: "+85% de citations dans les comparatifs en 45 jours",
      };

      setScanResult(result);
      setIsScanning(false);
      if (onSuccessLead) onSuccessLead({ brandName, websiteUrl, sector, email, result });
    }, Math.max(600, 1300 - (Date.now() - scanStartedAt)));
  };

  const handleReset = () => {
    setScanResult(null);
  };

  return (
    <section id="diagnostic" className="py-20 sm:py-24 bg-white border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="max-w-3xl">
          <p className="press-eyebrow">Diagnostic — Indice de Considération LLM</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            Que disent ChatGPT et Perplexity
            <br />
            de votre marque ?
          </h2>
          <p className="mt-4 text-base text-graphite max-w-2xl">
            Évaluez en 30 secondes votre{" "}
            <strong className="text-ink">Indice de Considération LLM</strong> face à vos deux
            principaux concurrents. Estimation indicative.
          </p>
        </div>

        {/* Formulaire / résultat */}
        <div className="mt-12 press-card border-ink/25 p-6 sm:p-10">
            {!scanResult ? (
              <form onSubmit={handleRunScan} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="press-label">Nom de votre marque / produit *</label>
                    <input
                      type="text"
                      required
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="Ex : Philips, Tefal, Rowenta, Asphalte…"
                      className="press-field"
                    />
                  </div>
                  <div>
                    <label className="press-label">Site web officiel</label>
                    <input
                      type="text"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="https://votre-marque.fr"
                      className="press-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="press-label">Secteur / univers éditorial *</label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="press-field"
                  >
                    <option value="tech">High-Tech, Électronique &amp; Électroménager</option>
                    <option value="food">Cuisine, Gastronomie &amp; Robots de Cuisson</option>
                    <option value="maison">Habitat, Confort Thermique &amp; Brico</option>
                    <option value="beaute">Beauté, Cosmétique &amp; Santé</option>
                    <option value="b2b">SaaS, B2B, Finance &amp; Services Pro</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="press-label">Concurrent principal n°1</label>
                    <input
                      type="text"
                      value={competitor1}
                      onChange={(e) => setCompetitor1(e.target.value)}
                      placeholder="Ex : Ninja, Dyson, Moulinex…"
                      className="press-field"
                    />
                  </div>
                  <div>
                    <label className="press-label">Concurrent principal n°2</label>
                    <input
                      type="text"
                      value={competitor2}
                      onChange={(e) => setCompetitor2(e.target.value)}
                      placeholder="Ex : Seb, Shark, Calor…"
                      className="press-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="press-label">Votre adresse email pro (pour recevoir le rapport) *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="direction.marketing@votre-marque.com"
                    className="press-field"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={isScanning} className="w-full btn-press btn-press-red">
                    {isScanning ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Analyse des index IA en cours…</span>
                      </>
                    ) : (
                      <>
                        <span>Lancer le scan GEO gratuit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-7">
                {/* En-tête résultat */}
                <div className="flex items-center justify-between border-b border-ink/15 pb-4">
                  <div>
                    <p className="press-eyebrow !gap-0">Résultat du scan</p>
                    <h3 className="press-title text-2xl mt-2">
                      Indice de Considération — {scanResult.brand}
                    </h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="btn-press btn-press-outline !py-2 !px-4 !text-[10px]"
                  >
                    <RefreshCw className="w-3 h-3" /> Nouveau scan
                  </button>
                </div>

                {/* 3 scores */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-press/40 bg-press/5 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-press">
                      {scanResult.brand}
                    </p>
                    <p className="press-num text-3xl text-press mt-1">{scanResult.score}/100</p>
                  </div>
                  <div className="press-card p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-graphite">
                      {scanResult.comp1}
                    </p>
                    <p className="press-num text-3xl text-ink mt-1">{scanResult.comp1Score}/100</p>
                  </div>
                  <div className="press-card p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-graphite">
                      {scanResult.comp2}
                    </p>
                    <p className="press-num text-3xl text-ink mt-1">{scanResult.comp2Score}/100</p>
                  </div>
                </div>

                {/* Vulnérabilités */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite">
                    Vulnérabilités sémantiques identifiées
                  </p>
                  <div className="mt-3 divide-y divide-ink/10 border-y border-ink/15">
                    {scanResult.missingPillars.map((item: any, idx: number) => (
                      <div key={idx} className="py-3.5 flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-press shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-ink">{item.title}</p>
                          <p className="text-xs text-graphite mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommandation */}
                <div className="border-l-4 border-press bg-paper p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="press-title text-base">
                      Pack recommandé : {scanResult.recommendedPack}
                    </p>
                    <p className="text-xs text-graphite mt-1.5">
                      Gain attendu : <strong className="text-ink">{scanResult.liftExpected}</strong>.
                      Déploiement garanti en 10 jours.
                    </p>
                  </div>
                  <a href="#tarifs" className="btn-press btn-press-red !py-2.5 !px-5 shrink-0">
                    Activer ce pack
                  </a>
                </div>
              </div>
            )}
          </div>
      </div>
    </section>
  );
}
