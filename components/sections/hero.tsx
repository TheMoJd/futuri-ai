"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] bg-gradient-to-b from-primary/10 to-background flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
            Futuri AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-100">
            Propulsez votre croissance avec l&apos;intelligence artificielle
          </p>
          <Link href="/services" className="animate-slide-in delay-200">
            <Button size="lg" 
            className="mr-4 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90">
                <span className="relative z-10 flex items-center">
                Découvrir nos services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}