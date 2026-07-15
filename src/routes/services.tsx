import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BDA AI" },
      {
        name: "description",
        content:
          "Explore BDA AI's end-to-end services: business audits, operating system implementation, and AI training for teams.",
      },
      { property: "og:title", content: "Services — BDA AI" },
      {
        property: "og:description",
        content:
          "Explore BDA AI's end-to-end services: business audits, operating system implementation, and AI training for teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}
