import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthodologie GEO — Comment faire citer votre marque par ChatGPT & Perplexity",
  description:
    "Notre protocole Generative Engine Optimization : infiltration dans les guides d'achat et bancs d'essai, formats d'inférence RAG, preuves chiffrées labo, FAQ conversationnelles et monitoring de la part de voix IA. SEO vs GEO : ce qui change vraiment.",
  alternates: { canonical: "https://answerpress.io/methodologie" },
};

export default function MethodologieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
