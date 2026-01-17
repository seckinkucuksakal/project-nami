import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { resources } from "@/lib/content";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resource = resources.find((r) => r.slug === params.slug);
  
  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: `${resource.title} — nami Resources`,
    description: resource.description,
    openGraph: {
      title: `${resource.title} — nami Resources`,
      description: resource.description,
    },
  };
}

export default function ResourcePage({ params }: PageProps) {
  const resource = resources.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {resource.category}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              {resource.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{resource.date}</span>
              <span>•</span>
              <span>{resource.readTime}</span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Content */}
          <Card className="p-8">
            <div className="prose prose-sm max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {resource.content}
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
                </p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
                </p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
                </p>
              </div>
            </div>
          </Card>

          {/* Related Resources */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Title 278</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {resources
                .filter((r) => r.id !== resource.id && r.category === resource.category)
                .slice(0, 2)
                .map((related) => (
                  <Card key={related.id} className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {related.category}
                    </Badge>
                    <h3 className="mb-2 font-semibold">{related.title}</h3>
                    <p className="text-sm text-muted-foreground">{related.description}</p>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

