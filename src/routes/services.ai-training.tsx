import { createFileRoute } from "@tanstack/react-router";
import { Users, Sparkles, Workflow, ClipboardCheck, GraduationCap, LineChart } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ai-training")({
  head: () => ({
    meta: [
      { title: "AI Training and Team Adoption — BDA Technologies" },
      { name: "description", content: "Practical AI training built around your real workflows, so your team actually uses the tools after the session ends." },
      { property: "og:title", content: "AI Training and Team Adoption — BDA Technologies" },
      { property: "og:description", content: "Role-based AI training, playbooks and adoption support for teams rolling out new systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      name="AI Training"
      hero={{
        label: "AI Training and Team Adoption",
        headline: "Give your team AI skills they use in daily work.",
        text: [
          "We train your people inside their real workflows, not on general theory.",
          "Your team learns where AI helps, where it does not and how to use it without losing quality or control.",
        ],
        ctaLabel: "Apply for a Business Audit",
        smallText: "For teams rolling out AI tools or a new operating system.",
      }}
      problem={{
        label: "The Problem",
        headline: "Most AI training ends the moment the session ends.",
        text: [
          "Teams attend a workshop, feel excited and then return to the same way of working.",
          "Without real use cases, clear rules and follow-up, new tools quietly stop being used.",
        ],
        items: [
          { title: "Training is too general", body: "Generic demos do not match the work your team actually does every day." },
          { title: "No clear use cases", body: "People do not know which tasks are worth automating or assisting with AI." },
          { title: "No rules or guardrails", body: "Teams worry about mistakes, quality and client data, so they avoid the tools." },
          { title: "No follow-up", body: "Old habits return within weeks because nothing reinforces the new way." },
        ],
        closing: "We train on real work, then support the team until the habit holds.",
      }}
      build={{
        label: "What We Build",
        heading: "Training that turns into daily habits.",
        body: "We design the use cases, teach them role by role and leave behind material your team can keep using.",
        cards: [
          { title: "Role-Based Training", body: "Sessions built around what each role actually does daily.", icon: Users },
          { title: "AI Use-Case Design", body: "Identify the highest-value AI use cases for each function.", icon: Sparkles },
          { title: "Workflow Integration", body: "Embed AI and new tools inside existing workflows.", icon: Workflow },
          { title: "Playbooks and SOPs", body: "Written playbooks so knowledge does not depend on memory.", icon: ClipboardCheck },
          { title: "Coaching and Reinforcement", body: "Follow-up sessions to lock in habits and unblock teams.", icon: GraduationCap },
          { title: "Adoption Tracking", body: "Track usage, outcomes and where more support is needed.", icon: LineChart },
        ],
      }}
      process={{
        label: "Our Process",
        headline: "We learn how your team works before we teach anything.",
        text: [
          "We do not deliver the same deck to every company.",
          "We study the daily work, choose the use cases that matter and build the training around them.",
        ],
        steps: [
          { title: "Assess", body: "Understand current tools, workflows and team readiness." },
          { title: "Design", body: "Design a role-based training plan and prioritised AI use cases." },
          { title: "Train", body: "Deliver hands-on sessions inside real workflows, not slideware." },
          { title: "Embed and Reinforce", body: "Roll out playbooks, coach the team and review usage as work evolves." },
        ],
      }}
      deliverables={{
        label: "Deliverables",
        headline: "Your team keeps the skills, the rules and the material.",
        text: "The final work depends on your team. An AI training programme may include:",
        items: [
          "Team readiness assessment",
          "Prioritised AI use-case list",
          "Role-based training sessions",
          "Hands-on working examples",
          "Prompt and workflow library",
          "Playbooks and SOPs",
          "Usage guidelines and guardrails",
          "Tool setup support",
          "Follow-up coaching sessions",
          "Adoption review report",
        ],
        closing:
          "Your team should know which tasks to use AI for, how to check the output and when to stop and ask a human.",
      }}
      beforeAfter={{
        label: "Before and After",
        headline: "AI becomes part of the work, not a side experiment.",
        rows: [
          { before: "A few people experiment on their own.", after: "The whole team follows the same approach." },
          { before: "Tools are bought and rarely used.", after: "Tools are tied to specific tasks and owners." },
          { before: "Quality is inconsistent.", after: "Checklists and guardrails keep output reliable." },
          { before: "Knowledge sits with one enthusiast.", after: "Playbooks make the knowledge shared." },
          { before: "No one knows if it helped.", after: "Adoption and time saved are tracked." },
        ],
      }}
      caseStudy={{
        label: "Training in Action",
        headline: "Turning a stalled AI rollout into daily usage.",
        problem:
          "A team had licences for several AI tools but almost no usage after the first month. People were unsure what was allowed and what was useful.",
        built:
          "We chose ten real tasks from their weekly work, built prompts and checklists for each, then trained every role on the tasks they owned.",
        changed:
          "Usage moved from a few individuals to the whole team, with a shared playbook and clear rules for reviewing output before it reaches a client.",
      }}
      fit={{
        label: "Best Fit",
        headline: "Built for teams that want adoption, not a one-off workshop.",
        good: [
          "You are rolling out AI tools or a new system",
          "Your team is willing to change how it works",
          "You have repeated work worth improving",
          "Past training did not lead to real usage",
          "You want clear rules for quality and data",
          "A manager can support the rollout internally",
        ],
        bad: [
          "You only want a motivational talk",
          "No one has time to practise between sessions",
          "You expect AI to replace clear roles and management",
          "The team has not agreed on which tools to use",
        ],
      }}
      faq={{
        label: "Common Questions",
        headline: "What business owners usually ask us",
        items: [
          { q: "Is this a one-day workshop?", a: "No. Training is delivered in short sessions across several weeks, with practice and follow-up in between." },
          { q: "Do you train on specific tools?", a: "Yes. We train on the tools you already use, and suggest new ones only when they clearly help." },
          { q: "Does the team need technical skills?", a: "No. Sessions are built around business tasks, not code." },
          { q: "How do you handle data and confidentiality?", a: "We set clear usage rules for client data, approvals and review before anything is shared externally." },
          { q: "How do you measure success?", a: "We track usage, time saved on the chosen tasks and whether the new way is still followed after the programme." },
        ],
      }}
      finalCta={{
        label: "Start with Clarity",
        headline: "Start with the work your team repeats most often.",
        text: "We will study how your team works today, where AI can genuinely help and what training would make it stick.",
        ctaLabel: "Apply for a Business Audit",
        smallText: "A focused business discussion. No software sales pitch.",
      }}
    />
  ),
});
