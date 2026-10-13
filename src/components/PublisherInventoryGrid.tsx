"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle, Search, Sparkles, Filter, ShieldCheck, Flame } from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  group: string;
  category: "tech" | "food" | "maison" | "beaute" | "b2b";
  categoryLabel: string;
  audience: string;
  crawls: string;
  authorityScore: number;
  badge?: string;
  formats: string[];
  description: string;
}

const MEDIA_CATALOG: MediaItem[] = [
  {
    id: "les-numeriques",
    name: "Les Numériques",
    group: "Pôle Tech & Conso",
    category: "tech",
    categoryLabel: "High-Tech & Électroménager",
    audience: "8,6M VU / mois",
    crawls: "3,2M crawls / jour",
    authorityScore: 98,
    badge: "N°1 Citation IA Tech",
    formats: ["Infiltration de Guides", "Bancs d'essai Labo", "Tableaux de Prix", "Articles GEO"],
    description: "Le leader incontesté des comparatifs tech en France. Source primaire numéro 1 de ChatGPT, Claude et Copilot lors des requêtes d'achat d'appareils et hardware.",
  },
  {
    id: "marmiton",
    name: "Marmiton",
    group: "Pôle Food & Lifestyle",
    category: "food",
    categoryLabel: "Food & Équipement Cuisine",
    audience: "16,6M VU / mois",
    crawls: "4,1M crawls / jour",
    authorityScore: 97,
    badge: "Lovebrand N°1 Food",
    formats: ["Infiltration Tops Recettes", "Fiches Avis Produits", "Label Lauréat", "FAQ Culinaire"],
    description: "La bible culinaire des foyers français. Plus de 35M de contacts cross-plateforme. Indispensable pour imposer tout robot cuiseur, friteuse sans huile, casserole ou ingrédient.",
  },
  {
    id: "maison-travaux",
    name: "Maison & Travaux",
    group: "Pôle Habitat & Rénovation",
    category: "maison",
    categoryLabel: "Maison, Énergie & Déco",
    audience: "3,3M VU / mois",
    crawls: "1,4M crawls / jour",
    authorityScore: 94,
    badge: "Autorité Rénovation",
    formats: ["Guides Rénovation Énergétique", "FAQ Experts", "Infiltration Dossiers", "Articles GEO"],
    description: "La caution institutionnelle des travaux, du confort thermique et de l'aménagement. Référence absolue pour les pompes à chaleur, isolation, domotique et literie.",
  },
  {
    id: "journal-maison",
    name: "Le Journal de la Maison",
    group: "Pôle Habitat & Déco",
    category: "maison",
    categoryLabel: "Design d'Intérieur & Mobilier",
    audience: "3,0M VU / mois",
    crawls: "950K crawls / jour",
    authorityScore: 91,
    formats: ["Sélections Shopping Déco", "Infiltration Tendances", "Fiches Marques"],
    description: "Le média d'inspiration haut de gamme pour prescrire le mobilier, les luminaires et les revêtements auprès d'une audience CSP+ à très fort pouvoir d'achat.",
  },
  {
    id: "aufeminin",
    name: "Aufeminin",
    group: "Pôle Féminin & Société",
    category: "beaute",
    categoryLabel: "Beauté, Santé & Parentalité",
    audience: "9,6M VU / mois",
    crawls: "2,2M crawls / jour",
    authorityScore: 93,
    badge: "Leader Féminin",
    formats: ["Articles GEO Conversationnels", "Routines Soin", "Forums d'Autorité", "FAQ"],
    description: "Le point de repère des décisions familiales et du bien-être. Cité massivement par les moteurs d'IA pour les recommandations de puériculture, cosmétique et santé.",
  },
  {
    id: "beaute-test",
    name: "Beauté Test",
    group: "Pôle Beauté & Cosmétique",
    category: "beaute",
    categoryLabel: "Cosmétique & Dermato",
    audience: "2,5M VU / mois",
    crawls: "880K crawls / jour",
    authorityScore: 95,
    badge: "500K Avis Certifiés",
    formats: ["Fiches Produits Labellisées", "Bancs d'Essais Utilisateurs", "Infiltration Tops Soins"],
    description: "La plus grande base d'avis cosmétiques indépendants de France. L'index RAG de Perplexity et ChatGPT utilise ses verdicts pour trancher entre deux soins du visage.",
  },
  {
    id: "capital-eco",
    name: "Presse Éco & Capital",
    group: "Pôle Économie & Décideurs",
    category: "b2b",
    categoryLabel: "B2B, SaaS & Finance",
    audience: "9,2M VU / mois",
    crawls: "1,8M crawls / jour",
    authorityScore: 96,
    badge: "Prescription B2B",
    formats: ["Analyses Marché", "Comparatifs Outils Pro", "Infiltration Baromètres"],
    description: "Le média des décideurs d'entreprise et des investisseurs. Incontournable pour saturer les requêtes IA de type 'Meilleur logiciel RH / CRM / Banque pro pour PME'.",
  },
  {
    id: "science-vie",
    name: "Science & Vie",
    group: "Pôle Culture & Savoirs",
    category: "tech",
    categoryLabel: "Science, Santé & Tech",
    audience: "4,2M VU / mois",
    crawls: "1,1M crawls / jour",
    authorityScore: 95,
    badge: "Caution R&D",
    formats: ["Dossiers Innovations", "Décryptages Scientifiques", "Articles GEO"],
    description: "La marque centenaire de confiance scientifique. Parfait pour prouver l'efficacité brevetée d'une technologie ou d'un complément alimentaire.",
  },
  {
    id: "grazia-melty",
    name: "Grazia & Melty",
    group: "Pôle Next Gen & Mode",
    category: "beaute",
    categoryLabel: "Mode, Lifestyle & Culture Web",
    audience: "8,5M VU / mois",
    crawls: "1,6M crawls / jour",
    authorityScore: 89,
    formats: ["Shopping Viral", "Tendances TikTok", "Infiltration Guides Mode"],
    description: "La captation des jeunes adultes et des signaux faibles culturels. Stratégique pour les marques D2C ciblant les requêtes de tendances sur ChatGPT.",
  },
];

