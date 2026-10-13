"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import TheGeoEquation from "@/components/TheGeoEquation";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function MethodologiePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090C] text-[#F8FAFC]">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-12 pb-6 text-center max-w-4xl mx-auto px-4">
        <span className="press-badge">SCIENCE DU RÉFÉRENCEMENT IA</span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-black text-white">
          Comment les IA Choisissent Leurs Réponses
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg">
          Comprendre l'architecture RAG (Retrieval-Augmented Generation) et l'équation mathématique du GEO.
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
