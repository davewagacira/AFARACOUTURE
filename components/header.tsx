"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:top-6 md:px-6">
      <nav className="mx-auto max-w-[1480px]">
        <div
          className="relative overflow-hidden rounded-full border border-white/25 bg-[rgba(247,245,240,0.34)] shadow-[0_18px_55px_rgba(18,18,18,0.10)] backdrop-blur-2xl"
          style={{
            boxShadow:
              "0 18px 55px rgba(18,18,18,0.10), inset 0 1px 0 rgba(255,255,255,0.32)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_45%,rgba(201,169,98,0.06))]" />
          <div className="relative flex items-center justify-between px-5 py-3 md:px-7 md:py-4">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-serif text-base md:text-lg lg:text-xl tracking-[0.22em] text-foreground whitespace-nowrap">
              AFARA <span className="text-[0.82em] text-foreground/65">COUTURE</span>
            </h1>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/20 bg-[rgba(255,255,255,0.18)] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
              <Link
                href="/collections"
                className="rounded-full px-4 py-2 text-xs tracking-[0.28em] uppercase text-foreground/78 hover:bg-white/70 hover:text-foreground transition-all duration-300"
              >
                Collections
              </Link>
              <Link
                href="/selection"
                className="rounded-full px-4 py-2 text-xs tracking-[0.28em] uppercase text-foreground/78 hover:bg-white/70 hover:text-foreground transition-all duration-300"
              >
                Selection
              </Link>
              <Link
                href="/heritage"
                className="rounded-full px-4 py-2 text-xs tracking-[0.28em] uppercase text-foreground/78 hover:bg-white/70 hover:text-foreground transition-all duration-300"
              >
                Heritage
              </Link>
              <Link
                href="/services"
                className="rounded-full px-4 py-2 text-xs tracking-[0.28em] uppercase text-foreground/78 hover:bg-white/70 hover:text-foreground transition-all duration-300"
              >
                Services
              </Link>
              <Link
                href="/boutiques"
                className="rounded-full px-4 py-2 text-xs tracking-[0.28em] uppercase text-foreground/78 hover:bg-white/70 hover:text-foreground transition-all duration-300"
              >
                Boutiques
              </Link>
            </div>

            {/* Icons - Desktop */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 bg-[rgba(255,255,255,0.18)] text-foreground/78 hover:bg-[rgba(255,255,255,0.42)] hover:text-foreground transition-all duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/profile"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 bg-[rgba(255,255,255,0.18)] text-foreground/78 hover:bg-[rgba(255,255,255,0.42)] hover:text-foreground transition-all duration-300"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/cart"
                className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/8 bg-[#1d1b17] text-white hover:bg-[#2b2822] transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground shadow-sm">
                  2
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Icons and Menu Button - Right */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 bg-[rgba(255,255,255,0.18)] text-foreground/78 hover:bg-[rgba(255,255,255,0.42)] hover:text-foreground transition-all duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/8 bg-[#1d1b17] text-white hover:bg-[#2b2822] transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground shadow-sm">
                2
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 bg-[rgba(255,255,255,0.18)] text-foreground hover:bg-[rgba(255,255,255,0.42)] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-3 overflow-hidden rounded-[2rem] border border-white/25 bg-[rgba(247,245,240,0.42)] px-6 py-7 shadow-[0_18px_45px_rgba(18,18,18,0.12)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-300 md:hidden">
            <div className="mb-5 text-[10px] tracking-[0.38em] uppercase text-foreground/45">
              Explore Afara Couture
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/collections"
                className="rounded-full px-4 py-3 text-sm tracking-[0.24em] uppercase text-foreground/80 hover:bg-white/70 hover:text-foreground transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                href="/selection"
                className="rounded-full px-4 py-3 text-sm tracking-[0.24em] uppercase text-foreground/80 hover:bg-white/70 hover:text-foreground transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Selection
              </Link>
              <Link
                href="/heritage"
                className="rounded-full px-4 py-3 text-sm tracking-[0.24em] uppercase text-foreground/80 hover:bg-white/70 hover:text-foreground transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Heritage
              </Link>
              <Link
                href="/services"
                className="rounded-full px-4 py-3 text-sm tracking-[0.24em] uppercase text-foreground/80 hover:bg-white/70 hover:text-foreground transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/boutiques"
                className="rounded-full px-4 py-3 text-sm tracking-[0.24em] uppercase text-foreground/80 hover:bg-white/70 hover:text-foreground transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Boutiques
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
