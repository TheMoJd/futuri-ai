"use client";

interface ClientLogoProps {
  name: string;
  logo: string;
}

export function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-background rounded-lg shadow-sm">
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-12 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}