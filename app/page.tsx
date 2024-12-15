"use client";

import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { ClientsSection } from "@/components/sections/clients/clients-section";
import { ContactCTA } from "@/components/sections/contact-cta";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutPage />
      <TestimonialsSection />
      <ClientsSection />
      <ContactCTA />
    </main>
  );
}