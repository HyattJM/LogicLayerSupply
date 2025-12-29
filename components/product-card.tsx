import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    node: {
      id: string;
      title: string;
      handle: string;
      priceRange: {
        minVariantPrice: {
          amount: string;
          currencyCode: string;
        };
      };
      images: {
        edges: {
          node: {
            url: string;
            altText: string;
          };
        }[];
      };
    };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, handle, priceRange, images } = product.node;
  const image = images.edges[0]?.node;
  const price = priceRange.minVariantPrice.amount;
  const currency = priceRange.minVariantPrice.currencyCode;

  return (
    <Link href={`/products/${handle}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-white/20">
        {image && (
          <Image
            src={image.url}
            alt={image.altText || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {parseFloat(price).toLocaleString("en-US", {
            style: "currency",
            currency: currency,
          })}
        </p>
      </div>
    </Link>
  );
}
