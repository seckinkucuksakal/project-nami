import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { products } from "@/lib/content";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} — nami Title 257`,
    description: product.description,
    openGraph: {
      title: `${product.name} — nami Title 257`,
      description: product.description,
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const faqs = [
    {
      question: `Title 258`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)`,
    },
    {
      question: `Title 259`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)`,
    },
    {
      question: `Title 260`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)`,
    },
    {
      question: `Title 261`,
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)`,
    },
    {
      question: `What kind of support is available for ${product.name}?`,
      answer: `We offer 24/7 support for all nami products, with dedicated account managers for Enterprise customers. Our support team provides threat research, custom rule configuration, and incident response assistance.`,
    },
  ];

  return (
    <>
      <Hero
        title={product.name}
        description={product.description}
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />

      {/* Stops These Threats */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Title 262"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
            centered
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {product.threats.map((threat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm">{threat}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How y Works */}
      <section className="border-y bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="nami Title 263"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <div className="mb-4 text-3xl font-bold text-primary">1</div>
              <h3 className="mb-2 text-xl font-semibold">Title 264</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
            </Card>
            <Card className="p-8">
              <div className="mb-4 text-3xl font-bold text-primary">2</div>
              <h3 className="mb-2 text-xl font-semibold">Title 265</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
            </Card>
            <Card className="p-8">
              <div className="mb-4 text-3xl font-bold text-primary">3</div>
              <h3 className="mb-2 text-xl font-semibold">Title 266</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Deploy in Minutes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Title 267"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Title 285", "Title 286", "Title 287", "Title 288"].map((method) => (
              <Card key={method} className="p-6 text-center">
                <h3 className="mb-2 text-lg font-semibold">{method}</h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently asked questions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
            centered
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection
        title={`Ready to get started with ${product.name}?`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />
    </>
  );
}

