import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export function Hero({ title, subtitle, description, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center relative">
          {subtitle && (
            <p className="mb-4 text-lg font-medium text-muted-foreground">
              {subtitle}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-bold tracking-[0.18em] sm:text-5xl md:text-6xl lg:text-7xl">
            nami
          </h1>
          {description && (
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {primaryCTA && (
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

