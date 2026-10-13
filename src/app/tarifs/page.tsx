"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PackagingSection from "@/components/PackagingSection";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function TarifsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>(undefined);

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan(planName);
    setSelectedPrice(price);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090C] text-[#F8FAFC]">
      <Header onOpenAudit={() => setModalOpen(true)} />
      
      <div className="pt-12 pb-6 text-center max-w-4xl mx-auto px-4">
        <span className="press-badge">OFFRES &amp; PRIX 2026</span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-black text-white">
          Packages Média &amp; Citations IA Clés en Main
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg">
          Des offres calibrées pour court-circuiter les régies traditionnelles et saturer immédiatement l'index des LLMs.
        </p>
      </div>

      <PackagingSection onSelectPlan={handleSelectPlan} />
      <FormatShowcase />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialPrice={selectedPrice}
      />
    </main>
  );
}
