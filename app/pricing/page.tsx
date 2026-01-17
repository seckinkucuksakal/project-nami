import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "nami Title 239",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 239",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function PricingPage() {
  return (
    <>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="nami Pricing"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
            centered
          />

          <div className="mx-auto mt-12 max-w-2xl">
            <Card className="p-12 text-center">
              <h3 className="mb-4 text-2xl font-semibold">Title 240</h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
              <p className="mb-8 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <CTASection
        title="Title 241"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
        primaryCTA={{ text: "Get a demo", href: "/contact" }}
      />
    </>
  );
}

