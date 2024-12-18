"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full">
      <section className="relative w-full py-36 bg-gradient-to-b from-background to-background/80 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="container relative mx-auto px-6 sm:px-8">
          <div className="space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
                Contactez-nous
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in delay-100">
                Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
                <Card className="p-8 transition-all duration-300 hover:shadow-xl hover:bg-accent/5">
                  <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Envoyez-nous un message
                  </h2>
                  <form className="space-y-4">
                    <div className="animate-slide-in" style={{ animationDelay: "300ms" }}>
                      <Input placeholder="Nom complet" />
                    </div>
                    <div className="animate-slide-in" style={{ animationDelay: "400ms" }}>
                      <Input placeholder="Sujet" />
                    </div>
                    <div className="animate-slide-in" style={{ animationDelay: "500ms" }}>
                      <Textarea placeholder="Votre message" className="min-h-[150px]" />
                    </div>
                    <Button className="w-full animate-slide-in" style={{ animationDelay: "600ms" }}>
                      Envoyer
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Téléphone", content: "+33 6 XX XX XX XX" },
                  { icon: Mail, title: "Email", content: "contact@futuri-ai.com" },
                  { icon: MapPin, title: "Adresse", content: "Paris, France" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="animate-slide-in"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <Card className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent/5">
                      <div className="flex items-center gap-4">
                        <item.icon className="h-8 w-8 text-primary" />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.content}</p>
                        </div>
                      </div>
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