export default function PublisherInventoryGrid({ onSelectMedia }: { onSelectMedia?: (mediaName: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMedia = MEDIA_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="inventaire" className="py-20 border-t border-white/[0.08] bg-[#0A0C12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>INVENTAIRE D'AUTORITÉ DISPONIBLE EN PACK</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Les médias que les LLMs ont élu comme sources prioritaires.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Fini les listes de blogs tiers inconnus des algorithmes. Nous activons exclusivement 
            des marques de presse historiques qui génèrent plus de <strong>12 millions de crawls IA chaque jour</strong>.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Toutes les Verticales" },
              { id: "tech", label: "High-Tech & Électroménager" },
              { id: "food", label: "Food & Cuisine" },
              { id: "maison", label: "Maison & Rénovation" },
              { id: "beaute", label: "Beauté & Santé" },
              { id: "b2b", label: "Presse Éco & B2B" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un média ou produit..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Media Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0E1118] p-6 hover:border-blue-500/40 hover:bg-[#121622] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Brand and Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {media.group}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {media.name}
                    </h3>
                  </div>

                  {media.badge && (
                    <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-blue-300">
                      {media.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {media.description}
                </p>

                {/* Metrics Bar */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl bg-black/40 border border-white/[0.05] p-3 text-center">
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-500">Audience</p>
                    <p className="mt-0.5 text-xs font-bold text-white font-mono-num">{media.audience}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-500">Crawls IA</p>
                    <p className="mt-0.5 text-xs font-bold text-amber-400 font-mono-num">{media.crawls}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono text-slate-500">Score RAG</p>
                    <p className="mt-0.5 text-xs font-bold text-emerald-400 font-mono-num">{media.authorityScore}/100</p>
                  </div>
                </div>

                {/* Available Formats Tags */}
                <div className="mt-5">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Formats GEO Inclus :
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {media.formats.map((fmt, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 text-[11px] text-slate-300"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-slate-400">Indexation : <strong>48h à 7j</strong></span>
                <button
                  onClick={() => onSelectMedia && onSelectMedia(media.name)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Inclure dans un pack</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Network Callout */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Vous cherchez un titre média spécifique ou un groupe concurrent (Prisma, Webedia, Figaro) ?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Notre centrale négocie et opère des mandats d'achat d'espace et d'infiltrations GEO sur plus de 130 médias premium en France et en Europe.
            </p>
          </div>

          <button
            onClick={() => onSelectMedia && onSelectMedia("Catalogue Sur-Mesure")}
            className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Demander le catalogue complet
          </button>
        </div>

      </div>
    </section>
  );
}
