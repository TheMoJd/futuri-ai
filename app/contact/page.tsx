"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-muted-foreground">
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder="Nom complet" />
              </div>
              <div>
                <Input placeholder="Sujet" />
              </div>
              <div>
                <Textarea placeholder="Votre message" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Envoyer</Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-muted-foreground">07 62 78 32 76</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-muted-foreground">Paris, France</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}