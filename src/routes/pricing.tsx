import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhyUs } from "@/components/site/WhyUs";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Plans That Scale With You | BDA Technologies" },
      {
        name: "description",
        content:
          "Transparent pricing for BDA Technologies. Start with a focused pilot and grow into an embedded partnership across your business systems.",
      },
      { property: "og:title", content: "Pricing — BDA Technologies" },
      {
        property: "og:description",
        content: "Plans that scale with your business — from a focused pilot to org-wide rollout.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <Pricing />
        <WhyUs />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
