import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2">
              <Image src="/logo-final.png" width={40} height={40} alt="Futuri AI" />
              <span className="font-bold">Futuri AI</span>
            </Link>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-foreground">Solutions IA</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground">Développement</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground">Chatbots</Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Entreprise</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">À propos</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Légal</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">Confidentialité</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Futuri AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}