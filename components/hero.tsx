"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      {/* Background Bling */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-indigo-600 blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-600 blur-[128px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-7xl">
            Logic Layer Supply
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Premium digital hardware and assets for the modern creator. 
            Elevate your setup with engineered excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex gap-4"
        >
          <Button variant="bling" size="lg" className="group">
            Shop Collection
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="secondary" size="lg">
            About Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
