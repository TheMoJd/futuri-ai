"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export function TestimonialCard({ content, author, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 flex-grow">{content}</p>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <img src={image} alt={author} className="object-cover" />
        </Avatar>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </Card>
  );
}