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
    <section className="py-20 bg-primary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Chatbots Intelligents</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transformez vos interactions clients avec des chatbots qui comprennent et répondent en temps réel
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