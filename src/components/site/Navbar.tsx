import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles, ChevronDown, ArrowUpRight, ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import heroImg from "@/assets/hero-ai.jpg";
import aboutImg from "@/assets/about.jpg";

const aboutLinks = [
  { label: "About BDA AI", href: "#about" },
  { label: "Leadership", href: "#about" },
  { label: "Partners", href: "#testimonials" },
  { label: "Locations", href: "#cta" },
  { label: "Careers", href: "/careers" },
];

const aboutFeatured = [
  {
    tag: "Media Coverage",
    title: "AI-infused engineering makes us a true One team.",
    date: "June 30, 2026",
    img: aboutImg,
  },
  {
    tag: "Recognitions",
    title: "BDA AI wins Gold at the Future Skills Awards 2026.",
    date: "June 30, 2026",
    img: heroImg,
  },
];

const servicesLinks = [
  { label: "AI Strategy", href: "#services-showcase" },
  { label: "Autonomous Agents", href: "#services-showcase" },
  { label: "Workflow Automation", href: "#services-showcase" },
  { label: "Data & Analytics", href: "#services-showcase" },
  { label: "AI Security", href: "#services-showcase" },
  { label: "Integrations", href: "#services-showcase" },
];

const industriesLinks = [
  { label: "Banking", href: "#work" },
  { label: "Capital Markets", href: "#work" },
  { label: "Healthcare", href: "#work" },
  { label: "High Tech", href: "#work" },
  { label: "Retail", href: "#work" },
  { label: "Manufacturing", href: "#work" },
  { label: "Insurance", href: "#work" },
  { label: "Public Sector", href: "#work" },
];

const insightsLinks = [
  { label: "Blogs", href: "#insights" },
  { label: "Case Studies", href: "#work" },
];

const simpleLinks = [
  { href: "/#cta", label: "Contact" },
];


