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
    <section className="py-20 bg-background px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-slide-in">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/services">
            <Button size="lg" className="mr-4 transform transition-transform duration-500 hover:scale-110">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}