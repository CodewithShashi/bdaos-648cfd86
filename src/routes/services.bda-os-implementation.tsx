import { createFileRoute } from "@tanstack/react-router";
import { Layers, Workflow, GaugeCircle, Users, ShieldCheck, LineChart } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/bda-os-implementation")({
  head: () => ({
    meta: [
      { title: "BDA OS Implementation — BDA Technologies" },
      { name: "description", content: "Design and build a company-wide operating system that connects tasks, dashboards, reports, follow-ups, and team accountability." },
      { property: "og:title", content: "BDA OS Implementation — BDA Technologies" },
      { property: "og:description", content: "A structured engagement to design and roll out a business operating system across the whole company." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      name="BDA OS Implementation"
      eyebrow="WHAT WE DO"
      tagline="Design and build a company-wide operating system."
      heading="One connected system for tasks, reporting, and accountability."
      description="We design and roll out BDA OS across the business — the workflows, dashboards, and reporting rhythms that make execution predictable."
      icon={Workflow}
      bestFor="Founder-led service businesses ready to systemise operations"
      whatItIncludes={[
        { title: "Operating Model Design", body: "Define how work moves, who owns it, and how it gets reported.", icon: Workflow },
        { title: "Task & Workflow System", body: "Structured tasks with owners, deadlines, proof, and escalation.", icon: Layers },
        { title: "Dashboards & Reporting", body: "Weekly and monthly dashboards leadership actually uses.", icon: LineChart },
        { title: "Accountability Rhythm", body: "Meeting and review cadence that keeps teams aligned.", icon: Users },
        { title: "Governance & Controls", body: "Approval flows and controls that reduce operational risk.", icon: ShieldCheck },
        { title: "Performance Metrics", body: "Clear KPIs at team, function, and business level.", icon: GaugeCircle },
      ]}
      process={[
        { title: "Diagnose", body: "Map current workflows, gaps, and dependencies across the business." },
        { title: "Design", body: "Design the operating model, workflows, and reporting rhythm." },
        { title: "Build", body: "Configure BDA OS, wire up dashboards, and prepare rollout." },
        { title: "Roll Out", body: "Onboard teams, train owners, and stabilise the system in daily use." },
        { title: "Improve", body: "Review adoption, tune the system, and expand it across functions." },
      ]}
      outcomes={[
        "A single operating system the whole company uses",
        "Fewer things missed between people and teams",
        "Weekly and monthly reporting that leadership trusts",
        "Less founder dependency on daily execution",
      ]}
    />
  ),
});
