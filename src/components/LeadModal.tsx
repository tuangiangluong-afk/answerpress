"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";

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
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider">
                RÉSERVATION DE PACK
              </span>
            </div>
            <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
              {initialPlan ? `Activer : ${initialPlan}` : "Demande d'Audit & Accompagnement GEO"}
            </h3>
            {initialPrice && (
              <p className="text-sm font-mono text-blue-600 font-bold mt-1">
                Tarif packagé : {initialPrice}
              </p>
            )}
            <p className="mt-2 text-xs text-neutral-600">
              Recevez sous 24h ouvrées votre convention de diffusion et la liste des articles infiltrables disponibles sur votre univers.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Votre Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Marque / Entreprise *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nom de l'entreprise"
                    className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Email Pro *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@marque.fr"
                    className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                  Produits cibles ou Médias souhaités
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Guides d'achat friteuses sans huile sur Les Numériques, bancs d'essai..."
                  className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-pill-blue py-3.5 text-xs font-bold shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <span>Traitement en cours...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirmer la Demande de Pack</span>
                    </>
                  )}
                </button>
                <p className="mt-2 text-center text-[10px] text-neutral-500 font-mono">
                  Sans engagement • Réponse et convention sous 24h ouvrées
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-neutral-900">Demande Enregistrée !</h3>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Merci <strong>{name}</strong>. Un expert média analyse les articles disponibles pour <strong>{company}</strong> et vous répond par email à <strong>{email}</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="btn-pill-secondary px-6 py-2.5 text-xs"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
