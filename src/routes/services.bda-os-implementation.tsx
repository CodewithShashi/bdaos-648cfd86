import { createFileRoute } from "@tanstack/react-router";
import { Workflow, UserCheck, LineChart, Zap, ClipboardList, Repeat } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/bda-os-implementation")({
  head: () => ({
    meta: [
      { title: "Business OS Implementation — BDA Technologies" },
      { name: "description", content: "Clear workflows, dashboards, reports and follow-up systems so your business does not depend on you for every small thing." },
      { property: "og:title", content: "Business OS Implementation — BDA Technologies" },
      { property: "og:description", content: "We design and build the operating system that runs your daily work: workflows, ownership, dashboards and automation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      name="Business OS"
      hero={{
        label: "Business Operating System",
        headline: "Build a business that does not need you for every small thing.",
        text: [
          "We help you set up clear workflows, dashboards, reports and follow-up systems.",
          "Your team knows what to do. You know what is happening. Work does not stop when you are not available.",
        ],
        ctaLabel: "Apply for a Business Audit",
        smallText: "For founder-led service businesses with growing teams.",
      }}
      problem={{
        label: "The Problem",
        headline: "Your business has grown. But the way you run it has not.",
        text: [
          "In the early days, calls, WhatsApp messages and personal follow-ups may work.",
          "But as the team grows, this way of working starts creating delays, confusion and missed work.",
        ],
        items: [
          { title: "Work is spread everywhere", body: "Tasks and updates are divided across messages, spreadsheets, calls and different tools." },
          { title: "People keep waiting for you", body: "Your team needs your approval, answer or reminder before moving ahead." },
          { title: "Reports come late", body: "You have to ask people again and again to know what is happening." },
          { title: "Problems reach you too late", body: "You find out about delays only after the client or the business is affected." },
        ],
        closing: "BDA OS brings your people, work and reports into one clear system.",
      }}
      build={{
        label: "What We Build",
        heading: "One system to run daily work.",
        body: "We improve how work moves, how it is tracked and how your team reports it.",
        cards: [
          { title: "Clear Workflows", body: "Turn repeated work into simple steps that people can follow.", icon: Workflow },
          { title: "Clear Ownership", body: "Give every task an owner, deadline and expected result.", icon: UserCheck },
          { title: "Live Dashboards", body: "See what is moving, what is late and where help is needed.", icon: LineChart },
          { title: "Smart Automation", body: "Automate reminders, updates, reports and repeated follow-ups.", icon: Zap },
          { title: "SOPs and Checklists", body: "Keep important knowledge inside the business, not inside one person.", icon: ClipboardList },
          { title: "Review System", body: "Help managers track work and solve problems before they grow.", icon: Repeat },
        ],
      }}
      process={{
        label: "Our Process",
        headline: "We understand the business first. Then we build the system.",
        text: [
          "We do not start by selling software.",
          "We first study how your team works, where things break and what needs to change.",
        ],
        steps: [
          { title: "Understand", body: "We study your current process, tools, team roles and daily problems." },
          { title: "Design", body: "We design the new workflows, dashboards, reports and ownership structure." },
          { title: "Build", body: "We set up the system, connect the tools and automate repeated work." },
          { title: "Train and Improve", body: "We train your team, test the system with real work and fix what is not working." },
        ],
      }}
      deliverables={{
        label: "Deliverables",
        headline: "You get a working system, not just advice.",
        text: "The final work depends on your business. A BDA OS project may include:",
        items: [
          "Business process audit",
          "Workflow maps",
          "Clear roles and ownership",
          "Task management system",
          "Founder dashboard",
          "Manager dashboards",
          "Weekly and monthly reports",
          "Reminders and automation",
          "SOPs and checklists",
          "Team training",
          "Setup and launch support",
          "Final system documents",
        ],
        closing:
          "Your team should know what to do. Your managers should know what is stuck. You should not have to chase every update.",
      }}
      beforeAfter={{
        label: "Before and After",
        headline: "Your business becomes easier to run.",
        rows: [
          { before: "Work is managed through messages, calls and meetings.", after: "Work moves through clear steps with an owner and deadline." },
          { before: "You ask people for updates.", after: "Dashboards show you what is happening." },
          { before: "Your team waits for your approval.", after: "People know what they can decide and when they need your help." },
          { before: "Important work depends on one person.", after: "The process stays inside the system." },
          { before: "Problems are found after the damage is done.", after: "Delays and risks are seen early." },
        ],
      }}
      caseStudy={{
        label: "BDA OS in Action",
        headline: "One clear view for a business running many client events.",
        problem:
          "A coaching business was managing many client events at the same time. Event dates, payments, registrations, meeting links, reminders and pending tasks were spread across messages and spreadsheets.",
        built:
          "We built one dashboard where the team could see every active event, owner, deadline and pending task.",
        changed:
          "The team could see what needed attention before the event started. They did not have to search through messages or wait for someone to share an update.",
      }}
      fit={{
        label: "Best Fit",
        headline: "Built for businesses that have outgrown informal ways of working.",
        good: [
          "You have a growing team",
          "Your business depends too much on you",
          "Work gets missed between people or teams",
          "You use many tools that do not work together",
          "Reports are late or hard to trust",
          "Your business has repeated sales, delivery or support work",
          "You are ready to improve how your team works",
        ],
        bad: [
          "You are still testing your first offer",
          "You only need one small automation",
          "You only want to buy software",
          "Your team is not ready to follow a new process",
          "You expect technology to fix poor ownership or weak management",
        ],
      }}
      faq={{
        label: "Common Questions",
        headline: "What business owners usually ask us",
        items: [
          { q: "Is BDA OS a software product?", a: "No. BDA OS is a complete implementation service. We study your business, design the system, build it and help your team use it." },
          { q: "Will we need to replace our current tools?", a: "Not always. We first check what you already use. We only suggest a new tool when the current one cannot support your needs." },
          { q: "Does BDA only give advice?", a: "No. We do not stop after giving a plan. We help design, build, train and launch the system." },
          { q: "How long does it take?", a: "Most projects may take six to twelve weeks. The final time depends on the number of teams, workflows and tools involved." },
          { q: "Who needs to work with BDA?", a: "The founder or business head is needed during the first stage and for major decisions. A manager or operations person can work with us during the daily setup." },
          { q: "Can everything be automated?", a: "No. Some problems need better people, clearer roles or stronger management. We only automate work when it saves time, reduces mistakes or gives better control." },
        ],
      }}
      finalCta={{
        label: "Start with Clarity",
        headline: "Start with the part of your business that depends on you the most.",
        text: "We will study how work is happening today, where it is getting stuck and whether BDA OS is the right next step.",
        ctaLabel: "Apply for a Business Audit",
        smallText: "A focused business discussion. No software sales pitch.",
      }}
    />
  ),
});
