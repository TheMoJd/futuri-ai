"use client";

import { Card } from "@/components/ui/card";
import { Code, BarChart, Globe } from "lucide-react";

export function CustomIASolutionsSection() {
  const solutions = [
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Créez des solutions IA adaptées à vos besoins spécifiques avec notre expertise en développement sur mesure."
    },
    {
      icon: BarChart,
      title: "Analyse de données avancée",
      description: "Exploitez vos données pour obtenir des insights précieux et prendre des décisions éclairées."
    },
    {
      icon: Globe,
      title: "Intégration multi-plateforme",
      description: "Intégrez nos solutions IA sur toutes vos plateformes pour une expérience utilisateur cohérente et optimisée."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Solutions IA sur mesure</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Adaptez l&apos;intelligence artificielle à vos besoins uniques avec nos solutions personnalisées
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <solution.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}