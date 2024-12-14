"use client";

import { Card } from "@/components/ui/card";
import { UserCheck, Mail, Users, Share2 } from "lucide-react";

export function GrowthSection() {
  const features = [
    {
      icon: UserCheck,
      title: "Qualification intelligente des prospects",
      description: "Analysez automatiquement vos prospects pour identifier les opportunités à fort potentiel."
    },
    {
      icon: Mail,
      title: "Campagnes personnalisées",
      description: "Automatisez vos campagnes avec des messages adaptés à chaque étape du parcours client."
    },
    {
      icon: Users,
      title: "Suivi et nurturing",
      description: "Maintenez l'engagement avec des campagnes de nurturing automatisées et personnalisées."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Growth IA</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Développez votre activité plus efficacement avec nos outils d&apos;IA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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