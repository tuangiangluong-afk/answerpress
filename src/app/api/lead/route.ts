import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, selectedPlan, selectedPrice, notes } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Le nom, l'email et l'entreprise sont obligatoires." },
        { status: 400 }
      );
    }

    // Lead capture log / database dispatch
    const leadRecord = {
      id: "AP-" + Date.now().toString(36).toUpperCase(),
      name,
      email,
      company,
      phone: phone || null,
      selectedPlan: selectedPlan || "Général",
      selectedPrice: selectedPrice || null,
      notes: notes || null,
      createdAt: new Date().toISOString(),
    };

    console.log("[AnswerPress] Nouveau lead qualifié reçu :", leadRecord);

    return NextResponse.json({
      success: true,
      message: "Lead enregistré avec succès. Un expert média va vous contacter.",
      leadId: leadRecord.id,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur lors de la capture du lead.", detail: err.message },
      { status: 500 }
    );
  }
}
