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
    <main className="min-h-screen">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-16 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="press-eyebrow">Catalogue des éditeurs sous mandat</p>
        <h1 className="press-title mt-5 text-3xl sm:text-5xl">
          L&apos;inventaire média le plus crawlé de France
        </h1>
        <p className="mt-4 text-graphite max-w-2xl">
          Les 12 lovebrands patrimoniales les plus citées par ChatGPT, Claude, Copilot et Perplexity.
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
