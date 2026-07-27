import { createFileRoute } from "@tanstack/react-router";
import { Search, LineChart, Users, AlertTriangle, ClipboardList, Map } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/digital-transformation")({
  head: () => ({
    meta: [
      { title: "Digital Transformation — BDA Technologies" },
      { name: "description", content: "A structured review of how work moves, how it is reported and where your business depends too much on you." },
      { property: "og:title", content: "Digital Transformation — BDA Technologies" },
      { property: "og:description", content: "We study your workflows, reporting and ownership, then give you a clear plan for what to fix first." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      name="Digital Transformation"
      hero={{
        label: "Digital Transformation",
        headline: "Know exactly what is slowing your business down.",
        text: [
          "We study how work moves today, how it gets reported and where it keeps breaking.",
          "You get an honest picture of your operations and a clear plan for what to fix first.",
        ],
        ctaLabel: "Apply for a Discovery Call",
        smallText: "For founders who feel operations are heavier than they should be.",
      }}
      problem={{
        label: "The Problem",
        headline: "You feel the problem daily, but no one can point to the cause.",
        text: [
          "Most teams know something is wrong. Work is late, updates are missing and everyone is busy.",
          "Without a structured review, you keep fixing symptoms instead of the real cause.",
        ],
        items: [
          { title: "Everyone has a different story", body: "Each team explains the delay differently, so nothing gets fixed at the source." },
          { title: "Numbers are hard to trust", body: "Reports are built by hand and change depending on who prepares them." },
          { title: "Ownership is unclear", body: "Work sits between two people and no one is clearly responsible for the outcome." },
          { title: "Tools do not talk to each other", body: "The same information is entered again in different places and gets out of date." },
        ],
        closing: "A digital transformation review replaces opinion with evidence.",
      }}
      build={{
        label: "What We Review",
        heading: "A full picture of how your business actually runs.",
        body: "We look at workflows, reporting, roles and tools together, because problems rarely sit in only one place.",
        cards: [
          { title: "Workflow Review", body: "Map how work moves across teams today and where it breaks.", icon: Search },
          { title: "Reporting Review", body: "Assess dashboards, metrics and the trust behind the numbers.", icon: LineChart },
          { title: "Team and Ownership", body: "Identify unclear ownership, overloaded roles and hand-off gaps.", icon: Users },
          { title: "Risk and Dependency", body: "Surface founder dependency and single-person risks.", icon: AlertTriangle },
          { title: "Tool and Data Review", body: "Check which tools help, which overlap and which create extra work.", icon: Map },
          { title: "Findings and Plan", body: "A structured document of gaps, priorities and evidence.", icon: ClipboardList },
        ],
      }}
      process={{
        label: "Our Process",
        headline: "We listen first, then test what we hear against the work itself.",
        text: [
          "We do not run a generic checklist.",
          "We speak to the people doing the work and look at real tasks, real reports and real delays.",
        ],
        steps: [
          { title: "Kickoff", body: "Align on business context, current pain points and audit scope." },
          { title: "Discovery", body: "Structured interviews and reviews across functions and tools." },
          { title: "Analysis", body: "Synthesise findings across workflows, reporting and ownership." },
          { title: "Findings and Plan", body: "Present the gap report and prioritised roadmap to leadership." },
        ],
      }}
      deliverables={{
        label: "Deliverables",
        headline: "You get evidence and a plan, not a slide deck of theory.",
        text: "The final work depends on your business. A transformation review may include:",
        items: [
          "Current-state workflow maps",
          "Gap and bottleneck report",
          "Reporting and data review",
          "Role and ownership review",
          "Founder dependency assessment",
          "Tool and system review",
          "Prioritised action roadmap",
          "Effort and impact ranking",
          "Quick-win list",
          "Leadership presentation",
        ],
        closing:
          "You should finish the audit knowing what to fix first, who owns it and what change to expect.",
      }}
      beforeAfter={{
        label: "Before and After",
        headline: "Decisions become easier because the facts are clear.",
        rows: [
          { before: "You guess where the delays come from.", after: "You see exactly where work stops and why." },
          { before: "Every team blames a different problem.", after: "Leadership shares one view of the issues." },
          { before: "Improvements are chosen by opinion.", after: "Priorities are ranked by business impact." },
          { before: "Reports are questioned in every meeting.", after: "Numbers come from one agreed source." },
          { before: "Change projects start without direction.", after: "You start with a clear, sequenced roadmap." },
        ],
      }}
      caseStudy={{
        label: "Transformation in Action",
        headline: "Finding the real reason delivery kept slipping.",
        problem:
          "A services business believed it needed more people. Projects were late and the team was constantly busy.",
        built:
          "We mapped the delivery workflow end to end and reviewed where each project waited, who approved what and how status was reported.",
        changed:
          "Most delays came from approvals and unclear ownership, not capacity. Fixing hand-offs and reporting removed the need for immediate hiring.",
      }}
      fit={{
        label: "Best Fit",
        headline: "Built for leaders who want facts before they invest in change.",
        good: [
          "Operations feel heavier than the size of the business",
          "You are about to invest in new systems or hiring",
          "Work is missed between people or teams",
          "Reports are late or inconsistent",
          "You want an outside, honest view",
          "Leadership disagrees on what to fix first",
        ],
        bad: [
          "You already know the fix and only need a builder",
          "You are not ready to share how the business really works",
          "You want validation instead of findings",
          "No one is available to answer questions during discovery",
        ],
      }}
      faq={{
        label: "Common Questions",
        headline: "What business owners usually ask us",
        items: [
          { q: "How long does the review take?", a: "Most reviews take two to four weeks, depending on the number of teams and tools involved." },
          { q: "How much of my team's time is needed?", a: "Usually a few short interviews per function, plus access to existing reports and tools." },
          { q: "Do we have to work with BDA after the review?", a: "No. The findings and roadmap are yours. You can implement them internally or with us." },
          { q: "Will you tell us things we do not want to hear?", a: "Yes. The value of an honest review is a clear picture, shared plainly and backed with evidence." },
          { q: "Does the review include new tools?", a: "The review recommends changes. Building and rolling them out happens in a Business OS project." },
        ],
      }}
      finalCta={{
        label: "Start with Clarity",
        headline: "Start with the part of your business that worries you most.",
        text: "We will study how work is happening today, where it is getting stuck and what should change first.",
        ctaLabel: "Apply for a Discovery Call",
        smallText: "A focused business discussion. No software sales pitch.",
      }}
    />
  ),
});
