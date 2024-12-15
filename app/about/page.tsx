"use client";

import { Card } from "@/components/ui/card";
import { Brain, Target, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Nous repoussons constamment les limites de l'IA pour créer des solutions innovantes."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet pour garantir votre satisfaction."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs."
    },
    {
      icon: Sparkles,
      title: "Impact",
      description: "Nous créons des solutions qui ont un impact réel sur votre business."
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="container ">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">À propos de Futuri AI</h1>
          <p className="text-lg text-muted-foreground">
            Nous sommes passionnés par l&apos;innovation et déterminés à transformer
            le monde des entreprises grâce à l&apos;intelligence artificielle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-muted-foreground">
              Démocratiser l&apos;accès à l&apos;intelligence artificielle en proposant
              des solutions innovantes et accessibles qui permettent aux entreprises
              de toutes tailles de se transformer et de croître.
            </p>
          </Card>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Vision</h2>
            <p className="text-muted-foreground">
              Devenir le partenaire de référence des entreprises dans leur transformation
              digitale en utilisant l&apos;IA comme levier de croissance et d&apos;innovation.
            </p>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">Nos Valeurs</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center">
              <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}