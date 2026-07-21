import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles, Users, Workflow, ClipboardCheck, LineChart } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ai-training")({
  head: () => ({
    meta: [
      { title: "AI Training and Team Adoption — BDA Technologies" },
      { name: "description", content: "Help teams use AI and new systems in daily work through structured training, playbooks, and adoption support." },
      { property: "og:title", content: "AI Training and Team Adoption — BDA Technologies" },
      { property: "og:description", content: "Practical AI training and adoption support so new systems actually get used." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      name="AI Training and Team Adoption"
      eyebrow="WHAT WE DO"
      tagline="Help teams use AI and new systems in daily work."
      heading="Training and adoption support built around real workflows."
      description="We train teams on AI tools and new systems inside their actual work — so adoption sticks past the workshop and into daily execution."
      icon={GraduationCap}
      bestFor="Teams rolling out AI tools or new operating systems"
      whatItIncludes={[
        { title: "Role-Based Training", body: "Sessions built around what each role actually does daily.", icon: Users },
        { title: "AI Use-Case Design", body: "Identify the highest-leverage AI use cases per function.", icon: Sparkles },
        { title: "Workflow Integration", body: "Embed AI and new tools inside existing workflows.", icon: Workflow },
        { title: "Playbooks & SOPs", body: "Written playbooks so knowledge does not depend on memory.", icon: ClipboardCheck },
        { title: "Coaching & Reinforcement", body: "Follow-up sessions to lock in habits and unblock teams.", icon: GraduationCap },
        { title: "Adoption Tracking", body: "Track usage, outcomes, and where more support is needed.", icon: LineChart },
      ]}
      process={[
        { title: "Assess", body: "Understand current tools, workflows, and team readiness." },
        { title: "Design", body: "Design a role-based training plan and prioritised AI use cases." },
        { title: "Train", body: "Deliver hands-on sessions inside real workflows, not slideware." },
        { title: "Embed", body: "Roll out playbooks, SOPs, and integrations so adoption sticks." },
        { title: "Reinforce", body: "Coach teams, review usage, and adjust as work evolves." },
      ]}
      outcomes={[
        "Teams actually use the new tools past the first week",
        "AI is applied to the workflows that matter, not novelty tasks",
        "Playbooks and SOPs make knowledge portable across the team",
        "Measurable adoption and productivity gains after rollout",
      ]}
    />
  ),
});
