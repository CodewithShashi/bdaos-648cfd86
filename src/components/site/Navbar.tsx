import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ArrowUpRight, ArrowRight, ChevronRight, Globe } from "lucide-react";
import { Container } from "./Container";
import { AnimatedButton } from "./AnimatedButton";
import logoAsset from "@/assets/BDA-Logo.png.asset.json";
import { caseStudies, articles } from "@/data/insights";
import aboutImg from "@/assets/about.jpg";
import founderHero from "@/assets/founder-hero.jpg";
import careersImg from "@/assets/project-1.jpg";
import productsFeatured from "@/assets/linkassist-featured.jpg";



const aboutLinks = [
  { label: "About BDA Technologies", href: "/about" },
  { label: "Team & Partners", href: "/team" },
  { label: "Careers", href: "/careers" },
];

const whatWeDoProducts = [
  { label: "LinkAssist", href: "/products/linkassist" },
  { label: "HireAssist", href: "/products/hireassist" },
  { label: "TaskAssist", href: "/products/taskassist" },
  { label: "QAAssist", href: "/products/qaassist" },
];

const whatWeDoServices = [
  { label: "Operating System", href: "/services/bda-os-implementation" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "AI Training", href: "/services/ai-training" },
  { label: "Pricing", href: "/services/pricing" },
];


const whatWeDoBrands = [
  { label: "Clients.co.in", href: "/brands/clients" },
  { label: "BrandingChef", href: "/brands/brandingchef" },
  { label: "Automation School", href: "/brands/automation-school" },
];

const insightsLinks = [
  { label: "Articles", href: "/insights/articles" },
  { label: "Case Studies", href: "/insights/case-studies" },
  { label: "Media & Recognition", href: "/insights/media-recognition" },
];

const simpleLinks = [
  { href: "/", label: "Home" },
];

const regions = [
  { code: "IN", label: "India", flag: "https://flagcdn.com/in.svg", path: "/in" },
  { code: "GL", label: "Global", flag: null, path: "/" },
  { code: "AE", label: "UAE", flag: "https://flagcdn.com/ae.svg", path: "/uae" },
];

function RegionFlag({ region }: { region: (typeof regions)[number] }) {
  if (!region.flag) {
    return <Globe className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />;
  }
  return (
    <img
      src={region.flag}
      alt=""
      loading="lazy"
      aria-hidden
      className="h-4 w-5 shrink-0 rounded-[3px] object-cover"
    />
  );
}



