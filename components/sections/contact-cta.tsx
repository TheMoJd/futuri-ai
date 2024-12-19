"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container relative mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
            Prêt à transformer votre entreprise ?
          </h2>
          
          <p className="text-lg text-muted-foreground animate-fade-in delay-100">
            Contactez-nous dès maintenant pour discuter de votre projet
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fade-in delay-200">
            <a 
              href="tel:0762783276" 
              className="flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 bg-background/50 hover:bg-accent/10"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-lg">07 62 78 32 76</span>
            </a>
            <a 
              href="mailto:futuriiacom@gmail.com" 
              className="flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 bg-background/50 hover:bg-accent/10"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-lg">futuriiacom@gmail.com</span>
            </a>
          </div>

          <Link 
            href="https://calendar.app.google/qzAMFuMg6E5uoLiAA"
            className="inline-block animate-slide-in delay-300"   
          >
            <Button 
              variant="default" 
              size="lg"
              className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
            >
              Profitez d'un audit IA gratuit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}