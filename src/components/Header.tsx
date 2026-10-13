"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenAudit?: () => void;
}

export default function Header({ onOpenAudit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand Logo - Pure & Minimalist */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center shadow-xs">
            <span className="font-mono text-xs font-bold text-white tracking-wider">AP</span>
          </div>
          <span className="text-base font-bold tracking-tight text-neutral-900">
            AnswerPress<span className="text-blue-600 font-normal">.io</span>
          </span>
          <span className="hidden sm:inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-neutral-600 border border-neutral-200">
            Centrale GEO
          </span>
        </Link>

        {/* Desktop Nav with Pill Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 p-1 rounded-full border border-neutral-200/60">
          <Link 
            href="/medias" 
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all"
          >
            Inventaire Titres
          </Link>
          <Link 
            href="/tarifs" 
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all"
          >
            Packages &amp; Tarifs
          </Link>
          <Link 
            href="/methodologie" 
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all"
          >
            L'Équation GEO
          </Link>
          <Link 
            href="/cas-clients" 
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all"
          >
            Bancs d'Essai
          </Link>
        </nav>

        {/* Pill Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="btn-pill-primary px-4 py-2 text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Tester mon Indice IA</span>
            <ArrowRight className="w-3 h-3 text-neutral-400" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/medias"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-700 hover:text-neutral-900 py-1.5"
          >
            Inventaire Titres
          </Link>
          <Link
            href="/tarifs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-700 hover:text-neutral-900 py-1.5"
          >
            Packages &amp; Tarifs
          </Link>
          <Link
            href="/methodologie"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-700 hover:text-neutral-900 py-1.5"
          >
            L'Équation GEO
          </Link>
          <Link
            href="/cas-clients"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-neutral-700 hover:text-neutral-900 py-1.5"
          >
            Bancs d'Essai (Tefal, Philips...)
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit && onOpenAudit();
              }}
              className="w-full btn-pill-primary py-2.5 text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Tester mon Indice IA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
