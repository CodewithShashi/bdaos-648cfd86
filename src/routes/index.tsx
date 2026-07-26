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
      { property: "og:title", content: "BDA Technologies — Business operating systems" },
      {
        property: "og:description",
        content: "One operating system for tasks, dashboards, reports, follow-ups and accountability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BDA Technologies — Business operating systems" },
      { name: "twitter:description", content: "Build a more efficient business with one operating system." },
    ],
  }),
  component: Index,
});

function Index() {
  return <HomePage />;
}
