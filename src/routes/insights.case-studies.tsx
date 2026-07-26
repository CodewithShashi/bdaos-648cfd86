import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/site/InsightsPage";
import { caseStudies } from "@/data/insights";

export const Route = createFileRoute("/insights/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Systems, Real Results | BDA Technologies" },
      {
        name: "description",
        content:
          "Case studies from BDA Technologies showing the problem, the system built, and the change it created for founder-led businesses.",
      },
      { property: "og:title", content: "Case Studies — BDA Technologies" },
      {
        property: "og:description",
        content: "See how we improve visibility, execution, and control for growing teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <InsightsPage
      title="Case Studies"
      tagline="See how we improve visibility, execution, and control."
      description="Each case study shows the problem, the system we built, and the measurable change it created."
      posts={caseStudies}
    />
  ),
});