type MenuKey = null | "about" | "whatWeDo" | "insights";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      onMouseLeave={() => setMenu(null)}
    >
      <Container>
        <div
          className="flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 bg-card shadow-soft"
        >
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold tracking-tight">BDA AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              onMouseEnter={() => setMenu(null)}
              className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
            >
              Home
            </Link>
            <button
              onMouseEnter={() => setMenu("about")}
              onFocus={() => setMenu("about")}
              onClick={() => setMenu(menu === "about" ? null : "about")}
              className={`relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition ${
                menu === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={menu === "about"}
            >
              Who we are
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${menu === "about" ? "rotate-180" : ""}`}
              />
            </button>
            <button
              onMouseEnter={() => setMenu("whatWeDo")}
              onFocus={() => setMenu("whatWeDo")}
              onClick={() => setMenu(menu === "whatWeDo" ? null : "whatWeDo")}
              className={`relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition ${
                menu === "whatWeDo" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={menu === "whatWeDo"}
            >
              What we do
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${menu === "whatWeDo" ? "rotate-180" : ""}`}
              />
            </button>
            <button
              onMouseEnter={() => setMenu("insights")}
              onFocus={() => setMenu("insights")}
              onClick={() => setMenu(menu === "insights" ? null : "insights")}
              className={`relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition ${
                menu === "insights" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={menu === "insights"}
            >
              Insights
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${menu === "insights" ? "rotate-180" : ""}`}
              />
            </button>
            {simpleLinks.map((l) =>
              l.href.startsWith("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onMouseEnter={() => setMenu(null)}
                  className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  to={l.href}
                  onMouseEnter={() => setMenu(null)}
                  className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <AnimatedButton href="#cta">Get started</AnimatedButton>
          </div>

          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-secondary shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {menu && (
            <motion.div
              key={menu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.65, 0, 0.35, 1] }}
              onMouseEnter={() => setMenu(menu)}
              className="hidden md:block mt-3"
            >
              <div className="bg-background rounded-3xl shadow-elevated border border-border/60 overflow-hidden">
                {menu === "about" && <AboutMega />}
                {menu === "whatWeDo" && <WhatWeDoMega />}
                {menu === "insights" && <InsightsMega />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 bg-background rounded-3xl p-4 shadow-soft border border-border"
          >
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
              >
                Home
              </Link>
              <MobileGroup label="Who we are" items={aboutLinks} onNavigate={() => setOpen(false)} />
              <MobileGroup label="Services" items={servicesLinks} onNavigate={() => setOpen(false)} />
              <MobileGroup label="Industries" items={industriesLinks} onNavigate={() => setOpen(false)} />
              <MobileGroup label="Insights" items={insightsLinks} onNavigate={() => setOpen(false)} />
              {simpleLinks.map((l) =>
                l.href.startsWith("#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <div className="pt-2">
                <AnimatedButton href="#cta" className="w-full justify-between">
                  Get started
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}

function WhatWeDoMega() {
  const categories = [
    { key: "services", label: "Services", items: servicesLinks },
    { key: "industries", label: "Industries", items: industriesLinks },
  ] as const;
  const [activeKey, setActiveKey] = useState<(typeof categories)[number]["key"]>("services");
  const active = categories.find((c) => c.key === activeKey)!;

  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-5 p-8 border-r border-border/60">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
          Intelligence, delivered.
        </p>
        <div className="flex flex-col">
          {categories.map((c) => {
            const isActive = c.key === activeKey;
            return (
              <button
                key={c.key}
                onMouseEnter={() => setActiveKey(c.key)}
                onFocus={() => setActiveKey(c.key)}
                className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-left transition-colors ${
                  isActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-base font-medium">{c.label}</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1 text-primary" : ""}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="col-span-7 p-8 bg-secondary/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-x-8 gap-y-1"
          >
            {active.items.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className="group flex items-center justify-between border-b border-border/60 py-3 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span>{l.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function AboutMega() {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-4 p-8">
        <div className="flex flex-col">
          {aboutLinks.map((l, i) => {
            const isRoute = !l.href.startsWith("#");
            const className =
              "group flex items-center justify-between border-t border-border py-3.5 text-sm text-foreground hover:text-primary transition-colors";
            const children = (
              <>
                <span>{l.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </>
            );
            return isRoute ? (
              <Link key={l.label} to={l.href} className={className}>
                {children}
              </Link>
            ) : (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className={className}
              >
                {children}
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="col-span-8 p-8 grid grid-cols-2 gap-6 bg-secondary/40">
        {aboutFeatured.map((f, i) => (
          <motion.a
            key={f.title}
            href="#work"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-muted">
              <img
                src={f.img}
                alt={f.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-foreground shadow-soft">
                {f.tag}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span className="text-primary font-medium">BDA AI</span>
              <span>{f.date}</span>
            </div>
            <h4 className="mt-1.5 text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
              {f.title}
            </h4>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

const insightsFeatured = [
  {
    tag: "Media Coverage",
    title: "AI-infused engineering makes us a true One team.",
    date: "June 30, 2026",
    img: aboutImg,
  },
  {
    tag: "Recognitions",
    title: "BDA AI wins Gold at the Future Skills Awards 2026.",
    date: "June 30, 2026",
    img: heroImg,
  },
];

function InsightsMega() {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-4 p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
          Perspectives & proof
        </p>
        <div className="flex flex-col">
          {insightsLinks.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="group flex items-center justify-between border-t border-border py-3.5 text-sm text-foreground hover:text-primary transition-colors"
            >
              <span>{l.label}</span>
              <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="col-span-8 p-8 grid grid-cols-2 gap-6 bg-secondary/40">
        {insightsFeatured.map((f, i) => (
          <motion.a
            key={f.title}
            href="#work"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-muted">
              <img
                src={f.img}
                alt={f.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-foreground shadow-soft">
                {f.tag}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span className="text-primary font-medium">BDA AI</span>
              <span>{f.date}</span>
            </div>
            <h4 className="mt-1.5 text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
              {f.title}
            </h4>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 flex flex-col">
              {items.map((i) =>
                i.href.startsWith("#") ? (
                  <a
                    key={i.label}
                    href={i.href}
                    onClick={onNavigate}
                    className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                  >
                    {i.label}
                  </a>
                ) : (
                  <Link
                    key={i.label}
                    to={i.href}
                    onClick={onNavigate}
                    className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                  >
                    {i.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
