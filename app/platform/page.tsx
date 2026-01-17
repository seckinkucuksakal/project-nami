import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { MetricChips } from "@/components/MetricChips";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, TrendingUp, Brain, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "nami Title 202",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 202",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function PlatformPage() {
  const metrics = [
    { value: "Title 203", label: "Title 204" },
    { value: "Title 205", label: "Title 206" },
    { value: "Title 207", label: "Title 208" },
    { value: "Title 209", label: "Title 210" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Title 211",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    },
    {
      icon: Zap,
      title: "Title 212",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    },
    {
      icon: Shield,
      title: "Title 213",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    },
    {
      icon: Globe,
      title: "Title 214",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    },
    {
      icon: TrendingUp,
      title: "Title 215",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    },
    {
      icon: Lock,
      title: "Title 216",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
    },
  ];

  return (
    <>
      <Hero
        title="nami Platform"
        subtitle="Title 217"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
        secondaryCTA={{ text: "Explore products", href: "/products" }}
      />

      {/* Metrics */}
      <section className="border-y bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <MetricChips metrics={metrics} />
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="nami Title 218"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="nami Title 219"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Will be edited later)"
            centered
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-primary">1</div>
              <h3 className="mb-2 text-xl font-semibold">Title 220</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-primary">2</div>
              <h3 className="mb-2 text-xl font-semibold">Title 221</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="mb-4 text-4xl font-bold text-primary">3</div>
              <h3 className="mb-2 text-xl font-semibold">Title 222</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Title 223"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />
    </>
  );
}

