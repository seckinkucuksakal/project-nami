import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { customers } from "@/lib/content";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return customers.map((customer) => ({
    slug: customer.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const customer = customers.find((c) => c.slug === params.slug);
  
  if (!customer) {
    return {
      title: "Customer Story Not Found",
    };
  }

  return {
    title: `${customer.company} — nami Customer Story`,
    description: customer.problem,
    openGraph: {
      title: `${customer.company} — nami Customer Story`,
      description: customer.problem,
    },
  };
}

export default function CustomerPage({ params }: PageProps) {
  const customer = customers.find((c) => c.slug === params.slug);

  if (!customer) {
    notFound();
  }

  return (
    <>
      <Hero
        title={`${customer.company} Success Story`}
        description={`How ${customer.company} protects their business with nami`}
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <Badge variant="secondary">{customer.industry}</Badge>
              <Badge variant="outline">{customer.metric}</Badge>
            </div>
            <SectionHeader title="Title 273" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Challenge */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Title 274" />
            <Card className="mt-6 p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {customer.problem}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Title 275" />
            <Card className="mt-6 p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {customer.solution}
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Results */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Title 276" />
            <Card className="mt-6 p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {customer.results}
              </p>
              <div className="mt-6">
                <Badge variant="default" className="text-lg px-4 py-2">
                  {customer.metric}
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Quote */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card className="p-8">
              <blockquote className="text-xl italic text-muted-foreground">
                "{customer.quote}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold">{customer.author}</p>
                <p className="text-sm text-muted-foreground">{customer.role}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to protect your business like these customers?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />
    </>
  );
}

