"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PackagingSection from "@/components/PackagingSection";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";
import { Zap } from "lucide-react";

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
    <main className="min-h-screen bg-white text-neutral-900">
      <Header onOpenAudit={() => setModalOpen(true)} />
      
      <div className="pt-16 pb-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span>OFFRES &amp; PRIX PACKAGÉS 2026</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Packages Média &amp; Citations IA Clés en Main
        </h1>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
          Des offres calibrées pour court-circuiter les régies traditionnelles et saturer immédiatement l'index des LLMs sous 10 jours ouvrés.
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
