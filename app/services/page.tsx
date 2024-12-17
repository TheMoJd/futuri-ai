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
    <main className="min-h-screen w-full">
      <section className="relative w-full pt-24 pb-16 bg-gradient-to-b from-background to-background/80 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="container relative mx-auto px-6 sm:px-8">
          <div className="space-y-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-in">
                Nos Services
              </h1>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-100">
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
        </div>
      </section>
    </main>
  );
}