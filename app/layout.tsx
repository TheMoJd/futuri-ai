import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Futuri AI - Solutions d\'Intelligence Artificielle',
  description: 'Agence spécialisée dans le développement de solutions d\'intelligence artificielle sur mesure pour les entreprises.',
  icons: {
    icon: [
      {
        url: '/public/logo.png',
        sizes: 'any',
      },
    ]
  }, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}