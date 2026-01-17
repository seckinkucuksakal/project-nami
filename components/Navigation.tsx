"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatedCursor } from "@/components/AnimatedCursor";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold relative flex items-center z-10">
            <AnimatedCursor />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:flex">
            <Link href="/platform" className="text-sm font-medium hover:text-primary">
              Platform
            </Link>
            <Link href="/solutions" className="text-sm font-medium hover:text-primary">
              Solutions
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing <span className="text-muted-foreground">(TBA)</span>
            </Link>
            <Link href="/company" className="text-sm font-medium hover:text-primary">
              Company
            </Link>
          </div>

          {/* Get a demo button */}
          <div className="flex items-center gap-2 z-10">
            <Button asChild size="sm" className="hidden lg:flex">
              <Link href="/contact">Get a demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="space-y-2">
              <Link href="/platform" className="block px-4 py-2 text-sm font-medium">
                Platform
              </Link>
              <Link href="/solutions" className="block px-4 py-2 text-sm font-medium">
                Solutions
              </Link>
              <Link href="/pricing" className="block px-4 py-2 text-sm font-medium">
                Pricing <span className="text-muted-foreground">(TBA)</span>
              </Link>
              <Link href="/company" className="block px-4 py-2 text-sm font-medium">
                Company
              </Link>
              <div className="mt-4 space-y-2 px-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Get a demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

