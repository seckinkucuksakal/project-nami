import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resources } from "@/lib/content";

export const metadata: Metadata = {
  title: "nami Title 281",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 281",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function ResourcesPage() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="nami Resources"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
          centered
        />

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          <Badge variant="default" className="cursor-pointer">
            Title 282
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="cursor-pointer hover:bg-accent">
              {category}
            </Badge>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.id} className="group h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="secondary">{resource.category}</Badge>
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{resource.date}</span>
                  <span>•</span>
                  <span>{resource.readTime}</span>
                </div>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:gap-2 transition-all"
                >
                  Title 283 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