type MenuKey = null | "about" | "whatWeDo" | "insights";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const region =
    regions.find((r) => r.path !== "/" && (pathname === r.path || pathname.startsWith(r.path + "/"))) ??
    regions[1];

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
            <Link
              to="/"
              onMouseEnter={() => setMenu(null)}
              className="relative rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground whitespace-nowrap"
            >
              Home
            </Link>
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
            <RegionSelector region={region} />
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
              <div className="bg-card text-foreground rounded-3xl shadow-elevated border border-border overflow-hidden max-h-[calc(100vh-8rem)] overflow-y-auto">
                <MegaPanel config={megaMenus[menu]} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-3 bg-background rounded-3xl p-4 shadow-soft border border-border max-h-[calc(100vh-7rem)] overflow-y-auto"
          >
            <div className="flex flex-col">
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
                    <Link
                      key={r.code}
                      to={r.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition ${
                        r.code === region.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <RegionFlag region={r} />
                      <span>{r.label}</span>
                    </Link>
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

function RegionSelector({ region }: { region: (typeof regions)[number] }) {
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
              <Link
                key={r.code}
                to={r.path}
                onClick={() => setOpen(false)}
                className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-left transition ${
                  r.code === region.code ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <RegionFlag region={r} />
                <span>{r.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type MegaSection = { key: string; label: string; items: { label: string; href: string }[] };
type MegaFeatured = {
  eyebrow: string;
  title: string;
  href: string;
  img: string;
  linkLabel: string;
  source?: string;
  date?: string;
  excerpt?: string;
};
type MegaConfig = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  sections: MegaSection[];
  featured?: MegaFeatured | MegaFeatured[];
  featuredByItem?: Record<string, MegaFeatured | MegaFeatured[]>;
};

const megaMenus: Record<"whatWeDo" | "about" | "insights", MegaConfig> = {
  whatWeDo: {
    title: "What we do",
    body:
      "BDA Technologies works from diagnosis to launch, training, and adoption — products, services, and brands built around how your team actually works.",
    ctaLabel: "Explore what we do",
    ctaHref: "/services/bda-os-implementation",
    sections: [
      { key: "products", label: "Products", items: whatWeDoProducts },
      { key: "services", label: "Services", items: whatWeDoServices },
      { key: "brands", label: "Brands", items: whatWeDoBrands },
    ],
    featured: {
      eyebrow: "Feature",
      title: "LinkAssist: turn every link into measurable pipeline",
      href: "/products/linkassist",
      img: productsFeatured,
      linkLabel: "Explore LinkAssist",
      source: "BDA Products",
      date: "Featured",
      excerpt:
        "Our flagship product for teams that need attribution, follow-up, and conversion visibility in one place.",
    },
  },

  about: {
    title: "Who we are",
    body:
      "A team of operators, engineers, and trainers helping founder-led service businesses build the systems they need to grow.",
    ctaLabel: "About BDA Technologies",
    ctaHref: "/about",
    sections: [{ key: "company", label: "Company", items: aboutLinks }],
    featured: {
      eyebrow: "Feature",
      title: "Inside BDA Technologies: how we build and implement systems",
      href: "/about",
      img: aboutImg,
      linkLabel: "Read More",
      source: "BDA Technologies",
      date: "Jul 2026",
      excerpt:
        "Operators, engineers, and trainers working from diagnosis to adoption — here is how the work actually gets done.",
    },
    featuredByItem: {
      "About BDA Technologies": {
        eyebrow: "Feature",
        title: "Inside BDA Technologies: how we build and implement systems",
        href: "/about",
        img: aboutImg,
        linkLabel: "Read More",
        source: "BDA Technologies",
        date: "Jul 2026",
        excerpt:
          "Operators, engineers, and trainers working from diagnosis to adoption — here is how the work actually gets done.",
      },
      "Team & Partners": {
        eyebrow: "Feature",
        title: "The people and partners behind every implementation",
        href: "/team",
        img: founderHero,
        linkLabel: "Meet the team",
        source: "BDA Technologies",
        date: "Team",
        excerpt:
          "Operators, engineers, and trainers who stay with your team from first audit through adoption.",
      },
      Careers: {
        eyebrow: "Feature",
        title: "Build systems that change how businesses run",
        href: "/careers",
        img: careersImg,
        linkLabel: "See open roles",
        source: "BDA Technologies",
        date: "Careers",
        excerpt:
          "We hire people who care about clear scope, honest delivery, and work that actually gets used.",
      },
    },
  },
  insights: {
    title: "Insights",
    body:
      "Articles, case studies, and recognition — practical thinking on visibility, execution, and control inside growing businesses.",
    ctaLabel: "Start reading now",
    ctaHref: "/insights/articles",
    sections: [{ key: "insights", label: "Insights", items: insightsLinks }],
    featured: {
      eyebrow: "Feature",
      title: caseStudies[0].title,
      href: "/insights/case-studies",
      img: caseStudies[0].img,
      linkLabel: "Read Full Article",
      source: "BDA Technologies",
      date: caseStudies[0].date,
      excerpt: caseStudies[0].excerpt,
    },
  },
};


function MegaPanel({ config }: { config: MegaConfig }) {
  const [active, setActive] = useState(config.sections[0].key);
  const [hovered, setHovered] = useState(0);
  const activeSection = config.sections.find((s) => s.key === active) ?? config.sections[0];
  const multi = config.sections.length > 1;
  const hoveredItem = activeSection.items[hovered];
  const featured =
    (!multi && hoveredItem && config.featuredByItem?.[hoveredItem.label]) || config.featured;

  return (
    <div className="grid grid-cols-12 items-start gap-x-8 gap-y-8 p-6 lg:p-8 xl:p-10">
      <div className="col-span-12 lg:col-span-3">
        <h3 className="font-display text-xl leading-tight tracking-tight text-foreground lg:text-2xl xl:text-[1.75rem]">
          {config.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{config.body}</p>
        <Link
          to={config.ctaHref}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          {config.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {multi && (
        <div className="col-span-12 min-w-0 lg:col-span-3">
          {config.sections.map((section) => (
            <button
              key={section.key}
              onMouseEnter={() => setActive(section.key)}
              onFocus={() => setActive(section.key)}
              onClick={() => setActive(section.key)}
              className={`group flex w-full items-center justify-between gap-3 border-b border-border px-4 py-3.5 text-left text-[0.95rem] transition ${
                active === section.key
                  ? "bg-menu-active text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="truncate">{section.label}</span>
              <ChevronRight
                className={`h-4 w-4 shrink-0 transition-transform ${
                  active === section.key ? "translate-x-0.5 text-foreground" : "text-muted-foreground/60"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      <div
        className={`col-span-12 min-w-0 ${
          multi ? (featured ? "lg:col-span-3" : "lg:col-span-5") : featured ? "lg:col-span-4" : "lg:col-span-9"
        }`}
      >
        <motion.div
          key={activeSection.key}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={multi ? "flex flex-col" : "flex flex-col"}
        >
          {activeSection.items.map((l, i) =>
            multi ? (
              <Link
                key={l.label}
                to={l.href}
                className="group flex items-center justify-between gap-3 py-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <span className="whitespace-nowrap">{l.label}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                className={`group flex w-full items-center justify-between gap-3 border-b border-border px-4 py-3.5 text-left text-[0.95rem] transition ${
                  hovered === i ? "bg-menu-active text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="truncate">{l.label}</span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    hovered === i ? "translate-x-0.5 text-foreground" : "text-muted-foreground/60"
                  }`}
                />
              </Link>
            )
          )}
        </motion.div>
      </div>

      {featured && (
        <motion.div
          key={featured.href + featured.title}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`col-span-12 ${multi ? "lg:col-span-3" : "lg:col-span-5"}`}
        >
          <Link to={featured.href} className="group block">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-md bg-card px-2.5 py-1 text-xs font-medium text-foreground shadow-soft">
                {featured.eyebrow}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>{featured.source}</span>
              <span>{featured.date}</span>
            </div>
            <p className="mt-2 font-display text-base leading-snug text-foreground">{featured.title}</p>
            {featured.excerpt && (
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
            )}
            <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4">
              {featured.linkLabel}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      )}
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
