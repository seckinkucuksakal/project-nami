import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { solutions } from "@/lib/content";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const solution = solutions.find((s) => s.slug === params.slug);
  
  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.name} — nami Solutions`,
    description: solution.description,
    openGraph: {
      title: `${solution.name} — nami Solutions`,
      description: solution.description,
    },
  };
}

export default function SolutionPage({ params }: PageProps) {
  const solution = solutions.find((s) => s.slug === params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Hero
        title={solution.name}
        description={solution.description}
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />

      {/* Problem */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Title 269"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
            centered
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Card className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {solution.problem}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="nami Title 270"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
            centered
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Card className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {solution.solution}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Title 271"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
            centered
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {solution.benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to solve ${solution.name}?`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />
    </>
  );
}

