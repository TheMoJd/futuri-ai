"use client";

import { useEffect, useState } from "react";
import { ClientLogo } from "./client-logo";

const clients = [
  {
    name: "Tech Corp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format"
  },
  {
    name: "Digital Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format"
  },
  {
    name: "Future Systems",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format"
  },
  {
    name: "Smart Industries",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format"
  },
  {
    name: "Innovation Labs",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format"
  }
];

export function ClientsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (clients.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hidden py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${clients.length * 200}px`
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="w-[180px] flex-shrink-0">
                <ClientLogo {...client} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}