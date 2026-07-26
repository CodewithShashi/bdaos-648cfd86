import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/site/InsightsPage";
import { articles } from "@/data/insights";

export const Route = createFileRoute("/insights/articles")({
  head: () => ({
    meta: [
      { title: "Articles — Practical Systems Thinking | BDA Technologies" },
      {
        name: "description",
        content:
          "Articles from BDA Technologies on AI readiness, automation, and building business operating systems that teams actually use.",
      },
      { property: "og:title", content: "Articles — BDA Technologies" },
      {
        property: "og:description",
        content: "Practical writing on AI readiness, automation, and business operating systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <InsightsPage
      title="Articles"
      tagline="Practical thinking, not theory."
      description="Short, useful writing on data readiness, automation, and the decisions founders face when building better operating systems."
      posts={articles}
    />
  ),
});
