"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PublisherInventoryGrid from "@/components/PublisherInventoryGrid";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function MediasPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleSelectMedia = (mediaName: string) => {
    setSelectedPlan(`Activation : ${mediaName}`);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090C] text-[#F8FAFC]">
      <Header onOpenAudit={() => setModalOpen(true)} />
      
      <div className="pt-12 pb-6 text-center max-w-4xl mx-auto px-4">
        <span className="press-badge">CATALOGUE DES ÉDITEURS</span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-black text-white">
          L'Inventaire Média le Plus Crawlé de France
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg">
          Accédez aux titres patrimoniaux les plus cités par ChatGPT, Claude, Copilot et Perplexity.
        </p>
      </div>

      <PublisherInventoryGrid onSelectMedia={handleSelectMedia} />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialPrice="Sur Mesure"
      />
    </main>
  );
}
