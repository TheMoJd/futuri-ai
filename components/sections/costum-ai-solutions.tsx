"use client";

import { Card } from "@/components/ui/card";
import { Code, BarChart, Globe } from "lucide-react";

export function CustomIASolutionsSection() {
  const solutions = [
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Créez des solutions, des applications et des SAAS IA adaptés à vos besoins spécifiques avec notre expertise en développement sur mesure."
    },
    {
      icon: BarChart,
      title: "Analyse de données avancée",
      description: "Exploitez vos données (exemples : CRM, Excel documentations) pour obtenir des insights précieux et effectuer des actions stratégiques automatisées."
    },
    {
      icon: Globe,
      title: "Intégration multi-plateforme",
      description: "Intégrez nos solutions IA sur toutes vos plateformes pour une expérience utilisateur cohérente et optimisée."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container relative mx-auto px-6 sm:px-8">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
              Solutions IA sur mesure
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
              Adaptez l&apos;intelligence artificielle à vos besoins uniques avec nos solutions personnalisées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5">
                  <solution.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}