import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getProductByHandle } from "@/lib/shopify";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const { title, description, images, priceRange } = product;
  const image = images.edges[0]?.node;
  const price = priceRange.minVariantPrice.amount;
  const currency = priceRange.minVariantPrice.currencyCode;

  return (
    <main className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {image && (
              <Image
                src={image.url}
                alt={image.altText || title}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {title}
              </h1>
              <p className="text-2xl font-medium text-indigo-400">
                {parseFloat(price).toLocaleString("en-US", {
                  style: "currency",
                  currency: currency,
                })}
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>{description}</p>
            </div>

            <div className="pt-6">
              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg"
                disabled
              >
                Add to Cart (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
