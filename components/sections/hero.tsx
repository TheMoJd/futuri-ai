"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Futuri AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Propulsez votre croissance avec l&apos;intelligence artificielle
          </p>
          <Button size="lg" className="mr-4">
            Découvrir nos services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}