import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "nami Title 236",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 236",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function SolutionsPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="nami Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.id} className="group h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{solution.name}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:gap-2 transition-all"
                >
                  Title 237 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

