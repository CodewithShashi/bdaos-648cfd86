import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import logoAsset from "@/assets/BDA-Logo.png.asset.json";

const linkGroups = [
  {
    title: "Who We Are",
    links: [
      { label: "About BDA Technologies", href: "/about" },
      { label: "Team & Partners", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "LinkAssist", href: "/products/linkassist" },
      { label: "HireAssist", href: "/products/hireassist" },
      { label: "TaskAssist", href: "/products/taskassist" },
      { label: "QAAssist", href: "/products/qaassist" },
      { label: "Attribution", href: "/products/attribution" },
      { label: "CoachAssist", href: "/products/coachassist" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Business OS", href: "/services/bda-os-implementation" },
      { label: "Digital Transformation", href: "/services/business-audit" },
      { label: "AI Training", href: "/services/ai-training" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Clients.co.in", href: "#" },
      { label: "BrandingChef", href: "#" },
      { label: "Automation School", href: "#" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Articles", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Media & Recognition", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Refund and Cancellation", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "X" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="border-t border-border bg-white"
    >
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-2">
              <img
                src={logoAsset.url}
                alt="BDA Technologies"
                className="h-8 w-auto object-contain"
              />
            </a>

            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                BDA Technologies
              </p>
              <h3 className="text-2xl font-medium tracking-tight text-foreground">
                Business operating systems for growing service businesses.
              </h3>
              <p className="max-w-sm text-muted-foreground leading-relaxed">
                We design and implement dashboards, workflows, automation, custom software, and team adoption systems.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-secondary/60 p-1.5"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-elevated transition">
                Subscribe
              </button>
            </form>

            <div className="mt-8 flex items-center gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {linkGroups.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-semibold">{c.title}</div>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("/") ? (
                        <Link
                          to={l.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-8">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BDA Technologies Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
