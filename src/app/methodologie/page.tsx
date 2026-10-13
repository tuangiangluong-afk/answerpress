"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import TheGeoEquation from "@/components/TheGeoEquation";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";
import { Cpu } from "lucide-react";

export default function MethodologiePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-16 pb-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
          <Cpu className="w-3.5 h-3.5 text-emerald-600" />
          <span>SCIENCE DU RÉFÉRENCEMENT IA (GEO)</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Comment les IA Choisissent Leurs Réponses
        </h1>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
          Comprendre l'architecture RAG (Retrieval-Augmented Generation) et l'équation mathématique qui régit l'inférence des moteurs conversationnels.
        </p>
      </div>

      <TheGeoEquation />
      <FormatShowcase />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan="Accompagnement Méthodologie GEO"
        initialPrice="Audit & Déploiement"
      />
    </main>
  );
}
