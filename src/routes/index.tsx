import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BDA Technologies — Business operating systems for service teams" },
      {
        name: "description",
        content:
          "BDA Technologies builds custom business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption.",
      },
      { property: "og:title", content: "BDA Technologies — Business operating systems for service teams" },
      {
        property: "og:description",
        content: "BDA Technologies builds custom business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BDA Technologies — Business operating systems for service teams" },
      { name: "twitter:description", content: "BDA Technologies builds custom business operating systems for founder-led service businesses — dashboards, workflows, automation, and team adoption." },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
