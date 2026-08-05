import { motion } from "framer-motion";
import bdaLogo from "@/assets/BDA-Logo.png";

type Review = {
  quote: string;
  name: string;
  role: string;
};

const rowOne: Review[] = [
  {
    quote:
      "Our team now runs the playbooks on their own. That's the kind of partner that builds capability, not dependency.",
    name: "Emma Collins",
    role: "Head of Content",
  },
  {
    quote:
      "BDA killed two of our pet projects and saved us a fortune. Honest advice we couldn't get internally.",
    name: "Lucas Bennett",
    role: "CEO & Founder",
  },
  {
    quote:
      "Every recommendation tied back to a real number on the P&L. Strategic, reliable, and genuinely tailored to us.",
    name: "Benjamin Daul",
    role: "Head of Engineering",
  },
  {
    quote:
      "They rewired how we ship. Weekly experiments, clear metrics, and zero fluff — a rare kind of partner.",
    name: "Sofia Marín",
    role: "VP Growth",
  },
];

const rowTwo: Review[] = [
  {
    quote:
      "The pilot was live and measurable before we expected a proposal. Fast, focused, and refreshingly free of buzzwords.",
    name: "Amy Louise",
    role: "Customer Success Manager",
  },
  {
    quote:
      "We had a roadmap in weeks, not months of meetings. Finally a partner that thinks in outcomes.",
    name: "Michael Torres",
    role: "Head of Operations",
  },
  {
    quote:
      "They showed us where systems actually fit our workflow, not just where it sounded impressive. Clear and practical.",
    name: "Olivia Reed",
    role: "Marketing Director",
  },
  {
    quote:
      "Craft you can feel. Every review round moved us forward instead of sideways — a genuine force multiplier.",
    name: "Jonas Weber",
    role: "Founder",
  },
];

const rowThree: Review[] = [
  {
    quote:
      "Dashboards our managers actually open every morning. Nothing slips through the cracks anymore.",
    name: "Rahul Menon",
    role: "COO",
  },
  {
    quote:
      "Follow-ups stopped depending on memory. The system carries the process now.",
    name: "Priya Nair",
    role: "Sales Lead",
  },
  {
    quote:
      "Reporting that used to take two days now takes two minutes. That alone paid for the project.",
    name: "Daniel Okafor",
    role: "Finance Director",
  },
  {
    quote:
      "Onboarding a new hire is finally a checklist, not a scramble. Huge difference for us.",
    name: "Hannah Meyer",
    role: "People Lead",
  },
];

const rowFour: Review[] = [
  {
    quote:
      "Clear ownership on every task. Escalations happen before things burn, not after.",
    name: "Arjun Shah",
    role: "Delivery Manager",
  },
  {
    quote:
      "They trained our team properly. Adoption stuck long after the engagement ended.",
    name: "Clara Fontaine",
    role: "Transformation Lead",
  },
  {
    quote:
      "Straightforward, senior people who care about the outcome more than the invoice.",
    name: "Tom Whitaker",
    role: "Managing Partner",
  },
  {
    quote:
      "One operating system replaced five tools and a lot of guesswork.",
    name: "Meera Iyer",
    role: "Founder",
  },
];

function Card({ r, muted = false }: { r: Review; muted?: boolean }) {
  return (
    <figure
      className={`w-[19rem] shrink-0 rounded-2xl border border-border bg-card p-5 shadow-soft sm:w-[23rem] ${
        muted ? "opacity-60" : ""
      }`}
    >
      <p className="text-sm leading-relaxed text-foreground/80 sm:text-[0.95rem]">
        {r.quote}
      </p>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-foreground">
          <img
            src={bdaLogo}
            alt="BDA Technologies"
            className="h-5 w-auto object-contain"
            loading="lazy"
          />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium text-foreground">
            {r.name}
          </span>
          <span className="block truncate text-xs text-muted-foreground">
            {r.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({
  items,
  x,
  muted = false,
}: {
  items: Review[];
  x: MotionValue<string>;
  muted?: boolean;
}) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div className="flex w-max gap-4 sm:gap-5" style={{ x }}>
        {loop.map((r, i) => (
          <Card key={`${r.name}-${i}`} r={r} muted={muted} />
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  // Cards drift horizontally as you scroll through the pinned section
  const xA = useTransform(p, [0, 1], ["-4%", "-26%"]);
  const xB = useTransform(p, [0, 1], ["-30%", "-4%"]);
  const xC = useTransform(p, [0, 1], ["-6%", "-30%"]);
  const xD = useTransform(p, [0, 1], ["-28%", "-2%"]);

  // Whole card field zooms out slightly and settles
  const fieldScale = useTransform(p, [0, 0.6, 1], [1.18, 1, 1]);
  const fieldOpacity = useTransform(p, [0, 0.12, 0.85, 1], [0, 1, 1, 0.35]);

  // Headline grows into place in the middle of the field
  const headScale = useTransform(p, [0, 0.45, 1], [0.72, 1, 1.04]);
  const headOpacity = useTransform(p, [0, 0.2, 0.9, 1], [0, 1, 1, 0.6]);

  return (
    <section id="testimonials" ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-secondary/30">
        <motion.div
          style={{ scale: fieldScale, opacity: fieldOpacity }}
          className="relative w-full space-y-4 sm:space-y-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        >
          <Row items={rowOne} x={xA} muted />
          <Row items={rowTwo} x={xB} />
          <div className="h-[13rem] sm:h-[15rem]" />
          <Row items={rowThree} x={xC} />
          <Row items={rowFour} x={xD} muted />
        </motion.div>

        {/* Centered headline pinned over the drifting field */}
        <motion.div
          style={{ scale: headScale, opacity: headOpacity }}
          className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            OUR CLIENTS
          </span>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-normal tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            What Our Clients Say.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Real stories from teams that use BDA Technologies to scale faster
            and achieve measurable results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
