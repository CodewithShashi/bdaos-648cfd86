import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ChevronDown, ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import heroImg from "@/assets/hero-ai.jpg";
import aboutImg from "@/assets/about.jpg";

type MegaItem = { title: string; desc: string; href: string };

const servicesItems: MegaItem[] = [
  { title: "Product Strategy & Experience", desc: "Define AI-driven value chains and craft purposeful product experiences.", href: "#services" },
  { title: "Digital Business Transformation", desc: "Advance your digital transformation journey end-to-end.", href: "#services" },
  { title: "Intelligence Engineering", desc: "Leverage data and AI to transform products, operations, and outcomes.", href: "#services" },
  { title: "Software Product Engineering", desc: "Ship high-value products faster with AI-powered engineering.", href: "#services" },
  { title: "Technology Modernization", desc: "Modernize legacy stacks with approaches that reduce risk.", href: "#services" },
  { title: "Embedded & IoT Engineering", desc: "Build embedded software, hardware, and connected IoT solutions.", href: "#services" },
];

const aboutLinks = [
  { label: "About Nebula", href: "#about" },
  { label: "Leadership", href: "#about" },
  { label: "Partners", href: "#testimonials" },
  { label: "Sustainability", href: "#about" },
  { label: "Locations", href: "#cta" },
  { label: "Press Room", href: "#work" },
  { label: "Events", href: "#work" },
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
    title: "Nebula wins Gold at the Future Skills Awards 2026.",
    date: "June 30, 2026",
    img: heroImg,
  },
];

const simpleLinks = [
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Clients" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "services" | "about">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mega on escape
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
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled || menu ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Nebula</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {(["about", "services"] as const).map((key) => (
              <button
                key={key}
                onMouseEnter={() => setMenu(key)}
                onFocus={() => setMenu(key)}
                onClick={() => setMenu(menu === key ? null : key)}
                className={`relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition ${
                  menu === key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-expanded={menu === key}
              >
                {key === "about" ? "About" : "Services"}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${menu === key ? "rotate-180" : ""}`}
                />
              </button>
            ))}
            {simpleLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onMouseEnter={() => setMenu(null)}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <AnimatedButton href="#cta">Get started</AnimatedButton>
          </div>

          <button
            className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-secondary"
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
                {menu === "services" ? (
                  <ServicesMega />
                ) : (
                  <AboutMega />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass rounded-3xl p-4 shadow-soft"
          >
            <div className="flex flex-col">
              <MobileGroup label="Services" items={servicesItems.map((s) => ({ label: s.title, href: s.href }))} onNavigate={() => setOpen(false)} />
              <MobileGroup label="About" items={aboutLinks} onNavigate={() => setOpen(false)} />
              {simpleLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <AnimatedButton href="#cta" className="w-full">
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

function ServicesMega() {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-8 p-8">
        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
          {servicesItems.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group block border-t border-border pt-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {s.title}
                </h4>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm text-muted-foreground">Technology Capabilities</span>
          <a href="#services" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Explore all capabilities
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="col-span-4 relative min-h-[360px]">
        <img src={heroImg} alt="Physical AI" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <span className="inline-block rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium">
            Featured
          </span>
          <h4 className="mt-3 text-2xl font-semibold">Physical AI</h4>
          <p className="mt-1 text-sm text-white/80">Where intelligent software meets the real world.</p>
        </div>
      </div>
    </div>
  );
}

function AboutMega() {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-4 p-8">
        <div className="flex flex-col">
          {aboutLinks.map((l, i) => (
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
              <span className="text-primary font-medium">Nebula</span>
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
              {items.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  onClick={onNavigate}
                  className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
