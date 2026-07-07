import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { TestimonialStats } from "@/components/site/TestimonialStats";

import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";

import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BDA AI — The AI operating system for modern teams" },
      {
        name: "description",
        content:
          "BDA AI is the AI operating system for modern teams. Ship intelligent products with autonomous agents, workflow automation, and enterprise-grade infrastructure.",
      },
      { property: "og:title", content: "BDA AI — The AI operating system for modern teams" },
      {
        property: "og:description",
        content: "Ship AI-native products faster with BDA AI's platform, agents, and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BDA AI — AI OS for modern teams" },
      { name: "twitter:description", content: "Ship AI-native products faster with BDA AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <TestimonialStats />

      <About />
      <Stats />

      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
