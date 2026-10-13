import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médias & Lovebrands — Où faire apparaître votre marque pour être cité par les IA",
  description:
    "Les Numériques, Marmiton, Maison & Travaux, Beauté Test, Aufeminin, Science & Vie… Découvrez les 12 titres de presse les plus crawlés par GPTBot et Perplexity, et ceux de votre verticale pour verrouiller la recommandation IA.",
  alternates: { canonical: "https://answerpress.io/medias" },
};

export default function MediasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
