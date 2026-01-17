import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface TestimonialCardProps {
  company: string;
  industry: string;
  metric: string;
  quote: string;
  author: string;
  role: string;
  href: string;
}

export function TestimonialCard({ company, industry, metric, quote, author, role, href }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{company}</CardTitle>
            <CardDescription className="mt-1">{industry}</CardDescription>
          </div>
          <Badge variant="secondary">{metric}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="mb-4 text-sm italic text-muted-foreground">
          "{quote}"
        </blockquote>
        <div className="text-sm">
          <p className="font-semibold">{author}</p>
          <p className="text-muted-foreground">{role}</p>
        </div>
        <Link
          href={href}
          className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
        >
          Read case study →
        </Link>
      </CardContent>
    </Card>
  );
}

