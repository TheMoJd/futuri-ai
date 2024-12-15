"use client";

import { useEffect, useState } from "react";
import { TestimonialCard } from "./testimonial-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    content: "Futuri AI a transformé notre service client. Le chatbot est incroyablement efficace et nos clients adorent la réactivité 24/7.",
    author: "Sophie Martin",
    role: "Directrice Marketing",
    company: "E-Shop Plus",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
  },
  {
    content: "L'automatisation de notre prospection avec Growth IA nous a permis de doubler notre pipeline commercial en seulement 3 mois.",
    author: "Thomas Dubois",
    role: "Directeur Commercial",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop"
  },
  {
    content: "La génération de contenu IA nous fait gagner un temps précieux tout en maintenant une présence constante sur les réseaux sociaux.",
    author: "Marie Lambert",
    role: "Social Media Manager",
    company: "Digital Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  const showNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className=" hidden py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={showPrevious}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={showNext}
              disabled={isAnimating}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}