import { createFileRoute } from "@tanstack/react-router";
import { UserRound, ClipboardList, MessageSquare, FileCheck2, Users, LineChart } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import hireassistLogo from "@/assets/hireassist-logo.png.asset.json";

export const Route = createFileRoute("/products/hireassist")({
  head: () => ({
    meta: [
      { title: "HireAssist — Hiring Operations System | BDA Technologies" },
      { name: "description", content: "HireAssist manages hiring stages, candidate information, and team feedback so growing teams close roles faster with clear ownership." },
      { property: "og:title", content: "HireAssist — Hiring Operations System" },
      { property: "og:description", content: "End-to-end candidate visibility, structured feedback, and offer tracking in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ProductPage
      name="HireAssist"
      eyebrow="HIRING OPS"
      tagline="Close roles faster with clear ownership."
      heading="A hiring workflow that keeps every role moving."
      description="HireAssist gives hiring managers, recruiters, and interviewers a shared system for pipelines, scorecards, and offers."
      logo={hireassistLogo.url}
      icon={UserRound}
      bestFor="Growing teams hiring 3+ roles at once"
      features={[
        { title: "Role Pipelines", body: "Track every candidate across stages with clear stage owners.", icon: ClipboardList },
        { title: "Interview Scorecards", body: "Structured feedback that removes bias and speeds up decisions.", icon: FileCheck2 },
        { title: "Offer Tracking", body: "Monitor offers, negotiations, and acceptance in real time.", icon: UserRound },
        { title: "Panel Coordination", body: "Assign interviewers, share notes, and align before decisions.", icon: Users },
        { title: "Candidate Communication", body: "Templated updates keep candidates informed at every stage.", icon: MessageSquare },
        { title: "Hiring Analytics", body: "Time-to-hire, drop-off, and source performance in one view.", icon: LineChart },
      ]}
      howItWorks={[
        { title: "Set up the role", body: "Define stages, scorecards, and owners for each open position." },
        { title: "Move candidates through stages", body: "Every stage has a clear owner and a next action visible to the team." },
        { title: "Collect structured feedback", body: "Interviewers submit scorecards inside the workflow, not over email." },
        { title: "Close and report", body: "Track offers to acceptance and review hiring performance every cycle." },
      ]}
      outcomes={[
        "Roles close faster with fewer stalled candidates",
        "Interview feedback is structured and comparable",
        "Hiring managers see pipeline health without asking for updates",
        "Candidate experience stays consistent as the team grows",
      ]}
    />
  ),
});
