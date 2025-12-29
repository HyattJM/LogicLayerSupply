import { Container } from "@/components/ui/container";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 text-center py-20">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Our latest collection of premium workspace gear is currently being curated. 
            Check back soon for the drop.
          </p>
          <div className="w-full max-w-md h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
             <span className="text-muted-foreground">Product Grid Loading...</span>
          </div>
        </div>
      </Container>
    </main>
  );
}
