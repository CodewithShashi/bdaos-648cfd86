import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, CalendarClock, BellRing, ClipboardList, LineChart } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/coachassist")({
  head: () => ({
    meta: [
      { title: "CoachAssist — Cohort & Event Operations | BDA Technologies" },
      { name: "description", content: "CoachAssist manages event readiness, registrations, reminders, and delivery operations for coaches and training businesses." },
      { property: "og:title", content: "CoachAssist — Cohort & Event Operations" },
      { property: "og:description", content: "Run cohorts and events with less firefighting — registrations, reminders, and delivery in one system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ProductPage
      name="CoachAssist"
      eyebrow="DELIVERY OPS"
      tagline="Run cohorts and events with less firefighting."
      heading="Cohort and delivery operations in one system."
      description="CoachAssist gives coaches, training businesses, and event teams a shared workflow for registrations, reminders, and delivery."
      icon={GraduationCap}
      bestFor="Coaches and training businesses running cohorts or events"
      features={[
        { title: "Cohort Workflows", body: "Set up cohorts once and reuse the workflow every batch.", icon: Users },
        { title: "Registration Management", body: "Capture, verify, and organise registrations without spreadsheets.", icon: ClipboardList },
        { title: "Automated Reminders", body: "Attendees get the right message at the right time, automatically.", icon: BellRing },
        { title: "Session Scheduling", body: "Plan sessions, speakers, and materials in one calendar view.", icon: CalendarClock },
        { title: "Delivery Tracking", body: "Track attendance, engagement, and follow-ups per attendee.", icon: GraduationCap },
        { title: "Outcome Reporting", body: "Measure completion, feedback, and results across cohorts.", icon: LineChart },
      ]}
      howItWorks={[
        { title: "Set up the cohort", body: "Define the schedule, materials, and delivery team once." },
        { title: "Manage registrations", body: "Capture sign-ups, confirm attendees, and organise groups." },
        { title: "Run the sessions", body: "Reminders, materials, and attendance tracking happen inside the workflow." },
        { title: "Review outcomes", body: "Feedback, completion, and results feed into the next cohort." },
      ]}
      outcomes={[
        "Cohorts run on a repeatable playbook, not memory",
        "Attendees get consistent, timely communication",
        "Delivery teams spend less time on coordination",
        "Program improvements based on real cohort data",
      ]}
    />
  ),
});
