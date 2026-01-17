import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  value: string;
  threats: string[];
  href: string;
}

export function ProductCard({ name, description, value, threats, href }: ProductCardProps) {
  return (
    <Card className="group h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm font-medium">{value}</p>
        <div className="mb-4 space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">Stops these threats:</p>
          <ul className="space-y-1">
            {threats.slice(0, 3).map((threat, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="mr-2 text-primary">•</span>
                <span>{threat}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:gap-2 transition-all"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

