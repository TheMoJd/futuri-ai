"use client";

import { Card } from "@/components/ui/card";
import { ShoppingCart, Hotel, Calendar } from "lucide-react";

export function ChatbotsSection() {
  const solutions = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Augmentez vos ventes de 20 à 40% avec un agent IA disponible 24/7. Atteignez un taux de satisfaction client de 90%."
    },
    {
      icon: Hotel,
      title: "Hôtellerie",
      description: "Simplifiez les réservations et offrez un service client personnalisé avec notre chatbot spécialisé pour l'hôtellerie."
    },
    {
      icon: Calendar,
      title: "Prise de rendez-vous",
      description: "Automatisez la gestion des rendez-vous sur tous vos canaux (WhatsApp, Messenger...) avec notre solution intelligente."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container relative mx-auto px-6 sm:px-8">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
              Chatbots Intelligents
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
              Transformez vos interactions clients avec des chatbots qui comprennent et répondent en temps réel
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