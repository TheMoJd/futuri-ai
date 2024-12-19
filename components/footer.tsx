import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex ">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo-final.png" width={40} height={40} alt="Futuri AI" />
              <span className="font-bold">Futuri AI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Solutions d&apos;intelligence artificielle innovantes pour les entreprises
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services">Solutions IA</Link>
              </li>
              <li>
                <Link href="/services">Développement</Link>
              </li>
              <li>
                <Link href="/services">Chatbots</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about">À propos</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              
            </ul>
          </div>
          
          <div >
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy">Confidentialité</Link>
              </li>
              <li>
                <Link href="/terms">Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Futuri AI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}