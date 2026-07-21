import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Filter, Route as RouteIcon, DollarSign, LineChart, Layers } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/attribution")({
  head: () => ({
    meta: [
      { title: "Attribution — Marketing to Revenue Reporting | BDA Technologies" },
      { name: "description", content: "Attribution connects marketing activity with leads and business outcomes so revenue leaders can see what actually drives pipeline." },
      { property: "og:title", content: "Attribution — Marketing to Revenue Reporting" },
      { property: "og:description", content: "End-to-end attribution across channels for marketing and revenue leaders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ProductPage
      name="Attribution"
      eyebrow="MARKETING ANALYTICS"
      tagline="See which activity actually creates revenue."
      heading="Connect marketing activity to real business outcomes."
      description="Attribution links campaigns, channels, and touchpoints to leads and closed revenue — so marketing decisions are based on evidence."
      icon={BarChart3}
      bestFor="Marketing and revenue leaders who need to justify spend"
      features={[
        { title: "Source Tracking", body: "Capture the true first and last touch for every lead.", icon: RouteIcon },
        { title: "Pipeline Attribution", body: "Follow leads through the funnel to opportunity and revenue.", icon: BarChart3 },
        { title: "Channel Comparison", body: "Compare paid, organic, and referral performance side by side.", icon: Layers },
        { title: "Spend vs Revenue", body: "Tie marketing spend directly to pipeline and closed revenue.", icon: DollarSign },
        { title: "Segment Filters", body: "Slice by campaign, geography, product line, and audience.", icon: Filter },
        { title: "Outcome Reporting", body: "Boardroom-ready reports built from clean, connected data.", icon: LineChart },
      ]}
      howItWorks={[
        { title: "Connect the sources", body: "Marketing tools, CRM, and ad platforms feed into one model." },
        { title: "Attribute the touchpoints", body: "Every lead is mapped to the channels and campaigns that influenced it." },
        { title: "Compare and decide", body: "See which channels drive pipeline — and which look loud but do not." },
        { title: "Report to leadership", body: "Regular reports keep the whole team aligned on what is working." },
      ]}
      outcomes={[
        "Confidence about which channels drive real revenue",
        "Marketing spend allocated to what actually works",
        "Sales and marketing aligned on the same funnel view",
        "Faster, sharper decisions in every planning cycle",
      ]}
    />
  ),
});
