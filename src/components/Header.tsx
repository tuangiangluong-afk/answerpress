"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenAudit?: () => void;
}

const NAV_LINKS = [
  { href: "/medias", label: "Titres" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/methodologie", label: "Méthode GEO" },
  { href: "/cas-clients", label: "Cas Clients" },
  { href: "/guides", label: "Guides" },
];

export default function Header({ onOpenAudit }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleAuditClick = () => {
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      window.location.href = "/#diagnostic";
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/95 backdrop-blur-md border-b border-ink/15">
      {/* Filet double façon manchette presse */}
      <div className="h-[3px] border-t border-b border-ink/70" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-[68px]">
        {/* Logo — manchette avec sous-titre empilé verticalement pour préserver l'espace horizontal */}
        <Link href="/" className="flex flex-col justify-center shrink-0 group">
          <span className="press-title text-2xl sm:text-[1.65rem] leading-none tracking-tight">
            AnswerPress<span className="text-press">.</span>
          </span>
          <span className="text-[8.5px] uppercase tracking-[0.2em] text-stone font-semibold mt-1">
            Conseil GEO &amp; Régie
          </span>
        </Link>

        {/* Navigation desktop — liens concis, aérés et 100% sans retour à la ligne */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.14em] whitespace-nowrap shrink-0 border-b pb-0.5 transition-colors ${
                  isActive
                    ? "text-press border-press font-bold"
                    : "text-graphite hover:text-press border-transparent hover:border-press font-semibold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions desktop & tablet */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            onClick={handleAuditClick}
            className="btn-press btn-press-ink !py-2 sm:!py-2.5 !px-3.5 sm:!px-5 text-[10px] sm:text-[11px] whitespace-nowrap shrink-0"
          >
            <span>Tester mon Indice IA</span>
            <ArrowRight className="w-3 h-3 hidden sm:inline" />
          </button>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:text-press transition-colors border border-ink/20 bg-paper-alt shrink-0"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile & Tablette déroulant */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-ink/20 bg-paper px-4 pt-3 pb-6 space-y-2.5 shadow-xl">
          <div className="pb-2 border-b border-ink/10 flex items-center justify-between text-[10px] text-stone uppercase tracking-wider font-semibold">
            <span>Agence Conseil Indépendante</span>
            <span className="text-press">Reworld Media &amp; Partenaires</span>
          </div>

          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between text-[12px] uppercase tracking-[0.14em] py-2 border-b border-ink/10 ${
                  isActive
                    ? "text-press font-bold"
                    : "text-graphite hover:text-press font-semibold"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 bg-press rounded-full" />}
              </Link>
            );
          })}

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleAuditClick();
              }}
              className="w-full btn-press btn-press-red justify-center gap-2"
            >
              <span>Tester mon Indice de Citation IA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
