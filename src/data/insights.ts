import img1 from "@/assets/project-1.jpg";
import img2 from "@/assets/hero-ai.jpg";
import img3 from "@/assets/about.jpg";

export type InsightPost = {
  slug: string;
  img: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

export const articles: InsightPost[] = [
  {
    slug: "data-ai-ready",
    img: img1,
    category: "Guides",
    date: "Jun 24, 2026",
    title: "Getting Your Data AI-Ready, Without the Big Project",
    excerpt:
      "You do not need a data warehouse to start. A short, honest cleanup of the records you already use is usually enough.",
  },
  {
    slug: "buy-build-or-wait",
    img: img2,
    category: "AI Strategy",
    date: "Jun 24, 2026",
    title: "Buy, Build, or Wait: A Simpler Way to Decide",
    excerpt:
      "A practical decision frame for founders weighing off-the-shelf tools against a system built around how the team actually works.",
  },
  {
    slug: "tools-already-talk",
    img: img3,
    category: "Automation",
    date: "Jun 24, 2026",
    title: "Your Tools Already Talk. You Don't Have To.",
    excerpt:
      "Most teams re-enter the same information three times a day. Here is how to find those handoffs and remove them.",
  },
];

export const caseStudies: InsightPost[] = [
  {
    slug: "service-business-visibility",
    img: img2,
    category: "Business OS",
    date: "Jun 18, 2026",
    title: "One Dashboard Replaced Four Weekly Status Calls",
    excerpt:
      "A 60-person service business moved task ownership, escalation, and reporting into a single operating view.",
  },
  {
    slug: "hiring-pipeline-control",
    img: img3,
    category: "HireAssist",
    date: "Jun 10, 2026",
    title: "Cutting Time-to-Hire by Structuring the Pipeline",
    excerpt:
      "Candidate stages, owners, and follow-ups became explicit — and hiring stopped stalling between interviews.",
  },
  {
    slug: "marketing-attribution-clarity",
    img: img1,
    category: "Attribution",
    date: "Jun 2, 2026",
    title: "Knowing Which Channel Actually Created Revenue",
    excerpt:
      "Connecting campaigns to closed deals let the leadership team reallocate spend with evidence instead of instinct.",
  },
];

export const mediaRecognition: InsightPost[] = [
  {
    slug: "one-team-engineering",
    img: img3,
    category: "Media Coverage",
    date: "Jun 30, 2026",
    title: "AI-Infused Engineering Makes Us a True One Team",
    excerpt:
      "Coverage of how BDA Technologies blends delivery, training, and automation into one working model.",
  },
  {
    slug: "future-skills-gold",
    img: img2,
    category: "Recognition",
    date: "Jun 30, 2026",
    title: "BDA Wins Gold at the Future Skills Awards 2026",
    excerpt:
      "Recognised for practical AI adoption programmes that stick with teams after the rollout ends.",
  },
  {
    slug: "founder-interview",
    img: img1,
    category: "Interview",
    date: "May 22, 2026",
    title: "Why Founder-Led Businesses Need an Operating System",
    excerpt:
      "A founder interview on the gap between advice and implementation in growing service businesses.",
  },
];
