import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Workflow, Bot, PlayCircle, Users, LineChart } from "lucide-react";
import { BrandPage } from "@/components/site/BrandPage";

export const Route = createFileRoute("/brands/automation-school")({
  head: () => ({
    meta: [
      { title: "Automation School — Practical Automation Training | BDA Technologies" },
      {
        name: "description",
        content:
          "Automation School teaches teams to design, build, and maintain practical automations that remove manual work from daily operations.",
      },
      { property: "og:title", content: "Automation School — Practical Automation Training" },
      {
        property: "og:description",
        content: "Hands-on automation training for teams that want less manual work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <BrandPage
      name="Automation School"
      tagline="Teach your team to remove manual work."
      description="Automation School is the training brand of BDA Technologies. We teach teams to design, build, and maintain automations that hold up in real operations."
      icon={GraduationCap}
      website="automationschool.in"
      bestFor="Operations teams that want in-house automation capability"
      offerings={[
        { title: "Foundations", body: "Core automation thinking before anyone touches a tool.", icon: GraduationCap },
        { title: "Workflow Design", body: "Map processes properly so automation solves the real bottleneck.", icon: Workflow },
        { title: "Tooling Labs", body: "Hands-on sessions with the automation tools your team uses.", icon: Bot },
        { title: "AI Practicals", body: "Applied AI use cases for reporting, drafting, and triage.", icon: PlayCircle },
        { title: "Team Adoption", body: "Rollout support so new habits survive past week one.", icon: Users },
        { title: "Impact Tracking", body: "Measure hours saved and errors avoided after each build.", icon: LineChart },
      ]}
      approach={[
        { title: "Assess the team", body: "We check current skills, tools, and the processes worth automating." },
        { title: "Train in context", body: "Sessions use your real workflows, not generic examples." },
        { title: "Build together", body: "Participants ship working automations during the program." },
        { title: "Embed the habit", body: "Documentation and review cycles keep automations maintained." },
      ]}
      outcomes={[
        "Teams that can build and maintain their own automations",
        "Fewer manual, repetitive tasks in daily operations",
        "Shared standards for how automations are documented",
        "Measurable time savings after each cohort",
      ]}
    />
  ),
});
