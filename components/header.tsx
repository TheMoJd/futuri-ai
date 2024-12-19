"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-32 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2 animate-fade-in">
        <Image
          src="/file.png"
          alt="Futuri AI"
          width={80}
          height={80}

        />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground focus:outline-none"
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-background md:bg-transparent`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
            <Link
              href="/"
              className="text-muted-foreground text-lg hover:text-foreground block px-4 py-2 md:p-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground text-lg hover:text-foreground block px-4 py-2 md:p-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground text-lg hover:text-foreground block px-4 py-2 md:p-0"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground text-lg hover:text-foreground block px-4 py-2 md:p-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://calendar.app.google/qzAMFuMg6E5uoLiAA">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Audit Gratuit
            </Button>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-start md:hidden px-4 pb-4 space-y-2">
          <Link href="https://calendar.app.google/qzAMFuMg6E5uoLiAA">
            <Button size="lg" className="text-lg px-8 py-6 h-auto w-full">
              Audit Gratuit
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}