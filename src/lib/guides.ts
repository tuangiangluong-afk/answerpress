export interface GuideSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingMinutes: number;
  excerpt: string;
  intro: string;
  sections: GuideSection[];
  conclusion: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "etre-cite-par-chatgpt",
    title: "Comment être cité par ChatGPT, Perplexity et Gemini : le guide 2026",
    category: "Méthodologie GEO",
    date: "2026-09-18",
    readingMinutes: 8,
    excerpt:
      "Les moteurs génératifs ne citent presque jamais les sites de marque. Voici comment faire entrer votre produit dans les sources qu'ils consultent réellement, et verrouiller la recommandation d'achat.",
    intro:
      "Chaque jour, des millions d'acheteurs demandent directement à ChatGPT, Perplexity ou Gemini quel produit acheter. La réponse tient en quelques lignes, citant deux ou trois sources. Être dans ces sources, c'est être la recommandation. En être absent, c'est ne pas exister. Ce guide décrit le mécanisme réel de citation des LLMs et la méthode pour y accéder.",
    sections: [
      {
        title: "Pourquoi les IA citent la presse, pas les marques",
        paragraphs: [
          "Les modèles génératifs ne « consultent » pas Google au moment de répondre. Ils s'appuient sur des index RAG (Retrieval-Augmented Generation) construits à partir de contenus crawlés par des robots comme GPTBot, PerplexityBot ou Google-Extended. Or ces robots pondèrent la fiabilité de la source : un banc d'essai de Les Numériques pèse infiniment plus qu'une page produit de votre site.",
          "Le raisonnement est simple : un éditeur indépendant a intérêt à dire la vérité sur un produit, un site de marque a intérêt à le vendre. Les algorithmes d'inférence ont internalisé ce biais. C'est pourquoi 70 % des sources citées par ChatGPT sur les requêtes d'achat sont des médias, pas des sites marchands.",
        ],
      },
      {
        title: "Les quatre conditions d'une citation",
        paragraphs: [
          "Une marque n'est citée que si elle satisfait quatre conditions simultanées. En rater une suffit à être écartée de la synthèse.",
        ],
        list: [
          "Présence dans une source tierce à fort trust score (presse patrimoniale, tests indépendants).",
          "Données vérifiables : mesures labo, protocole de test, chiffres datés — pas des superlatifs marketing.",
          "Cohérence d'entité : le nom du produit, sa catégorie et ses attributs doivent être identiques d'une source à l'autre.",
          "Fraîcheur : le contenu doit avoir été recrawlé récemment, sinon un concurrent plus actif prend la place.",
        ],
      },
      {
        title: "La méthode : infiltrer les contenus déjà crawlés",
        paragraphs: [
          "La voie la plus rapide n'est pas de créer un nouveau contenu, mais d'entrer dans les contenus existants que les robots visitent déjà plusieurs fois par jour : les guides d'achat (« Les meilleurs Airfryers 2026 »), les tableaux comparatifs et les fiches bancs d'essai. Votre produit y est inséré avec ses preuves, et l'index RAG intègre la mise à jour au prochain crawl, souvent en moins de 48 heures.",
          "La seconde voie, plus lente mais durable, consiste à produire des articles natifs structurés pour l'extraction : réponses directes aux questions d'arbitrage (défauts, fiabilité, SAV), blocs de données comparables, et FAQ conversationnelles. Ces deux approches sont complémentaires : l'une donne la vitesse, l'autre la profondeur.",
        ],
      },
      {
        title: "Comment vérifier que ça marche",
        paragraphs: [
          "Constituez un panel de 10 à 25 prompts d'achat réels de votre catégorie (« quelle marque de robot cuiseur choisir », « meilleur aspirateur balai sous 400 € »). Interrogez chaque moteur une fois par mois, notez la fréquence et le rang de citation de votre marque face à vos concurrents : c'est votre part de voix IA. Sans mesure, aucune stratégie n'est pilotable.",
        ],
      },
    ],
    conclusion:
      "Être cité par les IA n'est pas un exploit technique : c'est un travail de présence médiatique, chiffré et vérifiable. Les marques qui investissent maintenant dans les sources RAG construisent une avance difficile à rattraper, car les modèles mémorisent les consensus établis.",
  },
  {
    slug: "seo-vs-geo",
    title: "SEO vs GEO : ce qui change vraiment pour votre marque",
    category: "Stratégie",
    date: "2026-08-27",
    readingMinutes: 6,
    excerpt:
      "Le SEO optimise une position dans une liste de liens. Le GEO optimise une citation dans une réponse rédigée par une IA. Les leviers, les formats et les mesures de succès ne sont pas les mêmes.",
    intro:
      "65 % des recherches se terminent désormais sans clic, les réponses étant générées directement par les moteurs. Pour les directions marketing, la question n'est plus seulement « en quelle position sommes-nous sur Google ? » mais « sommes-nous la réponse ? ». Voici la comparaison opérationnelle entre les deux disciplines.",
    sections: [
      {
        title: "Deux objectifs différents",
        paragraphs: [
          "Le SEO vise un classement dans une page de résultats : dix liens bleus, un titre et une meta-description à optimiser. Le GEO vise l'insertion dans une synthèse rédigée par un modèle : une réponse unique, souvent trois sources citées, et une recommandation explicite. La surface de visibilité n'est pas une page, c'est un paragraphe.",
        ],
      },
      {
        title: "Les leviers ne sont pas les mêmes",
        paragraphs: [
          "En SEO, un backlink depuis un blog ou un annuaire renforce votre autorité de domaine. En GEO, ce même lien est quasi ignoré : les modèles pondèrent la fiabilité éditoriale de la source et la précision de ses données. Un banc d'essai chiffré sur un média patrimonial vaut davantage que cent liens contextuels.",
          "Côté contenu, le SEO récompense la couverture sémantique et la fraîcheur. Le GEO récompense la structure extractible : réponses directes, données comparables, tables, et formulations qui anticipent les questions de suivi (« quels défauts ? », « est-ce fiable ? »).",
        ],
      },
      {
        title: "Ce que le GEO change dans votre plan de charge",
        paragraphs: [
          "La production ne se mesure plus en articles publiés, mais en sources activées et en prompts verrouillés. Concrètement, un dispositif GEO type combine l'infiltration dans des guides existants, la production de contenus natifs structurés, et un monitoring mensuel de la part de voix IA. Le SEO classique continue d'exister, mais il ne suffit plus à lui seul à générer de la demande.",
        ],
      },
    ],
    conclusion:
      "Le GEO ne remplace pas le SEO : il le complète sur la surface qui compte désormais, celle de la réponse générée. Les marques qui traitent les deux disciplines comme un même système d'autorité captent la demande là où elle se forme réellement.",
  },
  {
    slug: "part-de-voix-ia",
    title: "Mesurer sa part de voix IA : la méthode en 4 étapes",
    category: "Mesure",
    date: "2026-07-15",
    readingMinutes: 6,
    excerpt:
      "Fréquence de citation, rang dans la réponse, sentiment : la part de voix IA se mesure comme un baromètre média. Le protocole complet pour piloter votre visibilité sur ChatGPT, Perplexity et Gemini.",
    intro:
      "« Que disent les IA de notre marque ? » est devenue la question du comité de direction. La bonne nouvelle : cela se mesure, avec un protocole simple et reproductible. La mauvaise : sans mesure régulière, aucun investissement GEO ne peut être justifié.",
    sections: [
      {
        title: "1. Constituer le panel de prompts",
        paragraphs: [
          "Sélectionnez 10 à 25 requêtes représentatives du parcours d'achat de vos clients : requêtes de catégorie (« meilleur robot cuiseur »), requêtes de comparaison (« marque A vs marque B »), requêtes d'arbitrage (« quelle marque est la plus fiable »). Utilisez le vocabulaire réel des acheteurs, pas celui de votre plaquette commerciale.",
        ],
      },
      {
        title: "2. Interroger les moteurs dans des conditions constantes",
        paragraphs: [
          "Posez chaque prompt une fois par mois, sans historique de conversation, sur ChatGPT, Perplexity, Gemini et Copilot. Notez pour chaque réponse : votre marque est-elle citée ? À quel rang ? Avec quelle source ? Quel sentiment ? La constance du protocole compte plus que la sophistication de l'outil.",
        ],
      },
      {
        title: "3. Calculer la part de voix",
        paragraphs: [
          "La part de voix IA est le pourcentage de réponses dans lesquelles votre marque apparaît, pondérée par le rang de citation. Une marque citée en premier sur 8 prompts sur 10 dispose d'une part de voix de 80 % en tête de liste. Comparez systématiquement avec vos deux concurrents directs : c'est l'écart qui se pilote, pas le score absolu.",
        ],
      },
      {
        title: "4. Relier la part de voix aux signaux business",
        paragraphs: [
          "Croisez la courbe de part de voix avec le trafic de marque, les demandes entrantes et le pipeline. L'objectif n'est pas un score : c'est la démonstration qu'une citation IA se transforme en considération, puis en rendez-vous. C'est cette démonstration qui justifie les budgets des temps forts.",
        ],
      },
    ],
    conclusion:
      "Ce qui se mesure se pilote. La part de voix IA est au marketing génératif ce que le share of voice était à la publicité : le seul indicateur qui permet de comparer sa marque aux concurrents sur la surface où se décide l'achat.",
  },
  {
    slug: "cout-strategie-citations-ia",
    title: "Combien coûte une stratégie de citations IA en 2026 ?",
    category: "Budgets",
    date: "2026-06-04",
    readingMinutes: 5,
    excerpt:
      "Entre l'investissement en production éditoriale, l'activation média et le monitoring, voici les ordres de grandeur réels pour être cité par les IA — et ce qui les fait varier.",
    intro:
      "Les budgets de visibilité IA restent une zone floue pour beaucoup de directions marketing. Voici les ordres de grandeur constatés sur le marché français, ce qu'ils incluent, et les trois facteurs qui font varier la facture.",
    sections: [
      {
        title: "Les trois postes de dépense",
        paragraphs: [
          "Une stratégie de citations IA se compose de trois blocs : la production de contenus structurés pour l'extraction (articles natifs, FAQ, données comparables), l'activation sur des médias déjà crawlés par les robots (infiltration de guides, bancs d'essai, tableaux comparatifs), et le monitoring (part de voix, alertes de décrochage, reporting).",
        ],
      },
      {
        title: "Les ordres de grandeur",
        paragraphs: [
          "Sur un produit héros, un dispositif ciblé démarre autour de 5 000 € HT : quelques infiltrations, un article natif, un audit de départ et un rapport de persistance. Pour saturer une verticale face à deux concurrents, comptez plutôt 15 000 € HT avec monitoring sur trois mois. Les dispositifs cross-médias de temps fort (lancement, Black Friday) se situent entre 35 000 et 50 000 € HT — loin des tickets d'entrée de 100 000 € des régies traditionnelles.",
        ],
      },
      {
        title: "Ce qui fait varier la facture",
        paragraphs: [
          "Trois facteurs principaux : la compétitivité de la verticale (plus il y a de marques présentes dans les sources RAG, plus l'effort d'infiltration est élevé), le nombre de médias à activer, et la durée de monitoring souhaitée. Un lancement sur un marché disputé coûte toujours plus cher qu'une construction de catégorie sur un marché vierge.",
        ],
      },
    ],
    conclusion:
      "Le bon réflexe n'est pas de comparer les prix à la surface livrée, mais au coût par prompt verrouillé. C'est la seule métrique qui permet de comparer un dispositif GEO à un budget média classique — et elle est, aujourd'hui, nettement en faveur du GEO.",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
