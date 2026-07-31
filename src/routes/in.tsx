import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { IndiaHero } from "@/components/site/IndiaHero";


export const Route = createFileRoute("/in")({
  head: () => ({
    meta: [
      { title: "BDA Technologies India — Business operating systems" },
      {
        name: "description",
        content:
          "BDA Technologies India builds custom business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption.",
      },
      { property: "og:title", content: "BDA Technologies India" },
      {
        property: "og:description",
        content: "One operating system for tasks, dashboards, reports and team accountability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndiaHome,
});

function IndiaHome() {
  return <HomePage hero={<IndiaHero />} />;
}

