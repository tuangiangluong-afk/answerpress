"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, Send, ShieldCheck } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
  initialPrice?: string;
}

export default function LeadModal({ isOpen, onClose, initialPlan, initialPrice }: LeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0E1118] p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2">
              <span className="press-badge">RÉSERVATION SÉCURISÉE</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-white">
              {initialPlan ? `Activer le pack : ${initialPlan}` : "Demande d'Audit & Accompagnement GEO"}
            </h3>
            {initialPrice && (
              <p className="text-sm font-mono text-emerald-400 font-bold mt-1">
                Tarif packagé : {initialPrice}
              </p>
            )}
            <p className="mt-2 text-xs text-slate-400">
              Remplissez ce formulaire pour recevoir sous 24h ouvrées votre convention de diffusion et la liste des articles infiltrables disponibles.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Votre Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Entreprise / Marque *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nom de la marque"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Email Pro *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@marque.fr"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Produits à mettre en avant ou Titres de presse cibles
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Nous voulons infiltrer les guides Airfryer sur Les Numériques et Marmiton avant Black Friday..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Traitement sécurisé en cours...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirmer la Demande de Pack</span>
                    </>
                  )}
                </button>
                <p className="mt-2 text-center text-[10px] text-slate-500">
                  Zéro engagement à ce stade • Devis et convention envoyés sous 24h
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Demande Prise en Compte !</h3>
            <p className="text-sm text-slate-300">
              Merci <strong>{name}</strong>. Un expert média AnswerPress analyse la faisabilité d'infiltration pour <strong>{company}</strong> et vous contacte par email à <strong>{email}</strong> sous 24h.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="rounded-xl bg-white/[0.08] px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/[0.14] transition-colors"
              >
                Fermer cette fenêtre
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
