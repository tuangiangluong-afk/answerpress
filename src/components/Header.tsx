"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenAudit?: () => void;
}

const NAV_LINKS = [
  { href: "/medias", label: "Inventaire Titres" },
  { href: "/tarifs", label: "Packages & Tarifs" },
  { href: "/methodologie", label: "L'Équation GEO" },
  { href: "/cas-clients", label: "Bancs d'Essai" },
  { href: "/guides", label: "Guides" },
];

export default function Header({ onOpenAudit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/95 backdrop-blur-md border-b border-ink/15">
      {/* Filet double façon manchette */}
      <div className="h-[3px] border-t border-b border-ink/70" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-[72px]">
        {/* Logo — manchette */}
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="press-title text-2xl leading-none">
            AnswerPress<span className="text-press">.</span>
          </span>
          <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-[0.22em] text-stone">
            Centrale d&apos;Autorité Média
          </span>
        </Link>

        {/* Navigation — liens éditoriaux */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-graphite hover:text-press border-b border-transparent hover:border-press pb-0.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenAudit} className="btn-press btn-press-ink !py-2.5 !px-5">
            Tester mon Indice IA
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink hover:text-press"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ink/15 bg-paper px-4 pt-4 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-graphite hover:text-press py-1.5 border-b border-ink/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit && onOpenAudit();
              }}
              className="w-full btn-press btn-press-ink"
            >
              Tester mon Indice IA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
