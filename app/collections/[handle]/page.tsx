import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getCollectionByHandle } from "@/lib/shopify";
import { ProductCard } from "@/components/product-card";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = await getCollectionByHandle(handle);

  if (!collection) {
    notFound();
  }

  const { title, description, products } = collection;
  const allProducts = products.edges ? products.edges : [];

  return (
    <main className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 text-center py-20 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>

        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allProducts.map((product: any) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full h-64 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
             <span className="text-muted-foreground">No products found in this collection.</span>
          </div>
        )}
      </Container>
    </main>
  );
}
