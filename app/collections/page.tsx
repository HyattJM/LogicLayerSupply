import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getAllCollections } from "@/lib/shopify";

export default async function CollectionsPage() {
  const collections = await getAllCollections();

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
          
           {collections.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
                {collections.map((collection: any) => (
                  <Link 
                    key={collection.node.id} 
                    href={`/collections/${collection.node.handle}`}
                    className="group relative h-64 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  >
                    {collection.node.image && (
                      <Image
                        src={collection.node.image.url}
                        alt={collection.node.image.altText || collection.node.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                        {collection.node.title}
                      </span>
                    </div>
                  </Link>
                ))}
             </div>
           ) : (
              <div className="h-48 w-full max-w-2xl bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-6">
                <span className="text-lg font-medium text-muted-foreground">No collections found via API.</span>
              </div>
           )}
        </div>
      </Container>
    </main>
  );
}
