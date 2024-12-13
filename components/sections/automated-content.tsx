"use client";

import { Card } from "@/components/ui/card";
import { FileText, Edit, Send, Clock } from "lucide-react";

export function AutomatedContentSection() {
  const features = [
    {
      icon: FileText,
      title: "Génération de contenu",
      description: "Créez automatiquement des articles, des blogs et d'autres contenus écrits."
    },
    {
      icon: Edit,
      title: "Révision automatique",
      description: "Utilisez l'IA pour réviser et améliorer la qualité de votre contenu."
    },
    {
      icon: Send,
      title: "Publication programmée",
      description: "Planifiez et publiez automatiquement votre contenu sur différentes plateformes."
    },
    {
      icon: Clock,
      title: "Analyse de performance",
      description: "Suivez et analysez les performances de votre contenu en temps réel."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contenu Automatisé</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Automatisez la création et la gestion de votre contenu avec nos outils d&apos;IA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}