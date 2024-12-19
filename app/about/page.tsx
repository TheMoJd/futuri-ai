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
    <main className="min-h-screen w-full overflow-hidden">
      <section className="flex items-center justify-center py-24 bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none " />
        <div className="container relative mx-auto px-6  sm:px-8">
          <div className="space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
                Qui sommes-nous ?
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in delay-100">
                Nous sommes passionnés par l&apos;innovation et déterminés à transformer
                le monde des entreprises grâce à l&apos;intelligence artificielle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`transition-transform duration-500 animate-slide-in delay-100`}>
                <Card className="p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5">
                  <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Notre Mission
                  </h2>
                  <p className="text-muted-foreground">
                    Démocratiser l&apos;accès à l&apos;intelligence artificielle en proposant
                    des solutions innovantes et accessibles qui permettent aux entreprises
                    de se transformer et de croître.
                  </p>
                </Card>
              </div>
              <div className={`transition-transform duration-500 animate-slide-in delay-100`}>
                <Card className="p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5">
                  <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
                    Notre Vision
                  </h2>
                  <p className="text-muted-foreground">
                    Devenir le partenaire de référence des entreprises dans leur transformation
                    digitale en utilisant l&apos;IA comme levier de croissance et d&apos;innovation.
                  </p>
                </Card>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Nos Valeurs
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group animate-slide-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5">
                      <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}