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

      <section className="relative overflow-hidden bg-foreground text-background pt-28 sm:pt-32 md:pt-44 pb-16 md:pb-24">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-primary-glow/20 blur-3xl" />
        </div>
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center rounded-full border border-background/25 bg-background/10 px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-background/80">
              Pricing
            </span>
            <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight">
              Plans that scale with your business.
            </h1>
            <p className="mt-5 text-base md:text-lg text-background/70 leading-relaxed">
              Start with a focused pilot and grow into an embedded partnership — clear
              scope, clear ownership, and systems that keep working after handover.
            </p>
            <div className="mt-9 flex justify-center">
              <AnimatedButton href="/contact">Book a Call</AnimatedButton>
            </div>
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
