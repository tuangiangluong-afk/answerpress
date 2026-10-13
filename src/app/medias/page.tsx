"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PublisherInventoryGrid from "@/components/PublisherInventoryGrid";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";
import { Flame } from "lucide-react";

export default function MediasPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleSelectMedia = (mediaName: string) => {
    setSelectedPlan(`Activation : ${mediaName}`);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header onOpenAudit={() => setModalOpen(true)} />
      
      <div className="pt-16 pb-8 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs font-mono font-semibold text-neutral-800 shadow-2xs">
          <Flame className="w-3.5 h-3.5 text-amber-600" />
          <span>CATALOGUE DES ÉDITEURS SOUS MANDAT</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          L'Inventaire Média le Plus Crawlé de France
        </h1>
        <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
          Accédez aux 12 lovebrands patrimoniales les plus citées par ChatGPT, Claude, Copilot et Perplexity.
        </p>
      </div>

      <PublisherInventoryGrid onSelectMedia={handleSelectMedia} />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialPrice="Sur Devis Packagé"
      />
    </main>
  );
}
