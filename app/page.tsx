"use client";

import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section";
import { ClientsSection } from "@/components/sections/clients/clients-section";
import { ContactCTA } from "@/components/sections/contact-cta";
import AboutPage from "./about/page";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Home() {
  const { ref: heroRef, isIntersecting: isHeroIntersecting } = useIntersectionObserver();
  const { ref: servicesRef, isIntersecting: isServicesIntersecting } = useIntersectionObserver();
  const { ref: aboutRef, isIntersecting: isAboutIntersecting } = useIntersectionObserver();
  const { ref: testimonialsRef, isIntersecting: isTestimonialsIntersecting } = useIntersectionObserver();
  const { ref: clientsRef, isIntersecting: isClientsIntersecting } = useIntersectionObserver();
  const { ref: contactRef, isIntersecting: isContactIntersecting } = useIntersectionObserver();

  return (
    <main className="min-h-screen">
      <div ref={heroRef} className={`transition-transform duration-500 ${isHeroIntersecting ? 'animate-fade-in' : ''}`}>
        <HeroSection />
      </div>
      <div ref={servicesRef} className={`transition-transform duration-500 ${isServicesIntersecting ? 'animate-fade-in' : ''}`}>
        <ServicesSection />
      </div>
      <div ref={aboutRef} className={`transition-transform duration-500 ${isAboutIntersecting ? 'animate-slide-in' : ''}`}>
        <AboutPage />
      </div>
      <div ref={testimonialsRef} className={`transition-transform duration-500 ${isTestimonialsIntersecting ? 'animate-fade-in' : ''}`}>
        <TestimonialsSection />
      </div>
      <div ref={clientsRef} className={`transition-transform duration-500 ${isClientsIntersecting ? 'animate-fade-in' : ''}`}>
        <ClientsSection />
      </div>
      <div ref={contactRef} className={`transition-transform duration-500 ${isContactIntersecting ? 'animate-fade-in' : ''}`}>
        <ContactCTA />
      </div>
    </main>
  );
}