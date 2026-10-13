"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CaseStudiesProof from "@/components/CaseStudiesProof";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";
import { Award } from "lucide-react";

export default function CasClientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-16 pb-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-indigo-600" />
          <span>ÉTUDES DE CAS &amp; RÉSULTATS CERTIFIÉS</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Bancs d'Essai &amp; Impact sur les Moteurs IA
        </h1>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
          Découvrez comment Tefal, Philips, Atlantic et des marques D2C ont saturé les réponses de ChatGPT et Copilot grâce à l'activation presse.
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
