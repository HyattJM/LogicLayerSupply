"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled
          ? "border-white/10 bg-background/60 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
             <img src="/logo.png" alt="Logic Layer" className="object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            LogicLayer
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/collections" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Collections
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative group">
            <ShoppingBag className="h-5 w-5 group-hover:text-indigo-400 transition-colors" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-indigo-500" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </motion.header>
  );
}
