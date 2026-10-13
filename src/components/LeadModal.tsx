"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send } from "lucide-react";

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
  const [error, setError] = useState<string | null>(null);
  const [trap, setTrap] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "lead-form",
          name,
          email,
          company,
          phone,
          selectedPlan: initialPlan,
          selectedPrice: initialPrice,
          notes,
          trap,
        }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(
          data?.error || "Envoi impossible. Réessayez ou écrivez-nous à contact@answerpress.io."
        );
      }

      setLeadId(data.leadId || null);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl press-card border-ink/30 p-7 sm:p-9 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Filet double en tête */}
        <hr className="press-rule-double mb-5" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone hover:text-press transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <p className="press-eyebrow">
              {initialPlan ? "Réservation de pack" : "Demande d'audit"}
            </p>
            <h3 className="press-title text-2xl mt-3">
              {initialPlan ? `Activer : ${initialPlan}` : "Demande d'Audit & Accompagnement GEO"}
            </h3>
            {initialPrice && (
              <p className="press-num text-lg text-press mt-1.5">{initialPrice}</p>
            )}
            <p className="mt-3 text-xs text-graphite leading-relaxed">
              Recevez sous 24 h ouvrées votre convention de diffusion et la liste des articles
              infiltrables disponibles sur votre univers.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Honeypot anti-bot : invisible pour les humains */}
              <div className="absolute opacity-0 pointer-events-none -z-10" aria-hidden="true">
                <label htmlFor="lead-trap">Ne pas remplir</label>
                <input
                  id="lead-trap"
                  type="text"
                  value={trap}
                  onChange={(e) => setTrap(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="press-label">Votre nom *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="press-field"
                  />
                </div>
                <div>
                  <label className="press-label">Marque / entreprise *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nom de l'entreprise"
                    className="press-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="press-label">Email pro *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@marque.fr"
                    className="press-field"
                  />
                </div>
                <div>
                  <label className="press-label">Téléphone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="press-field"
                  />
                </div>
              </div>

              <div>
                <label className="press-label">Produits cibles ou médias souhaités</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex : guides d'achat friteuses sans huile sur Les Numériques, bancs d'essai…"
                  className="press-field"
                />
              </div>

              {error && (
                <div className="border border-press/40 bg-press/5 px-4 py-2.5 text-xs text-press-dark font-semibold">
                  {error}
                </div>
              )}

              <div>
                <button type="submit" disabled={loading} className="w-full btn-press btn-press-red">
                  {loading ? (
                    <span>Envoi en cours…</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirmer la demande</span>
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-[10px] uppercase tracking-[0.12em] text-stone">
                  Sans engagement — réponse et convention sous 24 h ouvrées
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto h-14 w-14 border border-press/40 bg-press/5 flex items-center justify-center text-press">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="press-title text-2xl mt-5">Demande enregistrée</h3>
            <p className="text-xs text-graphite max-w-sm mx-auto leading-relaxed mt-3">
              Merci <strong className="text-ink">{name}</strong>. Votre demande est enregistrée
              {leadId ? ` (réf. ${leadId})` : ""}. Un expert média analyse les articles disponibles
              pour <strong className="text-ink">{company}</strong> et vous répond par email à{" "}
              <strong className="text-ink">{email}</strong> sous 24 h ouvrées.
            </p>
            <div className="mt-6">
              <button onClick={onClose} className="btn-press btn-press-outline">
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
