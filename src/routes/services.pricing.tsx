import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Container } from "@/components/site/Container";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhyUs } from "@/components/site/WhyUs";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { AnimatedButton } from "@/components/site/AnimatedButton";

export const Route = createFileRoute("/services/pricing")({
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

      <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20">
        <div aria-hidden className="absolute inset-0 bg-mesh opacity-70" />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow"
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl flex flex-col items-center text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-foreground">
              Pricing
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 font-display leading-snug">
              Plans that scale with your business.
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Start with a focused pilot and grow into an embedded partnership — clear
              scope, clear ownership, and systems that keep working after handover.
            </p>
          </motion.div>
        </Container>
      </section>

      <WhyUs />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
