"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}