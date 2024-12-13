"use client";

import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ChatbotsSection } from "@/components/sections/chatbots";
import { GrowthSection } from "@/components/sections/growth";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { ClientsSection } from "@/components/sections/clients/clients-section";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactCTA />
    </main>
  );
}