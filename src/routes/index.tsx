import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nebula — The AI operating system for modern teams" },
      {
        name: "description",
        content:
          "Nebula is the AI operating system for modern teams. Ship intelligent products with autonomous agents, workflow automation, and enterprise-grade infrastructure.",
      },
      { property: "og:title", content: "Nebula — The AI operating system for modern teams" },
      {
        property: "og:description",
        content: "Ship AI-native products faster with Nebula's platform, agents, and services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nebula — AI OS for modern teams" },
      { name: "twitter:description", content: "Ship AI-native products faster with Nebula." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
