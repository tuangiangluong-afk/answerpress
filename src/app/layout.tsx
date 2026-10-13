import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnswerPress — Centrale d'Autorité Média & Citations IA (GEO)",
  description:
    "La 1ère plateforme de packages de citations IA et d'autorité média en France. Infiltrez les guides et tests des plus grands titres de presse (Les Numériques, Marmiton, Maison & Travaux) pour saturer les moteurs génératifs (ChatGPT, Perplexity, Gemini, Copilot).",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "Citations IA",
    "Référencement ChatGPT",
    "Perplexity citation",
    "Les Numériques",
    "Marmiton",
    "Média GEO",
    "Packages netlinking IA",
    "AnswerPress",
  ],
  authors: [{ name: "AnswerPress Intelligence" }],
  openGraph: {
    title: "AnswerPress — Devenez la Réponse Citée par les IA",
    description:
      "Packages d'autorité média et d'infiltrations d'articles historiques sur les plus grands titres de presse français.",
    url: "https://answerpress.io",
    siteName: "AnswerPress.io",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
