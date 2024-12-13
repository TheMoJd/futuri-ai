"use client";

import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatbotsSection } from "@/components/sections/chatbots";
import { GrowthSection } from "@/components/sections/growth";

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "Solutions IA sur mesure",
      description: "Développement de solutions d'IA adaptées à vos besoins spécifiques",
      details: [
        "Analyse de données avancée",
        "Automatisation des processus",
        "Intégration sur mesure",
        "Support technique dédié"
      ]
    },
    {
      icon: MessageSquare,
      title: "Chatbots Intelligents",
      description: "Gagnez 70% de votre temps avec des chatbots disponibles 24/7",
      details: [
        "Disponibilité 24/7",
        "Réponses personnalisées",
        "Multi-canal (Web, WhatsApp, Messenger)",
        "Analyse des conversations"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth IA",
      description: "Automatisez votre prospection et maximisez vos conversions",
      details: [
        "Qualification des prospects",
        "Campagnes automatisées",
        "Nurturing intelligent",
        "Analytics avancés"
      ]
    },
    {
      icon: Bot,
      title: "Contenu Automatisé",
      description: "Générez du contenu pertinent pour vos réseaux sociaux",
      details: [
        "Création de contenu IA",
        "Publication automatique",
        "Optimisation SEO",
        "Analyse des performances"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-muted-foreground">
            Des solutions d&apos;intelligence artificielle innovantes pour propulser votre entreprise
          </p>
        </div>

        <div className="grid gap-8">
          <ChatbotsSection />
          <GrowthSection />
        </div>
      </div>
    </main>
  );
}