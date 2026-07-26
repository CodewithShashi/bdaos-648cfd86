import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/site/InsightsPage";
import { mediaRecognition } from "@/data/insights";

export const Route = createFileRoute("/insights/media-recognition")({
  head: () => ({
    meta: [
      { title: "Media & Recognition | BDA Technologies" },
      {
        name: "description",
        content:
          "Press coverage, awards, and interviews featuring BDA Technologies and the systems we build for founder-led service businesses.",
      },
      { property: "og:title", content: "Media & Recognition — BDA Technologies" },
      {
        property: "og:description",
        content: "Coverage, awards, and interviews featuring BDA Technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <InsightsPage
      title="Media & Recognition"
      tagline="Where our work gets noticed."
      description="Press coverage, awards, and conversations about how we help growing companies execute better."
      posts={mediaRecognition}
    />
  ),
});
