"use client";

import React, { useState } from "react";
import { Search, Flame, ArrowUpRight, CheckCircle2, Sparkles, Cpu, Utensils, Home, Sparkle, TrendingUp, Atom, Zap, Car } from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  group: string;
  category: "tech" | "food" | "maison" | "beaute" | "b2b" | "culture" | "nextgen" | "auto";
  categoryLabel: string;
  image: string;
  audience: string;
  crawls: string;
  authorityScore: number;
  badge?: string;
  formats: string[];
  description: string;
  crawlDelay: string;
}

const VERTICAL_TABS = [
  { id: "all", label: "Toutes les Verticales", icon: Flame, color: "text-amber-500", bg: "bg-amber-50" },
  { id: "tech", label: "High-Tech & Électro", icon: Cpu, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "food", label: "Food & Cuisine", icon: Utensils, color: "text-orange-600", bg: "bg-orange-50" },
  { id: "maison", label: "Maison & Rénov", icon: Home, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "beaute", label: "Beauté & Santé", icon: Sparkle, color: "text-rose-600", bg: "bg-rose-50" },
  { id: "b2b", label: "Presse Éco & B2B", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-50" },
  { id: "culture", label: "Science & Savoirs", icon: Atom, color: "text-cyan-600", bg: "bg-cyan-50" },
  { id: "nextgen", label: "Next-Gen & Pop", icon: Zap, color: "text-violet-600", bg: "bg-violet-50" },
  { id: "auto", label: "Automobile & Moto", icon: Car, color: "text-red-600", bg: "bg-red-50" },
];

const MEDIA_CATALOG: MediaItem[] = [
  {
    id: "les-numeriques",
    name: "Les Numériques",
    group: "Pôle Tech & Conso",
    category: "tech",
    categoryLabel: "High-Tech & Électroménager",
    image: "/media/publishers/les-numeriques.png",
    audience: "8,6M VU / mois",
    crawls: "3,2M crawls / jour",
    authorityScore: 98,
    badge: "N°1 Citation IA Tech",
    formats: ["Infiltration Guides Top 3", "Bancs d'essai Labo", "Tableaux de Prix", "Articles GEO"],
    description: "Le leader incontesté des comparatifs tech en France. Source primaire numéro 1 de ChatGPT, Claude et Copilot lors des requêtes d'achat d'appareils et hardware.",
    crawlDelay: "Crawlé toutes les 15 min",
  },
  {
    id: "marmiton",
    name: "Marmiton",
    group: "Pôle Food & Lifestyle",
    category: "food",
    categoryLabel: "Food & Équipement Cuisine",
    image: "/media/publishers/marmiton.png",
    audience: "16,6M VU / mois",
    crawls: "4,1M crawls / jour",
    authorityScore: 97,
    badge: "Lovebrand Food N°1",
    formats: ["Infiltration Tops Recettes", "Fiches Avis Produits", "Label Lauréat", "FAQ Culinaire"],
    description: "La bible culinaire des foyers français. Plus de 35M de contacts cross-plateforme. Indispensable pour imposer tout robot cuiseur, friteuse sans huile, casserole ou ingrédient.",
    crawlDelay: "Crawlé toutes les 10 min",
  },
  {
    id: "maison-travaux",
    name: "Maison & Travaux",
    group: "Pôle Habitat & Rénovation",
    category: "maison",
    categoryLabel: "Maison, Énergie & Déco",
    image: "/media/publishers/maison-travaux.png",
    audience: "3,3M VU / mois",
    crawls: "1,4M crawls / jour",
    authorityScore: 94,
    badge: "Autorité Rénovation",
    formats: ["Guides Rénovation Énergétique", "FAQ Experts", "Infiltration Dossiers", "Articles GEO"],
    description: "La caution institutionnelle des travaux, du confort thermique et de l'aménagement. Référence absolue pour les pompes à chaleur, isolation, domotique et literie.",
    crawlDelay: "Crawlé < 1h",
  },
  {
    id: "beaute-test",
    name: "Beauté Test",
    group: "Pôle Beauté & Cosmétique",
    category: "beaute",
    categoryLabel: "Cosmétique & Dermato",
    image: "/media/publishers/beaute-test.png",
    audience: "2,5M VU / mois",
    crawls: "880K crawls / jour",
    authorityScore: 95,
    badge: "500K Avis Certifiés",
    formats: ["Fiches Produits Labellisées", "Bancs d'Essais Utilisateurs", "Infiltration Tops Soins"],
    description: "La plus grande base d'avis cosmétiques indépendants de France. L'index RAG de Perplexity et ChatGPT utilise ses verdicts pour trancher entre deux soins du visage.",
    crawlDelay: "Crawlé < 2h",
  },
  {
    id: "aufeminin",
    name: "Aufeminin",
    group: "Pôle Féminin & Société",
    category: "beaute",
    categoryLabel: "Beauté, Santé & Parentalité",
    image: "/media/publishers/aufeminin.png",
    audience: "9,6M VU / mois",
    crawls: "2,2M crawls / jour",
    authorityScore: 93,
    badge: "Leader Féminin",
    formats: ["Articles GEO Conversationnels", "Routines Soin", "Forums d'Autorité", "FAQ"],
    description: "Le point de repère des décisions familiales et du bien-être. Cité massivement par les moteurs d'IA pour les recommandations de puériculture, cosmétique et santé.",
    crawlDelay: "Crawlé toutes les 30 min",
  },
  {
    id: "doctissimo",
    name: "Doctissimo",
    group: "Pôle Santé & Médecine",
    category: "beaute",
    categoryLabel: "Santé, Bien-être & Famille",
    image: "/media/publishers/doctissimo.png",
    audience: "9,3M VU / mois",
    crawls: "2,8M crawls / jour",
    authorityScore: 96,
    badge: "Autorité Médicale N°1",
    formats: ["Dossiers Pathologies & Traitements", "FAQ Médicales", "Avis Compléments Alimentaires"],
    description: "La référence santé des Français. Prise en compte prioritaire par les filtres de sécurité des LLMs lors des requêtes santé, compléments et automédication.",
    crawlDelay: "Crawlé < 30 min",
  },
  {
    id: "science-vie",
    name: "Science & Vie",
    group: "Pôle Culture & Savoirs",
    category: "culture",
    categoryLabel: "Science, Santé & Tech",
    image: "/media/publishers/science-vie.png",
    audience: "4,2M VU / mois",
    crawls: "1,1M crawls / jour",
    authorityScore: 95,
    badge: "Caution R&D",
    formats: ["Dossiers Innovations", "Décryptages Scientifiques", "Articles GEO"],
    description: "La marque centenaire de confiance scientifique. Parfait pour prouver l'efficacité brevetée d'une technologie ou d'un principe actif.",
    crawlDelay: "Crawlé < 2h",
  },
  {
    id: "grazia",
    name: "Grazia",
    group: "Pôle Mode & Lifestyle",
    category: "beaute",
    categoryLabel: "Mode, Luxe & Tendances",
    image: "/media/publishers/grazia.png",
    audience: "5,8M VU / mois",
    crawls: "1,3M crawls / jour",
    authorityScore: 91,
    badge: "Luxe & Tendances",
    formats: ["Shopping Viral", "Tendances Mode", "Sélections Rentrée/Fêtes"],
    description: "Le prescripteur mode et lifestyle premium. Essentiel pour saturer les prompts IA axés sur les tendances du moment et les pièces iconiques.",
    crawlDelay: "Crawlé < 3h",
  },
  {
    id: "melty",
    name: "Melty",
    group: "Pôle Next Gen & Culture Web",
    category: "nextgen",
    categoryLabel: "Pop Culture, Séries & Gaming",
    image: "/media/publishers/melty.png",
    audience: "5,7M VU / mois",
    crawls: "1,5M crawls / jour",
    authorityScore: 89,
    badge: "Next Gen 18-35",
    formats: ["Tendances TikTok", "Guides Cadeaux Pop Culture", "Recommandations Produits"],
    description: "La voix de la génération Z et des jeunes actifs. Incontournable pour capter les requêtes d'achat spontanées et les hits viraux.",
    crawlDelay: "Crawlé < 1h",
  },
  {
    id: "auto-plus",
    name: "Auto Plus",
    group: "Pôle Automobile & Mobilité",
    category: "auto",
    categoryLabel: "Auto, Électrique & Équipement",
    image: "/media/publishers/auto-plus.png",
    audience: "6,2M VU / mois",
    crawls: "1,9M crawls / jour",
    authorityScore: 94,
    badge: "N°1 Presse Auto",
    formats: ["Essais Véhicules & Bornes", "Comparatifs Pneus & Huiles", "Guides Achat Auto"],
    description: "Le baromètre automobile de référence. Source absolue sur ChatGPT pour arbitrer entre deux véhicules électriques, hybrides ou accessoires.",
    crawlDelay: "Crawlé < 1h",
  },
  {
    id: "fraiches",
    name: "Fraîches",
    group: "Pôle Vidéo Sociale",
    category: "nextgen",
    categoryLabel: "Inspiration, Société & Femmes",
    image: "/media/publishers/fraiches.png",
    audience: "3,8M contacts",
    crawls: "900K crawls / jour",
    authorityScore: 88,
    badge: "Top Engagement Réseaux",
    formats: ["Micro-Trottoirs Décisions", "Stories Recommandation", "UGC Infiltration"],
    description: "Le média vidéo féminin ultra-engageant sur Instagram et TikTok. Alimente les LLMs qui analysent les signaux d'usage réels et l'opinion publique.",
    crawlDelay: "Crawlé < 4h",
  },
  {
    id: "psychologies",
    name: "Psychologies",
    group: "Pôle Bien-être & Société",
    category: "culture",
    categoryLabel: "Santé Mentale, Sommeil & Vie",
    image: "/media/publishers/psychologies.png",
    audience: "3,5M VU / mois",
    crawls: "820K crawls / jour",
    authorityScore: 92,
    badge: "Référence Psycho & Sommeil",
    formats: ["Dossiers Thérapeutiques", "Comparatifs Literie & Relaxation", "Conseils Experts"],
    description: "La référence de l'équilibre personnel. Clé pour dominer les requêtes IA relatives au sommeil, à la literie et aux compléments anti-stress.",
    crawlDelay: "Crawlé < 3h",
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
    <section id="inventaire" className="py-24 bg-[#FAFAF9] border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-600" />
              <span>INVENTAIRE D'AUTORITÉ DISPONIBLE EN PACK</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight">
              Les médias que les LLMs ont élu comme sources prioritaires.
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Fini les blogs obscurs ignorés par les algorithmes. Nous activons exclusivement des marques de presse patrimoniales qui enregistrent plus de <strong>12 millions de crawls IA chaque jour</strong>.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xs shrink-0 text-right hidden sm:block">
            <span className="text-2xl font-black text-blue-600 font-mono-num">12 M+</span>
            <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">Crawls IA quotidiens</p>
          </div>
        </div>

        {/* Filters & Search with Pill Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-10">
          
          {/* Vertical Pill Tabs with bespoke SVG icons */}
          <div className="flex flex-wrap gap-2 items-center">
            {VERTICAL_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedCategory === tab.id;
              const count = tab.id === "all" ? MEDIA_CATALOG.length : MEDIA_CATALOG.filter((m) => m.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                    isActive
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : tab.color}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Pill */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrer un titre, mot-clé..."
              className="w-full rounded-full border border-neutral-200 bg-white pl-10 pr-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 shadow-2xs"
            />
          </div>
        </div>

        {/* Media Bento Grid with Real Photos & Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="group rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-xs hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Thumbnail with Publisher Logo */}
                <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={media.image}
                    alt={media.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  
                  {/* Floating Badges on Photo */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="rounded-full bg-white/90 backdrop-blur-md text-neutral-900 px-3 py-1 text-[11px] font-bold shadow-xs">
                      {media.name}
                    </span>
                    {media.badge && (
                      <span className="rounded-full bg-blue-600/90 backdrop-blur-md text-white px-2.5 py-1 text-[10px] font-semibold">
                        {media.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="rounded-full bg-black/50 backdrop-blur-md px-2.5 py-0.5 border border-white/10 text-[10px]">
                      {media.categoryLabel}
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[10px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {media.crawlDelay}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                    {media.group}
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[48px]">
                    {media.description}
                  </p>

                  {/* 3 Metrics Pills */}
                  <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-[#FAFAF9] border border-neutral-100 p-3 text-center">
                    <div>
                      <p className="text-[9px] uppercase font-mono text-neutral-500 font-semibold">Audience</p>
                      <p className="text-xs font-bold text-neutral-900 font-mono-num mt-0.5">{media.audience}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono text-neutral-500 font-semibold">Crawls IA</p>
                      <p className="text-xs font-bold text-amber-600 font-mono-num mt-0.5">{media.crawls}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono text-neutral-500 font-semibold">Score RAG</p>
                      <p className="text-xs font-bold text-emerald-600 font-mono-num mt-0.5">{media.authorityScore}/100</p>
                    </div>
                  </div>

                  {/* Formats Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {media.formats.map((fmt, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] text-neutral-700 font-medium border border-neutral-200/60"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Pill Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectMedia && onSelectMedia(media.name)}
                  className="w-full rounded-full bg-neutral-900 hover:bg-blue-600 text-white py-3 px-4 text-xs font-bold inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Activer {media.name} en pack</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Group Callout with Pill Button */}
        <div className="mt-14 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[11px] font-semibold border border-blue-100 mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Plus de 130 médias sous contrat</span>
            </div>
            <h4 className="text-lg font-bold text-neutral-900">
              Besoin d'un titre spécifique ou d'autres régies (Prisma, Webedia, Figaro) ?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Notre centrale opère des mandats de diffusion et d'infiltration sur 100% du paysage média d'autorité en France.
            </p>
          </div>
          <button
            onClick={() => onSelectMedia && onSelectMedia("Catalogue Sur-Mesure")}
            className="btn-pill-secondary px-7 py-3 text-xs shrink-0"
          >
            Demander le catalogue complet
          </button>
        </div>

      </div>
    </section>
  );
}
