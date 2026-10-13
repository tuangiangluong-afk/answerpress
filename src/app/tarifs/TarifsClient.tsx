"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import PackagingSection from "@/components/PackagingSection";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function TarifsClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>(undefined);

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan(planName);
    setSelectedPrice(price);
    setModalOpen(true);
  };

  return (
    <>
      <Header onOpenAudit={() => setModalOpen(true)} />

      <PackagingSection onSelectPlan={handleSelectPlan} />
      <FormatShowcase />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialPrice={selectedPrice}
      />
    </>
  );
}
