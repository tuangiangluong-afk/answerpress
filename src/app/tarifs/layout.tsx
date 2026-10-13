import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs & Packages GEO — Être cité par ChatGPT dès 4 900 € HT | AnswerPress",
  description:
    "Combien coûte une stratégie de citations IA ? 3 packages transparents : Infiltration & Fast Citation (4 900 € HT), Hégémonie de Catégorie (14 900 € HT), Domination Souveraine (39 000 € HT). Production éditoriale, diffusion presse et monitoring inclus.",
  alternates: { canonical: "https://answerpress.io/tarifs" },
};

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
