"use client";

import { ChatbotsSection } from "@/components/sections/chatbots";
import { GrowthSection } from "@/components/sections/growth";
import { AutomatedContentSection } from "@/components/sections/automated-content";
import { CustomIASolutionsSection } from "@/components/sections/costum-ai-solutions";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import AboutPage from "../about/page";

export default function ServicesPage() {
  const { ref: customIARef, isIntersecting: isCustomIAIntersecting } = useIntersectionObserver();
  const { ref: chatbotsRef, isIntersecting: isChatbotsIntersecting } = useIntersectionObserver();
  const { ref: growthRef, isIntersecting: isGrowthIntersecting } = useIntersectionObserver();
  const { ref: automatedContentRef, isIntersecting: isAutomatedContentIntersecting } = useIntersectionObserver();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Nos Services</h1>
          <p className="text-lg text-muted-foreground animate-slide-in">
            Des solutions d&apos;intelligence artificielle innovantes pour propulser votre entreprise
          </p>
        </div>

        <div className="grid gap-8">
          <div ref={customIARef} className={`transition-transform duration-500 ${isCustomIAIntersecting ? 'animate-fade-in' : ''}`}>
            <CustomIASolutionsSection />
          </div>
          <div ref={chatbotsRef} className={`transition-transform duration-500 ${isChatbotsIntersecting ? 'animate-fade-in' : ''}`}>
            <ChatbotsSection />
          </div>
          <div ref={growthRef} className={`transition-transform duration-500 ${isGrowthIntersecting ? 'animate-fade-in' : ''}`}>
            <GrowthSection />
          </div>
          <div ref={automatedContentRef} className={`transition-transform duration-500 ${isAutomatedContentIntersecting ? 'animate-fade-in' : ''}`}>
            <AutomatedContentSection />
          </div>
        </div>
      </div>
    </main>
  );
}