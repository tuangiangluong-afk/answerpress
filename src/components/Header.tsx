"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Menu, X, BookOpen, Layers, ShieldCheck, TrendingUp } from "lucide-react";

interface HeaderProps {
  onOpenAudit?: () => void;
}

export default function Header({ onOpenAudit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08090C]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo - Pure & Clean, Zero AI Slop dots */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/10 group-hover:scale-105 transition-transform duration-200">
            <span className="font-mono text-xl font-black text-white">AP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              AnswerPress<span className="text-blue-500">.io</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
              Centrale Média &amp; Citations IA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/medias" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            Inventaire Médias
          </Link>
          <Link 
            href="/tarifs" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-amber-400" />
            Packages GEO
          </Link>
          <Link 
            href="/methodologie" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            L'Équation GEO
          </Link>
          <Link 
            href="/cas-clients" 
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            Bancs d'Essai &amp; ROI
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenAudit}
            className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 hover:bg-blue-500 transition-all duration-200 hover:shadow-blue-500/40 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Simuler mon Indice IA</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0E1118] px-4 pt-3 pb-6 space-y-4">
          <Link
            href="/medias"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-white py-2"
          >
            Inventaire Médias (Les Numériques, Marmiton...)
          </Link>
          <Link
            href="/tarifs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-white py-2"
          >
            Packages &amp; Tarifs
          </Link>
          <Link
            href="/methodologie"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-white py-2"
          >
            L'Équation GEO (Vs SEO traditionnel)
          </Link>
          <Link
            href="/cas-clients"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-white py-2"
          >
            Cas Clients (Tefal, Philips, D2C)
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit && onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Simuler mon Indice IA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
