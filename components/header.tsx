"use client";

import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="font-bold">Futuri AI</span>
        </Link>
        
        <nav className=" md:flex items-center space-x-6">
          <Link href="/services" className="text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            À propos
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button>Commencer</Button>
        </div>
      </div>
    </header>
  );
}