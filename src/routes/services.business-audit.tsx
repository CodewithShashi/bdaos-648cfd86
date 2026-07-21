import { createFileRoute } from "@tanstack/react-router";
import { Search, FileSearch, AlertTriangle, ClipboardList, LineChart, Users } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/business-audit")({
  head: () => ({
    meta: [
      { title: "Business Audit — BDA Technologies" },
      { name: "description", content: "Find process gaps, reporting issues, and founder dependency with a structured Business Audit from BDA Technologies." },
      { property: "og:title", content: "Business Audit — BDA Technologies" },
      { property: "og:description", content: "A structured diagnostic that surfaces the operational issues holding the business back." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      name="Business Audit"
      eyebrow="WHAT WE DO"
      tagline="Find what is slowing your business down."
      heading="A structured diagnostic of workflows, reporting, and accountability."
      description="We review how work moves, how it gets reported, and where founder dependency shows up — then translate findings into a clear plan of action."
      icon={FileSearch}
      bestFor="Founders who feel operations are heavier than they should be"
      whatItIncludes={[
        { title: "Workflow Review", body: "Map how work moves across teams today and where it breaks.", icon: Search },
        { title: "Reporting Review", body: "Assess dashboards, metrics, and the trust behind the numbers.", icon: LineChart },
        { title: "Team & Ownership", body: "Identify unclear ownership, overloaded roles, and hand-off gaps.", icon: Users },
        { title: "Risk & Dependency", body: "Surface founder dependency and single-person risks.", icon: AlertTriangle },
        { title: "Findings Report", body: "A structured document of gaps, priorities, and evidence.", icon: ClipboardList },
        { title: "Action Plan", body: "A recommended roadmap for systems, roles, and reporting.", icon: FileSearch },
      ]}
      process={[
        { title: "Kickoff", body: "Align on business context, current pain points, and audit scope." },
        { title: "Discovery", body: "Structured interviews and reviews across functions and tools." },
        { title: "Analysis", body: "Synthesise findings across workflows, reporting, and ownership." },
        { title: "Findings & Plan", body: "Present the gap report and prioritised roadmap to leadership." },
      ]}
      outcomes={[
        "A clear picture of where the business is losing time and control",
        "Priorities ranked by business impact, not personal opinion",
        "A concrete roadmap for systems, roles, and reporting",
        "Shared language across leadership about what to fix first",
      ]}
    />
  ),
});
