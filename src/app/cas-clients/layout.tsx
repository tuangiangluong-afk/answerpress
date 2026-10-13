import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Études de Cas GEO — Résultats de citations IA (Tefal, Philips, Atlantic)",
  description:
    "Études de cas chiffrées d'autorité média et de citations IA : Tefal/SEB vs SharkNinja, Philips, Atlantic. Bancs d'essai labo, guides infiltrés et gains mesurés de part de voix sur ChatGPT, Perplexity et Gemini.",
  alternates: { canonical: "https://answerpress.io/cas-clients" },
};

export default function CasClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
