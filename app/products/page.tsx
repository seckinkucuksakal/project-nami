import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "nami Title 235",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 235",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function ProductsPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="nami Products"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              value={product.value}
              threats={product.threats}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

