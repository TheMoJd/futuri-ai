"use client";

import { ChatbotsSection } from "@/components/sections/chatbots";
import { GrowthSection } from "@/components/sections/growth";
import { AutomatedContentSection } from "@/components/sections/automated-content";
import { CustomIASolutionsSection } from "@/components/sections/costum-ai-solutions";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ServicesPage() {
  const { ref: customIARef, isIntersecting: isCustomIAIntersecting } = useIntersectionObserver();
  const { ref: chatbotsRef, isIntersecting: isChatbotsIntersecting } = useIntersectionObserver();
  const { ref: growthRef, isIntersecting: isGrowthIntersecting } = useIntersectionObserver();
  const { ref: automatedContentRef, isIntersecting: isAutomatedContentIntersecting } = useIntersectionObserver();

  return (
    <main className="min-h-screen w-screen overflow-x-hidden ">
      <section className="flex items-center justify-center py-24 bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="container relative mx-auto px-6 sm:px-8">
          <div className="space-y-16"> 
            
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
                Nos services
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in delay-100">
                Des solutions d&apos;intelligence artificielle innovantes pour propulser votre entreprise
              </p>
            </div>

            <div className="grid gap-16">
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
        </div>
      </section>
    </main>
  );
}