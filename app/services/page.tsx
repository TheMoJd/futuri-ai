"use client";

import { Card } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatbotsSection } from "@/components/sections/chatbots";
import { GrowthSection } from "@/components/sections/growth";
import { AutomatedContentSection } from "@/components/sections/automated-content";
import { CustomIASolutionsSection } from "@/components/sections/costum-ai-solutions";
export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-muted-foreground">
            Des solutions d&apos;intelligence artificielle innovantes pour propulser votre entreprise
          </p>
        </div>

        <div className="grid gap-8">
          <CustomIASolutionsSection />
          <ChatbotsSection />
          <GrowthSection />
          <AutomatedContentSection />
        </div>
      </div>
    </main>
  );
}