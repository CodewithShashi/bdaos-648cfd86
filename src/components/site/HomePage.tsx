import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { TestimonialStats } from "@/components/site/TestimonialStats";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { Process } from "@/components/site/Process";
import { Insights } from "@/components/site/Insights";
import { Testimonials } from "@/components/site/Testimonials";
import { LogoReveal } from "@/components/site/LogoReveal";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export function HomePage({ hero }: { hero?: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      {hero ?? <Hero />}
      <LogoMarquee />
      <TestimonialStats />
      <ServiceShowcase />
      <Process />
      <Insights />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
