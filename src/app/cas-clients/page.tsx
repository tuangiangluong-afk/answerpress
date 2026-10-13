"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CaseStudiesProof from "@/components/CaseStudiesProof";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function CasClientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090C] text-[#F8FAFC]">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-12 pb-6 text-center max-w-4xl mx-auto px-4">
        <span className="press-badge">ÉTUDES DE CAS RÉELLES</span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-black text-white">
          Bancs d'Essai &amp; Impact sur les Moteurs IA
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg">
          Découvrez comment Tefal, Philips, Atlantic et des marques D2C ont saturé les réponses de ChatGPT et Copilot.
        </p>
      </div>

      <CaseStudiesProof onOpenAudit={() => setModalOpen(true)} />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan="Étude de Cas Sectorielle"
        initialPrice="Gratuit sur demande"
      />
    </main>
  );
}
