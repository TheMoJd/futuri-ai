"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <a href="tel:0762783276" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            07 62 78 32 76
          </a>
          <a href="mailto:moetezjaoued@gmail.com" className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            moetezjaoued@gmail.com
          </a>
        </div>
        <Button variant="secondary" size="lg">
          Démarrer votre projet
        </Button>
      </div>
    </section>
  );
}