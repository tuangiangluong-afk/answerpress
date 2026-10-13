import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { brandName, sector, competitor1, competitor2, email } = body;

    if (!brandName || !email) {
      return NextResponse.json(
        { error: "Le nom de la marque et l'email sont obligatoires" },
        { status: 400 }
      );
    }

    // Calcul de l'indice de considération LLM simulé
    const currentScore = Math.floor(Math.random() * 18) + 40;
    const comp1Score = Math.floor(Math.random() * 14) + 74;
    const comp2Score = Math.floor(Math.random() * 12) + 78;

    const analysis = {
      brand: brandName,
      sector: sector || "tech",
      score: currentScore,
      competitors: [
        { name: competitor1 || "Leader Catégorie", score: comp1Score },
        { name: competitor2 || "Challenger N°2", score: comp2Score },
      ],
      radarCriteria: [
        { name: "Autorité / Crédibilité", score: 48, status: "Déficit Média" },
        { name: "Contenu Pré-Achat", score: 35, status: "Absence de Banc d'essai" },
        { name: "Réassurance Prix & FAQ", score: 42, status: "FAQ non indexées" },
        { name: "Considération Globale", score: currentScore, status: "Risque de décrochage" },
      ],
      recommendedPlan: currentScore < 50 ? "Hégémonie de Catégorie (14 900 € HT)" : "Infiltration Rapide (4 900 € HT)",
      deploymentDays: 10,
    };

    return NextResponse.json({ success: true, data: analysis });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur lors du calcul du diagnostic GEO", detail: err.message },
      { status: 500 }
    );
  }
}
