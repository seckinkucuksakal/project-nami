import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/company" className="hover:text-foreground">
                Title 231
              </Link>
              <Link href="/company" className="hover:text-foreground">
                Title 232
              </Link>
              <Link href="/company" className="hover:text-foreground">
                Title 233
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © Title 234 2026. All rights reserved. (Will be edited later)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

