"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PublisherInventoryGrid from "@/components/PublisherInventoryGrid";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function MediasClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleSelectMedia = (mediaName: string) => {
    setSelectedPlan(`Activation : ${mediaName}`);
    setModalOpen(true);
  };

  return (
    <>
      <Header onOpenAudit={() => setModalOpen(true)} />

      <PublisherInventoryGrid onSelectMedia={handleSelectMedia} />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialPrice="Sur Devis Packagé"
      />
    </>
  );
}
