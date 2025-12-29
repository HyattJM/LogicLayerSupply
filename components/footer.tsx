import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter text-white">
                LogicLayer
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              High-performance workstation setups for the modern professional. 
              Engineered for excellence.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Logic Layer Supply. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
