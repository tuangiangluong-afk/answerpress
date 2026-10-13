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
    <main className="min-h-screen">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-16 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="press-eyebrow">Offres &amp; prix packagés</p>
        <h1 className="press-title mt-5 text-3xl sm:text-5xl">
          Packages média &amp; citations IA clés en main
        </h1>
        <p className="mt-4 text-graphite max-w-2xl">
          Des offres calibrées pour court-circuiter les régies traditionnelles et saturer l&apos;index
          des LLMs sous 10 jours ouvrés.
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
