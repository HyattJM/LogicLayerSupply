import { Container } from "@/components/ui/container";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 text-center py-20">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Collections
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our themed sets of hardware and peripherals. 
            Designed for coherence and performance.
          </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
              {[1, 2].map((i) => (
                <div key={i} className="h-48 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-6 hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-lg font-medium">Collection {i}</span>
                </div>
              ))}
           </div>
        </div>
      </Container>
    </main>
  );
}
