
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import  DIDAvatar  from "@/components/did-avatar";
import Chatbot from '@/components/chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Futuri AI - Solutions d\'Intelligence Artificielle',
  description: 'Agence spécialisée dans le développement de solutions d\'intelligence artificielle sur mesure pour les entreprises.',
  icons: {
    icon: [
      {
        url: '/logo.png',
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
        <DIDAvatar/>  
        <Footer />        
      </body>
    </html>
  );
}