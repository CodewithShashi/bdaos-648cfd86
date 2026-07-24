import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowUpRight, ChevronRight, Globe } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import logoAsset from "@/assets/BDA-Logo.png.asset.json";
import heroImg from "@/assets/hero-ai.jpg";
import aboutImg from "@/assets/about.jpg";
import productsFeaturedImg from "@/assets/products-featured.jpg";

const aboutLinks = [
  { label: "About BDA Technologies", href: "/about" },
  { label: "Team & Partners", href: "/team" },
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

const whatWeDoProducts = [
  { label: "LinkAssist", href: "/products/linkassist" },
  { label: "HireAssist", href: "/products/hireassist" },
  { label: "TaskAssist", href: "/products/taskassist" },
  { label: "QAAssist", href: "/products/qaassist" },
];

const whatWeDoServices = [
  { label: "Business OS", href: "/services/bda-os-implementation" },
  { label: "Digital Transformation", href: "/services/business-audit" },
  { label: "AI Training", href: "/services/ai-training" },
];

const whatWeDoBrands = [
  { label: "Clients.co.in", href: "#" },
  { label: "BrandingChef", href: "#" },
  { label: "Automation School", href: "#" },
];

const insightsLinks = [
  { label: "Articles", href: "#insights" },
  { label: "Case Studies", href: "#work" },
  { label: "Media & Recognition", href: "#insights" },
];

const simpleLinks = [
  { href: "/", label: "Home" },
];

const regions = [
  { code: "IN", label: "India", flag: "🇮🇳" },
  { code: "GL", label: "Global", flag: "🌐" },
  { code: "AE", label: "UAE", flag: "🇦🇪" },
];

type MenuKey = null | "about" | "whatWeDo" | "insights";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [region, setRegion] = useState(regions[0]);

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
        <div className="flex items-center justify-between px-8 py-2.5 rounded-full transition-all duration-300 bg-card shadow-soft">
          
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src={logoAsset.url}
              alt="BDA Technologies"
              className="h-8 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            <button
              onMouseEnter={() => setMenu("whatWeDo")}
              onFocus={() => setMenu("whatWeDo")}
              onClick={() => setMenu(menu === "whatWeDo" ? null : "whatWeDo")}
              className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition whitespace-nowrap ${
                menu === "whatWeDo" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={menu === "whatWeDo"}
            >
              What We Do
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${menu === "whatWeDo" ? "rotate-180" : ""}`}
              />
            </button>
            <button
              onMouseEnter={() => setMenu("about")}
              onFocus={() => setMenu("about")}
              onClick={() => setMenu(menu === "about" ? null : "about")}
              className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition whitespace-nowrap ${
                menu === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={menu === "about"}
            >
              Who We Are
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${menu === "about" ? "rotate-180" : ""}`}
              />
            </button>
            <button
              onMouseEnter={() => setMenu("insights")}
              onFocus={() => setMenu("insights")}
              onClick={() => setMenu(menu === "insights" ? null : "insights")}
              className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition whitespace-nowrap ${
                menu === "insights" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-expanded={menu === "insights"}
            >
              Insights
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${menu === "insights" ? "rotate-180" : ""}`}
              />
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <RegionSelector region={region} setRegion={setRegion} />
            <AnimatedButton href="/contact">Contact Sales</AnimatedButton>
          </div>

          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full bg-secondary shrink-0"
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
              className="hidden lg:block mt-3"
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
            className="lg:hidden mt-3 bg-background rounded-3xl p-4 shadow-soft border border-border"
          >
            <div className="flex flex-col">
              <MobileGroupWithSections
                label="What We Do"
                sections={[
                  { label: "Products", items: whatWeDoProducts },
                  { label: "Services", items: whatWeDoServices },
                  { label: "Brands", items: whatWeDoBrands },
                ]}
                onNavigate={() => setOpen(false)}
              />
              <MobileGroup label="Who We Are" items={aboutLinks} onNavigate={() => setOpen(false)} />
              <MobileGroup label="Insights" items={insightsLinks} onNavigate={() => setOpen(false)} />
              <div className="px-4 py-3 border-b border-border/60">
                <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  <Globe className="h-4 w-4" />
                  Region
                </p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <button
                      key={r.code}
                      onClick={() => setRegion(r)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition ${
                        r.code === region.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span>{r.flag}</span>
                      <span>{r.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <AnimatedButton href="/contact" className="w-full justify-between">
                  Contact Sales
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}

function RegionSelector({
  region,
  setRegion,
}: {
  region: (typeof regions)[number];
  setRegion: (r: (typeof regions)[number]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground hover:bg-secondary"
        aria-expanded={open}
        aria-label="Select region"
      >
        <Globe className="h-4 w-4" />
        <span>{region.label}</span>
        <span aria-hidden>{region.flag}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 min-w-[140px] rounded-2xl bg-card shadow-soft border border-border p-1.5 z-50"
          >
            {regions.map((r) => (
              <button
                key={r.code}
                onClick={() => {
                  setRegion(r);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-left transition ${
                  r.code === region.code ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <span>{r.flag}</span>
                <span>{r.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const whatWeDoSections = [
  { key: "products", label: "Products", items: whatWeDoProducts },
  { key: "services", label: "Services", items: whatWeDoServices },
  { key: "brands", label: "Brands", items: whatWeDoBrands },
] as const;

function WhatWeDoMega() {
  const [active, setActive] = useState<(typeof whatWeDoSections)[number]["key"]>("products");
  const activeSection = whatWeDoSections.find((s) => s.key === active) || whatWeDoSections[0];

  return (
    <div className="grid grid-cols-12 gap-0">
      {/* Sidebar */}
      <div className="col-span-3 p-6 bg-secondary/40 border-r border-border/60">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4 px-3">
          What We Do
        </p>
        <div className="flex flex-col">
          {whatWeDoSections.map((section) => (
            <button
              key={section.key}
              onMouseEnter={() => setActive(section.key)}
              onClick={() => setActive(section.key)}
              className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-sm transition text-left ${
                active === section.key
                  ? "bg-background text-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              <span className="font-medium">{section.label}</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  active === section.key ? "translate-x-0.5 text-primary" : "text-muted-foreground/60 group-hover:text-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Active section items */}
      <div className="col-span-6 p-8 border-r border-border/60">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
          {activeSection.label}
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-0">
          {activeSection.items.map((l, i) => (
            <MegaLink key={l.label} l={l} i={i} />
          ))}
        </div>
      </div>

      {/* Featured card */}
      <div className="col-span-3 p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          Featured
        </p>
        <a href="#products" className="group block">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
            <img
              src={productsFeaturedImg}
              alt="LinkAssist featured"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h4 className="text-lg font-semibold text-white leading-snug">LinkAssist</h4>
              <p className="mt-1 text-sm text-white/85 leading-relaxed">
                AI-powered link building and digital PR assistant.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function MegaLink({ l, i }: { l: { label: string; href: string }; i: number }) {
  const isRoute = !l.href.startsWith("#");
  const children = (
    <>
      <span>{l.label}</span>
      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </>
  );
  const className =
    "group flex items-center justify-between border-t border-border py-3.5 text-sm text-foreground hover:text-primary transition-colors";
  return isRoute ? (
    <Link to={l.href} className={className}>
      {children}
    </Link>
  ) : (
    <motion.a
      href={l.href}
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: i * 0.03 }}
      className={className}
    >
      {children}
    </motion.a>
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

function MobileGroupWithSections({
  label,
  sections,
  onNavigate,
}: {
  label: string;
  sections: { label: string; items: { label: string; href: string }[] }[];
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
            <div className="pl-4 pb-2 flex flex-col gap-4">
              {sections.map((section) => (
                <div key={section.label}>
                  <p className="px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {section.label}
                  </p>
                  <div className="flex flex-col">
                    {section.items.map((i) =>
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
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
