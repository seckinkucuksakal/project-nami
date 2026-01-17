import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact y — Request a Demo",
  description: "Request a demo of y's cybersecurity platform. See how y can protect your business from bots, fraud, and attacks.",
  openGraph: {
    title: "Contact y — Request a Demo",
    description: "Request a demo of y's cybersecurity platform. See how y can protect your business from bots, fraud, and attacks.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

