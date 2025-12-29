import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto py-20 space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              About Logic Layer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
            We provide the fundamental building blocks for the next generation of workspaces. 
            Our mission is to supply professionals with engineered excellence.
            </p>
          </div>
          
          <div className="prose prose-invert mx-auto">
             <p>
               Founded in 2024, Logic Layer Supply exists at the intersection of design and engineering.
               We believe that the tools you use shape the work you create. That's why we obsess over 
               every pixel, every interaction, and every line of code in our products.
             </p>
             <p className="mt-4">
               Whether you are building a home office, a corporate workstation, or a creative 
               studio, our products are designed to give you a head start without compromising on quality.
             </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
