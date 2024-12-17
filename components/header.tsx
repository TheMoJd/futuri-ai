"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2 animate-fade-in">
          {/* Logo / Titre */}
          <span className="font-bold">Futuri AI</span>
        </Link>

        {/* Bouton hamburger visible sur mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Icône de menu hamburger */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation desktop + mobile */}
        <nav
          className={`flex-col md:flex-row md:flex items-center space-x-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-background md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground block px-4 py-2 md:p-0"
            onClick={() => setIsMenuOpen(false)}
            >
            Accueil
          </Link>

          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground block px-4 py-2 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground block px-4 py-2 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground block px-4 py-2 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://calendar.app.google/qzAMFuMg6E5uoLiAA">
            <Button>Commencer</Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Sur mobile, on place le bouton "Commencer" en dessous du menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-start md:hidden px-4 pb-4 space-y-2">
          <ThemeToggle />
          <Link href="https://calendar.app.google/qzAMFuMg6E5uoLiAA">
            <Button className="mt-2">Commencer</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
