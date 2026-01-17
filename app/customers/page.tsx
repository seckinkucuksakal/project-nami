import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Badge } from "@/components/ui/badge";
import { customers } from "@/lib/content";

export const metadata: Metadata = {
  title: "nami Title 279",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  openGraph: {
    title: "nami Title 279",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)",
  },
};

export default function CustomersPage() {
  const industries = Array.from(new Set(customers.map((c) => c.industry)));

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="nami Customers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Will be edited later)"
          centered
        />

        {/* Industry Filters */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          <Badge variant="default" className="cursor-pointer">
            Title 280
          </Badge>
          {industries.map((industry) => (
            <Badge key={industry} variant="outline" className="cursor-pointer hover:bg-accent">
              {industry}
            </Badge>
          ))}
        </div>

        {/* Customer Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {customers.map((customer) => (
            <TestimonialCard
              key={customer.id}
              company={customer.company}
              industry={customer.industry}
              metric={customer.metric}
              quote={customer.quote}
              author={customer.author}
              role={customer.role}
              href={`/customers/${customer.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

