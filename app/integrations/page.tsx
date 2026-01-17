import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { integrations } from "@/lib/content";

export const metadata: Metadata = {
  title: "nami Title 238",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 238",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function IntegrationsPage() {
  const categories = ["CDN", "WAAP", "Edge", "API Gateway"];
  const integrationsByCategory = categories.reduce((acc, category) => {
    acc[category] = integrations.filter((i) => i.category === category);
    return acc;
  }, {} as Record<string, typeof integrations>);

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="nami Integrations"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
          centered
        />

        {categories.map((category) => (
          <section key={category} id={category.toLowerCase()} className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {integrationsByCategory[category].map((integration) => (
                <Card key={integration.name} className="p-6">
                  <div className="mb-2 text-2xl">{integration.icon}</div>
                  <CardTitle className="mb-2">{integration.name}</CardTitle>
                  <CardDescription>{integration.category}</CardDescription>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

