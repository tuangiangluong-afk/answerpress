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
import FaqSection from "@/components/FaqSection";
import GuidesTeaser from "@/components/GuidesTeaser";
import UrgencyCtaSection from "@/components/UrgencyCtaSection";
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

  const handleOpenExecutiveAudit = () => {
    setSelectedPlan("Audit Exécutif Board-Ready (Gratuit sous 24h)");
    setSelectedPrice("Offert");
    setModalOpen(true);
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

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Être cité par ChatGPT & Perplexity | AnswerPress — Autorité Média & GEO",
    url: "https://answerpress.io",
    description:
      "Comment être recommandé par les IA ? AnswerPress fait entrer votre marque dans les guides et bancs d'essai des grands médias (Les Numériques, Marmiton, Maison & Travaux) pour que ChatGPT, Perplexity et Gemini citent votre produit en N°1. Audit de visibilité IA gratuit.",
    datePublished: "2026-08-01T08:00:00+02:00",
    dateModified: "2026-10-13T17:00:00+02:00",
    inLanguage: "fr-FR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".press-title",
        ".press-eyebrow",
        "#reponse-courte",
        ".speakable-summary",
        ".press-lead-text",
      ],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "AnswerPress",
      url: "https://answerpress.io",
    },
  };

  return (
    <main className="min-h-screen bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
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

      {/* FAQ — search-intent questions (SEO + GEO) */}
      <FaqSection onOpenAudit={handleOpenGeneralAudit} />

      {/* Guides & ressources */}
      <GuidesTeaser />

      {/* Pre-Footer Scarcity & Conversion Urgency */}
      <UrgencyCtaSection onOpenAudit={handleOpenExecutiveAudit} />

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
