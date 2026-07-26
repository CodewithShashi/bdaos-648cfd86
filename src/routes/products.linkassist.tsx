import { createFileRoute } from "@tanstack/react-router";
import { PenLine, Users, Handshake, CalendarClock, Send, LineChart } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import linkassistLogo from "@/assets/linkassist-logo.png.asset.json";

export const Route = createFileRoute("/products/linkassist")({
  head: () => ({
    meta: [
      { title: "LinkAssist — LinkedIn Growth System | BDA Technologies" },
      { name: "description", content: "LinkAssist helps founders and sales teams build LinkedIn content and relationship habits with a guided, repeatable workflow." },
      { property: "og:title", content: "LinkAssist — LinkedIn Growth System" },
      { property: "og:description", content: "Turn LinkedIn into a repeatable pipeline with content, outreach, and relationship habits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ProductPage
      name="LinkAssist"
      eyebrow="LINKEDIN GROWTH"
      tagline="Turn LinkedIn into a repeatable growth channel."
      heading="Content, outreach, and relationships in one guided workflow."
      description="LinkAssist gives founders and sales teams a structured cadence for LinkedIn — so posting, connecting, and following up stop depending on memory."
      logo={linkassistLogo.url}
      icon={PenLine}
      bestFor="Founders and sales teams who want a repeatable LinkedIn pipeline"
      features={[
        { title: "Content Pipeline", body: "Plan, draft, and schedule posts against a weekly cadence.", icon: PenLine },
        { title: "Outreach Tracking", body: "Manage connection requests, replies, and follow-ups in one queue.", icon: Send },
        { title: "Relationship CRM", body: "Track the people who matter and never lose a warm conversation.", icon: Handshake },
        { title: "Cadence Reminders", body: "Daily prompts keep the team consistent without extra tools.", icon: CalendarClock },
        { title: "Audience Segments", body: "Group contacts by intent, stage, and topic for sharper follow-ups.", icon: Users },
        { title: "Growth Reporting", body: "See what content, outreach, and conversations create pipeline.", icon: LineChart },
      ]}
      howItWorks={[
        { title: "Define the growth motion", body: "Set the cadence, target audience, and content pillars for the account." },
        { title: "Plan content and outreach", body: "Weekly plans capture posts, connection lists, and follow-up queues." },
        { title: "Execute inside the workflow", body: "Guided daily tasks keep posting, replying, and outreach consistent." },
        { title: "Review what worked", body: "Reports show which content and conversations produced real pipeline." },
      ]}
      outcomes={[
        "Consistent posting cadence without last-minute scrambling",
        "A visible pipeline of warm conversations and follow-ups",
        "Content and outreach that ties back to real business outcomes",
        "Less founder dependency — the motion runs even on busy weeks",
      ]}
    />
  ),
});
