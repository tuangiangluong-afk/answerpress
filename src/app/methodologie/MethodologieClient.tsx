"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import TheGeoEquation from "@/components/TheGeoEquation";
import FormatShowcase from "@/components/FormatShowcase";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function MethodologieClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onOpenAudit={() => setModalOpen(true)} />

      <TheGeoEquation />
      <FormatShowcase />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan="Accompagnement Méthodologie GEO"
        initialPrice="Audit & Déploiement"
      />
    </>
  );
}
