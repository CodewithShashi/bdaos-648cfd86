import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AnimatedButton } from "@/components/site/AnimatedButton";
import heroImg from "@/assets/hero-ai.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — BDA AI" },
      {
        name: "description",
        content:
          "Join BDA AI. We're building the AI operating system for modern teams, and we're looking for exceptional people to help us shape the future.",
      },
      { property: "og:title", content: "Careers — BDA AI" },
      {
        property: "og:description",
        content: "Join BDA AI and build the future of intelligent software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Careers — BDA AI" },
      { name: "twitter:description", content: "Join BDA AI and build the future of intelligent software." },
    ],
  }),
  component: CareersPage,
});

const values = [
  {
    title: "Craft over hustle",
    text: "We believe deep work produces better outcomes than constant motion. Our teams are small, focused, and given the time to do things right.",
  },
  {
    title: "AI-first thinking",
    text: "Every role here is shaped by the question: how can AI make this better? You'll work at the frontier, not just support it.",
  },
  {
    title: "Real ownership",
    text: "People at BDA AI own outcomes, not tasks. We trust you to make decisions, ship fast, and learn in public.",
  },
  {
    title: "Human-centered impact",
    text: "Technology is only meaningful when it helps people. We design, build, and ship with the end user always in mind.",
  },
];

const openings = [
  {
    title: "Senior AI Engineer",
    team: "Research",
    location: "San Francisco / Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "New York / Remote",
    type: "Full-time",
  },
  {
    title: "Solutions Architect",
    team: "Customer Success",
    location: "London / Remote",
    type: "Full-time",
  },
  {
    title: "Developer Relations Lead",
    team: "Marketing",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Applied ML Scientist",
    team: "Research",
    location: "Toronto / Remote",
    type: "Full-time",
  },
  {
    title: "Account Executive",
    team: "Sales",
    location: "Remote",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary & equity",
  "Remote-first with global co-working budget",
  "Health, dental & vision coverage",
  "Learning budget & conference access",
  "Flexible PTO & wellness days",
  "AI tooling & hardware stipend",
];

function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/10 blur-3xl" />
        </div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                We're hiring
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08]">
                Build the future of{" "}
                <span className="italic text-primary">intelligent software.</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
                Join a team of engineers, designers, researchers, and operators who are
                turning AI into the next essential layer of modern work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AnimatedButton href="#openings">View openings</AnimatedButton>
                <a
                  href="mailto:careers@bda.ai"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
                >
                  careers@bda.ai
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated aspect-[4/3]">
                <img
                  src={heroImg}
                  alt="BDA AI team working together"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-10 glass rounded-2xl p-5 shadow-soft animate-float">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-2xl font-semibold">24+</div>
                    <div className="text-xs text-muted-foreground">Open roles worldwide</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <Container>
          <SectionHeading
            eyebrow="Why BDA AI"
            title="A place for people who want to matter."
            description="Our culture is built around a few simple ideas that guide how we work, hire, and grow."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-white p-8 shadow-soft"
              >
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Openings */}
      <section id="openings" className="py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="Find your next chapter."
            description="We're always looking for exceptional people. If you don't see a perfect fit, send us a note anyway."
          />
          <div className="mt-16 flex flex-col gap-4">
            {openings.map((job, i) => (
              <motion.a
                key={job.title}
                href="mailto:careers@bda.ai?subject=Application for " + job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-3xl border border-border bg-white p-6 md:px-8 md:py-6 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {job.type}
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs">{job.team}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-elevated transition">
                  Apply
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits + culture image */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src={aboutImg}
                alt="BDA AI office collaboration"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Benefits & perks
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl font-normal tracking-tight">
                Work where you're valued.
              </h2>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 shadow-elevated"
          >
            <div aria-hidden className="absolute inset-0 opacity-70">
              <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/60 blur-3xl animate-float-slow" />
              <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/50 blur-3xl animate-float" />
            </div>
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-[1.08]">
                Don't see the right role?{" "}
                <span className="italic text-primary-glow">Say hello anyway.</span>
              </h2>
              <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
                We're always happy to hear from talented people. Tell us what you do best and
                we'll find a way to build something together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:careers@bda.ai"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-elevated transition"
                >
                  Contact careers
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
