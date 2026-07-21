import { createFileRoute } from "@tanstack/react-router";
import { ListTodo, AlarmClock, ShieldAlert, FileCheck2, Users, LineChart } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/taskassist")({
  head: () => ({
    meta: [
      { title: "TaskAssist — Task Ownership & Execution | BDA Technologies" },
      { name: "description", content: "TaskAssist manages task ownership, deadlines, proof, escalation, and reporting so work stops getting lost between people." },
      { property: "og:title", content: "TaskAssist — Task Ownership & Execution" },
      { property: "og:description", content: "Clear ownership, escalation rules, and weekly reporting for operations and delivery teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ProductPage
      name="TaskAssist"
      eyebrow="EXECUTION"
      tagline="Stop tasks from getting lost between people."
      heading="Clear ownership, deadlines, and proof for every task."
      description="TaskAssist gives operations and delivery teams a single source of truth for what is owed, by whom, and by when."
      icon={ListTodo}
      bestFor="Operations and delivery teams that run repeated workflows"
      features={[
        { title: "Owner-Based Tasks", body: "Every task has one owner, one deadline, and one next step.", icon: ListTodo },
        { title: "Escalation Rules", body: "Overdue tasks escalate automatically to the right person.", icon: ShieldAlert },
        { title: "Deadline Discipline", body: "Reminders and status updates keep work moving on time.", icon: AlarmClock },
        { title: "Proof of Completion", body: "Tasks close only when the required proof is attached.", icon: FileCheck2 },
        { title: "Team Views", body: "See workload by person, team, or client at a glance.", icon: Users },
        { title: "Weekly Reporting", body: "Automatic reports show what shipped and what slipped.", icon: LineChart },
      ]}
      howItWorks={[
        { title: "Capture the work", body: "Break projects into tasks with owner, deadline, and expected proof." },
        { title: "Assign and align", body: "Owners see their queue; managers see workload and risks." },
        { title: "Escalate the exceptions", body: "Rules move overdue or blocked tasks to the right level automatically." },
        { title: "Review the week", body: "Weekly reports drive conversations that actually change outcomes." },
      ]}
      outcomes={[
        "Fewer tasks quietly slipping between owners",
        "Deadlines that hold because escalation is automatic",
        "Managers stop chasing status updates",
        "Weekly reviews focused on outcomes, not activity",
      ]}
    />
  ),
});
