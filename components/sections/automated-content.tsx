"use client";

import { Card } from "@/components/ui/card";
import { FileText, Share2, Clock } from "lucide-react";

export function AutomatedContentSection() {
  const features = [
    {
      icon: FileText,
      title: "Création de contenu",
      description: "Générez du contenu engageant et optimisé pour vos réseaux sociaux."
    },
    {
      icon: Share2,
      title: "Publication automatisée",
      description: "Planifiez et publiez automatiquement sur toutes vos plateformes (site web, réseaux sociaux)."
    },
    {
      icon: Clock,
      title: "Analyse de performance",
      description: "Suivez et analysez les performances de votre contenu en temps réel."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background overflow-hidden rounded-3xl">

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container relative mx-auto px-6 sm:px-8">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
              Contenu Automatisé
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
              Automatisez la création et la gestion de votre contenu avec nos outils d&apos;IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5">
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}