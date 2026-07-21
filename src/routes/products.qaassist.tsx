import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Bug, ListChecks, GitPullRequest, PlayCircle, LineChart } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/qaassist")({
  head: () => ({
    meta: [
      { title: "QAAssist — Quality & Release System | BDA Technologies" },
      { name: "description", content: "QAAssist tracks test cases, issues, fixes, and release readiness so product and engineering teams ship without last-minute surprises." },
      { property: "og:title", content: "QAAssist — Quality & Release System" },
      { property: "og:description", content: "Structured QA, bug triage, and release control for product teams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ProductPage
      name="QAAssist"
      eyebrow="QUALITY & RELEASE"
      tagline="Ship releases without last-minute surprises."
      heading="Structured QA and release control in one system."
      description="QAAssist gives product, QA, and engineering teams a single place to manage test cases, issues, and release readiness."
      icon={ShieldCheck}
      bestFor="Product and engineering teams shipping regularly"
      features={[
        { title: "Release Checklists", body: "Every release moves through the same, repeatable readiness checklist.", icon: ListChecks },
        { title: "Bug Triage", body: "Prioritise, assign, and track issues from report to resolution.", icon: Bug },
        { title: "Regression Tracking", body: "Reusable test suites catch issues before they reach production.", icon: PlayCircle },
        { title: "Fix Verification", body: "Confirm every fix with linked test evidence before closing.", icon: ShieldCheck },
        { title: "Release Requests", body: "Structured requests keep engineering and QA aligned per release.", icon: GitPullRequest },
        { title: "Quality Reporting", body: "Bug trends, escape rate, and release stability in one view.", icon: LineChart },
      ]}
      howItWorks={[
        { title: "Plan the release", body: "Define scope, checklist, and owners for each release cycle." },
        { title: "Run tests and log issues", body: "Test cases, bugs, and blockers stay linked to the same release." },
        { title: "Verify fixes", body: "Every fix is reviewed and marked ready before the release ships." },
        { title: "Report and improve", body: "Post-release reviews surface trends and drive process changes." },
      ]}
      outcomes={[
        "Fewer post-release surprises and hotfixes",
        "A shared view of release readiness across teams",
        "Clear ownership for bugs, tests, and fixes",
        "Measurable quality trends over time",
      ]}
    />
  ),
});
