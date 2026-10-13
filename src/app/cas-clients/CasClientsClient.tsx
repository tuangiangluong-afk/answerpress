"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CaseStudiesProof from "@/components/CaseStudiesProof";
import LeadModal from "@/components/LeadModal";
import Footer from "@/components/Footer";

export default function CasClientsClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onOpenAudit={() => setModalOpen(true)} />

      <CaseStudiesProof onOpenAudit={() => setModalOpen(true)} />
      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan="Étude de Cas Sectorielle"
        initialPrice="Gratuit sur demande"
      />
    </>
  );
}
