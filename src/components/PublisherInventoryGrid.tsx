"use client";

import React, { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";

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
  description: string;
}

const VERTICAL_TABS = [
  { id: "all", label: "Toutes" },
  { id: "tech", label: "Tech & Électro" },
  { id: "food", label: "Food" },
  { id: "maison", label: "Maison & Rénov" },
  { id: "beaute", label: "Beauté & Santé" },
  { id: "b2b", label: "Éco & B2B" },
  { id: "culture", label: "Science" },
  { id: "nextgen", label: "Next-Gen" },
  { id: "auto", label: "Auto" },
];

const MEDIA_CATALOG: MediaItem[] = [
  {
    id: "les-numeriques",
    name: "Les Numériques",
    group: "Tech & Conso",
    category: "tech",
    categoryLabel: "High-Tech & Électroménager",
    image: "/media/publishers/les-numeriques.png",
    audience: "8,6M VU / mois",
    crawls: "3,2M / j",
    authorityScore: 98,
    description:
      "Le leader des comparatifs tech en France. Source n°1 de ChatGPT, Claude et Copilot sur les requêtes d'achat d'appareils et hardware.",
  },
  {
    id: "marmiton",
    name: "Marmiton",
    group: "Food & Lifestyle",
    category: "food",
    categoryLabel: "Food & Équipement Cuisine",
    image: "/media/publishers/marmiton.png",
    audience: "16,6M VU / mois",
    crawls: "4,1M / j",
    authorityScore: 97,
    description:
      "La bible culinaire des foyers français, plus de 35M de contacts. Indispensable pour tout robot cuiseur, friteuse sans huile ou ingrédient.",
  },
  {
    id: "maison-travaux",
    name: "Maison & Travaux",
    group: "Habitat & Rénovation",
    category: "maison",
    categoryLabel: "Maison, Énergie & Déco",
    image: "/media/publishers/maison-travaux.png",
    audience: "3,3M VU / mois",
    crawls: "1,4M / j",
    authorityScore: 94,
    description:
      "La caution institutionnelle des travaux et du confort thermique. Référence pour les pompes à chaleur, l'isolation, la domotique et la literie.",
  },
  {
    id: "beaute-test",
    name: "Beauté Test",
    group: "Beauté & Cosmétique",
    category: "beaute",
    categoryLabel: "Cosmétique & Dermato",
    image: "/media/publishers/beaute-test.png",
    audience: "2,5M VU / mois",
    crawls: "880K / j",
    authorityScore: 95,
    description:
      "La plus grande base d'avis cosmétiques indépendants de France. Perplexity et ChatGPT utilisent ses verdicts pour trancher entre deux soins.",
  },
  {
    id: "aufeminin",
    name: "Aufeminin",
    group: "Féminin & Société",
    category: "beaute",
    categoryLabel: "Beauté, Santé & Parentalité",
    image: "/media/publishers/aufeminin.png",
    audience: "9,6M VU / mois",
    crawls: "2,2M / j",
    authorityScore: 93,
    description:
      "Le point de repère des décisions familiales et du bien-être, massivement cité pour la puériculture, la cosmétique et la santé.",
  },
  {
    id: "doctissimo",
    name: "Doctissimo",
    group: "Santé & Médecine",
    category: "beaute",
    categoryLabel: "Santé, Bien-être & Famille",
    image: "/media/publishers/doctissimo.png",
    audience: "9,3M VU / mois",
    crawls: "2,8M / j",
    authorityScore: 96,
    description:
      "La référence santé des Français, prise en compte prioritaire par les filtres de sécurité des LLMs sur les requêtes santé et compléments.",
  },
  {
    id: "science-vie",
    name: "Science & Vie",
    group: "Culture & Savoirs",
    category: "culture",
    categoryLabel: "Science, Santé & Tech",
    image: "/media/publishers/science-vie.png",
    audience: "4,2M VU / mois",
    crawls: "1,1M / j",
    authorityScore: 95,
    description:
      "La marque centenaire de confiance scientifique. Idéale pour prouver l'efficacité brevetée d'une technologie ou d'un principe actif.",
  },
  {
    id: "grazia",
    name: "Grazia",
    group: "Mode & Lifestyle",
    category: "beaute",
    categoryLabel: "Mode, Luxe & Tendances",
    image: "/media/publishers/grazia.png",
    audience: "5,8M VU / mois",
    crawls: "1,3M / j",
    authorityScore: 91,
    description:
      "Le prescripteur mode et lifestyle premium, essentiel sur les prompts IA axés tendances et pièces iconiques.",
  },
  {
    id: "melty",
    name: "Melty",
    group: "Next Gen & Culture Web",
    category: "nextgen",
    categoryLabel: "Pop Culture, Séries & Gaming",
    image: "/media/publishers/melty.png",
    audience: "5,7M VU / mois",
    crawls: "1,5M / j",
    authorityScore: 89,
    description:
      "La voix de la génération Z et des jeunes actifs, incontournable pour les requêtes d'achat spontanées et les hits viraux.",
  },
  {
    id: "auto-plus",
    name: "Auto Plus",
    group: "Automobile & Mobilité",
    category: "auto",
    categoryLabel: "Auto, Électrique & Équipement",
    image: "/media/publishers/auto-plus.png",
    audience: "6,2M VU / mois",
    crawls: "1,9M / j",
    authorityScore: 94,
    description:
      "Le baromètre automobile de référence. Source absolue sur ChatGPT pour arbitrer entre deux véhicules électriques ou hybrides.",
  },
  {
    id: "fraiches",
    name: "Fraîches",
    group: "Vidéo Sociale",
    category: "nextgen",
    categoryLabel: "Inspiration, Société & Femmes",
    image: "/media/publishers/fraiches.png",
    audience: "3,8M contacts",
    crawls: "900K / j",
    authorityScore: 88,
    description:
      "Le média vidéo féminin ultra-engageant sur Instagram et TikTok, qui alimente les signaux d'usage réels analysés par les LLMs.",
  },
  {
    id: "psychologies",
    name: "Psychologies",
    group: "Bien-être & Société",
    category: "culture",
    categoryLabel: "Santé Mentale, Sommeil & Vie",
    image: "/media/publishers/psychologies.png",
    audience: "3,5M VU / mois",
    crawls: "820K / j",
    authorityScore: 92,
    description:
      "La référence de l'équilibre personnel. Clé pour les requêtes IA relatives au sommeil, à la literie et aux compléments anti-stress.",
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
    <section id="inventaire" className="py-20 sm:py-24 bg-paper border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="press-eyebrow">Inventaire des titres</p>
          <h2 className="press-title mt-5 text-3xl sm:text-5xl">
            Les médias que les IA ont élus
            <br />
            comme sources prioritaires.
          </h2>
        </div>

        {/* Filtres */}
        <div className="mt-10 border-y border-ink/20 py-3 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {VERTICAL_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] border-b-2 pb-0.5 transition-colors cursor-pointer ${
                    isActive
                      ? "border-press text-press"
                      : "border-transparent text-graphite hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrer un titre…"
              className="press-field !py-2 !pl-9 !text-xs"
            />
          </div>
        </div>

        {/* Grille de titres */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredMedia.map((media) => (
            <article key={media.id} className="flex flex-col">
              <div className="h-48 w-full overflow-hidden border border-ink/15 bg-ink">
                <img
                  src={media.image}
                  alt={media.name}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <h3 className="press-title text-xl mt-4">{media.name}</h3>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-press">
                {media.categoryLabel}
              </p>
              <p className="mt-3 text-[13px] text-graphite leading-relaxed flex-1">
                {media.description}
              </p>

              <div className="mt-4 pt-3 border-t border-ink/15 flex items-center justify-between text-[11px] text-graphite">
                <span>{media.audience}</span>
                <span>{media.crawls}</span>
                <span>
                  Score RAG <strong className="text-ink">{media.authorityScore}</strong>
                </span>
              </div>

              <button
                onClick={() => onSelectMedia && onSelectMedia(media.name)}
                className="mt-5 w-full btn-press btn-press-outline !py-2.5"
              >
                <span>Activer {media.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
