"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-24 md:h-32  items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2 animate-fade-in">
          <Image
            src="/file.png"
            alt="Futuri AI"
            width={60}
            height={60}
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-muted-foreground hover:text-foreground focus:outline-none relative z-20"
          aria-label="Toggle menu"
        >
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
              d={"M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav className="hidden md:block">
          <div className="flex items-center md:space-x-8">
            <Link
              href="/"
              className="text-muted-foreground text-lg hover:text-foreground px-4 py-2"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground text-lg hover:text-foreground px-4 py-2"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground text-lg hover:text-foreground px-4 py-2"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground text-lg hover:text-foreground px-4 py-2"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://calendar.app.google/qzAMFuMg6E5uoLiAA">
            <Button size="lg" className="text-md px-8 py-6 h-auto">
              Audit Gratuit
            </Button>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-end pt-6">
        {/* Overlay semi-transparent */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu container */}
          <div className="relative bg-background rounded-lg shadow-lg p-6 w-64 max-w-full text-center z-50 animate-fade-in">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="space-y-4 mt-4">
              <Link
                href="/"
                className="text-muted-foreground text-lg hover:text-foreground block"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground text-lg hover:text-foreground block"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground text-lg hover:text-foreground block"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground text-lg hover:text-foreground block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="https://calendar.app.google/qzAMFuMg6E5uoLiAA"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button size="sm" className="text-sm px-8 py-6 h-auto mt-4">
                  Audit Gratuit
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
