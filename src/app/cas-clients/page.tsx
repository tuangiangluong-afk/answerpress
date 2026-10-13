"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CaseStudiesProof from "@/components/CaseStudiesProof";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function CasClientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-16 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="press-eyebrow">Études de cas</p>
        <h1 className="press-title mt-5 text-3xl sm:text-5xl">
          Bancs d&apos;essai &amp; impact sur les moteurs IA
        </h1>
        <p className="mt-4 text-graphite max-w-2xl">
          Comment Tefal, Philips et Atlantic ont saturé les réponses de ChatGPT et Copilot grâce à
          l&apos;activation presse.
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
