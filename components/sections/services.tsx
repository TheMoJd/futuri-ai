"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { Brain, MessageSquare, TrendingUp, Bot, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Solutions IA sur mesure",
      description: "Développement de solutions d'IA adaptées à vos besoins spécifiques"
    },
    {
      icon: MessageSquare,
      title: "Chatbots Intelligents",
      description: "Gagnez 70% de votre temps avec des chatbots disponibles 24/7"
    },
    {
      icon: TrendingUp,
      title: "Growth IA",
      description: "Automatisez votre prospection et maximisez vos conversions"
    },
    {
      icon: Bot,
      title: "Contenu Automatisé",
      description: "Générez du contenu pertinent pour vos réseaux sociaux"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container relative mx-auto px-6 sm:px-8">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
              Nos Services
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
              Des solutions innovantes adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard 
                  {...service}
                  className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/services">
              <Button 
                size="lg" 
                className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}