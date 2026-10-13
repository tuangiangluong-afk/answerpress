"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import TheGeoEquation from "@/components/TheGeoEquation";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function MethodologiePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onOpenAudit={() => setModalOpen(true)} />

      <div className="pt-16 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="press-eyebrow">Science du référencement IA</p>
        <h1 className="press-title mt-5 text-3xl sm:text-5xl">
          Comment les IA choisissent leurs réponses
        </h1>
        <p className="mt-4 text-graphite max-w-2xl">
          L&apos;architecture RAG (Retrieval-Augmented Generation) et l&apos;équation qui régit
          l&apos;inférence des moteurs conversationnels.
        </p>
      </div>

      <TheGeoEquation />
      <FormatShowcase />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan="Accompagnement Méthodologie GEO"
        initialPrice="Audit & Déploiement"
      />
    </main>
  );
}
