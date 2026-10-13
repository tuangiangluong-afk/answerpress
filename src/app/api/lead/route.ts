import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_DIR = path.join(process.cwd(), "var");
const LEADS_FILE = path.join(LEADS_DIR, "leads.jsonl");

async function persistLead(record: Record<string, unknown>) {
  await fs.mkdir(LEADS_DIR, { recursive: true });
  await fs.appendFile(LEADS_FILE, JSON.stringify(record) + "\n", "utf8");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      company,
      phone,
      selectedPlan,
      selectedPrice,
      notes,
      source,
      diagnostic,
      trap,
    } = body;

    // Honeypot : champ caché rempli = bot, on répond succès sans rien enregistrer.
    if (trap) {
      return NextResponse.json({ success: true });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Une adresse email valide est obligatoire." },
        { status: 400 }
      );
    }

    if (!source && (!name || !company)) {
      return NextResponse.json(
        { error: "Le nom, l'email et l'entreprise sont obligatoires." },
        { status: 400 }
      );
    }

    const leadRecord = {
      id: "AP-" + Date.now().toString(36).toUpperCase(),
      source: source || "lead-form",
      name: name || null,
      email,
      company: company || null,
      phone: phone || null,
      selectedPlan: selectedPlan || "Général",
      selectedPrice: selectedPrice || null,
      notes: notes || null,
      diagnostic: diagnostic || null,
      createdAt: new Date().toISOString(),
    };

    await persistLead(leadRecord);
    console.log("[AnswerPress] Nouveau lead qualifié enregistré :", leadRecord.id);

    return NextResponse.json({
      success: true,
      message: "Lead enregistré avec succès. Un expert média va vous contacter.",
      leadId: leadRecord.id,
    });
  } catch (err: any) {
    console.error("[AnswerPress] Erreur capture lead :", err);
    return NextResponse.json(
      { error: "Erreur lors de la capture du lead.", detail: err?.message },
      { status: 500 }
    );
  }
}
