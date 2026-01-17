import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { MetricChips } from "@/components/MetricChips";
import { ProductCard } from "@/components/ProductCard";
import { CTASection } from "@/components/CTASection";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products, integrations, useCases } from "@/lib/content";
import { Shield, Zap, Globe, TrendingUp } from "lucide-react";

export default function Home() {
  const metrics = [
    { value: "Title 194", label: "Title 195" },
    { value: "Title 196", label: "Title 197" },
    { value: "Title 198", label: "Title 199" },
    { value: "Title 200", label: "Title 201" },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
        secondaryCTA={{ text: "Explore Platform", href: "/platform" }}
      />

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade" delay={0}>
            <SectionHeader
              title="nami Products"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
              centered
            />
          </ScrollAnimation>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ScrollAnimation
                key={product.id}
                direction="up"
                delay={index * 100}
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  value={product.value}
                  threats={product.threats}
                  href={`/products/${product.slug}`}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Metrics Band */}
      <section className="border-y bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade" delay={0}>
            <MetricChips metrics={metrics} />
          </ScrollAnimation>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade" delay={0}>
            <SectionHeader
              title="nami Use Cases"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
              centered
            />
          </ScrollAnimation>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {useCases.map((useCase, index) => (
              <ScrollAnimation
                key={useCase}
                direction="up"
                delay={index * 50}
              >
                <div className="rounded-lg border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-2 text-lg font-semibold">{useCase}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="border-y bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="fade" delay={0}>
            <SectionHeader
              title="nami Integrations"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
              centered
            />
          </ScrollAnimation>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["CDN", "Cloud", "WAAP", "Edge"].map((category, index) => (
              <ScrollAnimation
                key={category}
                direction="up"
                delay={index * 100}
              >
                <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
                  <div className="mb-4 text-4xl">
                    {category === "CDN" && <Globe className="mx-auto h-12 w-12" />}
                    {category === "Cloud" && <Zap className="mx-auto h-12 w-12" />}
                    {category === "WAAP" && <Shield className="mx-auto h-12 w-12" />}
                    {category === "Edge" && <TrendingUp className="mx-auto h-12 w-12" />}
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation direction="fade" delay={400}>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/integrations">View all integrations</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA Banner */}
      <ScrollAnimation direction="fade" delay={0}>
        <CTASection
          title="Title 193"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
          primaryCTA={{ text: "Get a demo", href: "/contact" }}
          secondaryCTA={{ text: "Watch demo", href: "/contact" }}
          variant="dark"
        />
      </ScrollAnimation>
    </>
  );
}

