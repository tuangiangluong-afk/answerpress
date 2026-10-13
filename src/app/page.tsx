"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AiDiagnosticWidget from "@/components/AiDiagnosticWidget";
import PublisherInventoryGrid from "@/components/PublisherInventoryGrid";
import PackagingSection from "@/components/PackagingSection";
import TheGeoEquation from "@/components/TheGeoEquation";
import FormatShowcase from "@/components/FormatShowcase";
import CaseStudiesProof from "@/components/CaseStudiesProof";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>(undefined);

  const handleOpenGeneralAudit = () => {
    setSelectedPlan(undefined);
    setSelectedPrice(undefined);
    const diagSection = document.getElementById("diagnostic");
    if (diagSection) {
      diagSection.scrollIntoView({ behavior: "smooth" });
    } else {
      setModalOpen(true);
    }
  };

  const handleScrollToPacks = () => {
    const packsSection = document.getElementById("tarifs");
    if (packsSection) {
      packsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan(planName);
    setSelectedPrice(price);
    setModalOpen(true);
  };

  const handleSelectMedia = (mediaName: string) => {
    setSelectedPlan(`Activation Média : ${mediaName}`);
    setSelectedPrice("Sur Devis Packagé");
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#08090C] text-[#F8FAFC]">
      {/* Header */}
      <Header onOpenAudit={handleOpenGeneralAudit} />

      {/* Hero Section */}
      <Hero
        onOpenAudit={handleOpenGeneralAudit}
        onScrollToPacks={handleScrollToPacks}
      />

      {/* AI Diagnostic Scanner Widget (Key Lead Magnet) */}
      <AiDiagnosticWidget
        onSuccessLead={(data) => {
          console.log("Diagnostic lead captured:", data);
        }}
      />

      {/* Publisher Media Catalog */}
      <PublisherInventoryGrid onSelectMedia={handleSelectMedia} />

      {/* Pricing Packages Section */}
      <PackagingSection onSelectPlan={handleSelectPlan} />

      {/* The 6 Formats Showcase */}
      <FormatShowcase />

      {/* The Mathematical GEO Equation vs SEO */}
      <TheGeoEquation />

      {/* Case Studies & Real Benchmarks */}
      <CaseStudiesProof onOpenAudit={handleOpenGeneralAudit} />

      {/* Footer */}
      <Footer />

      {/* Reservation / Quote Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialPrice={selectedPrice}
      />
    </main>
  );
}
