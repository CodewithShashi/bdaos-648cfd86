import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Pilot",
    tagline: "Start with one high-impact win.",
    price: { monthly: "$1.995", yearly: "$1.596" },
    included: [
      "AI readiness audit",
      "90-day roadmap",
      "1 workflow automated or 1 AI build",
      "2–4 week delivery",
      "Handover docs + 1 workshop",
    ],
  },
  {
    name: "Partner",
    tagline: "Your AI team, always building.",
    price: { monthly: "$2.995", yearly: "$2.396" },
    included: [
      "Everything in Pilot",
      "Multiple builds per quarter",
      "Custom agents & integrations",
      "Bi-weekly strategy reviews",
      "Priority support (Slack, 24–48h)",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    tagline: "Org-wide AI across teams.",
    price: { monthly: "$5.995", yearly: "$4.796" },
    included: [
      "Everything in Partner",
      "Multi-team rollout",
      "Security & compliance review",
      "Dedicated PM + on-call support",
      "Training program + playbooks/SOPs",
    ],
  },
];

function BillingToggle({
  yearly,
  onToggle,
}: {
  yearly: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={yearly}
      aria-label="Toggle yearly billing"
      className={`relative h-5 w-9 rounded-full transition-colors ${
        yearly ? "bg-primary" : "bg-background/25"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-background shadow-sm transition-transform ${
          yearly ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState<Record<string, boolean>>({});

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-background">
      <Container>
        <SectionHeading
          eyebrow="008/ OUR PRICING"
          title="Pricing That Scales With You."
          description="Start with a focused pilot, grow into an embedded partnership."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const isYearly = !!yearly[plan.name];
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col"
              >
                {/* Outer dashed card frame */}
                <div
                  className={`rounded-[28px] border border-dashed border-border/70 p-3 ${
                    plan.highlighted ? "bg-secondary/70" : "bg-secondary/40"
                  }`}
                >
                  {/* Dark price card */}
                  <div className="rounded-2xl bg-foreground text-background p-6 md:p-7 relative overflow-hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                          {plan.name}
                        </h3>
                        <p className="mt-1 text-sm text-background/70">
                          {plan.tagline}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-medium tracking-wider text-background/70">
                          {isYearly ? "PER YEAR" : "PER PROJECT"}
                        </span>
                        <BillingToggle
                          yearly={isYearly}
                          onToggle={() =>
                            setYearly((s) => ({ ...s, [plan.name]: !s[plan.name] }))
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-14 flex items-end gap-1">
                      <motion.span
                        key={plan.price[isYearly ? "yearly" : "monthly"]}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-display text-4xl md:text-5xl tracking-tight"
                      >
                        {plan.price[isYearly ? "yearly" : "monthly"]}
                      </motion.span>
                      <span className="text-xs text-background/60 mb-2">
                        {isYearly ? "/YEARLY" : "/MONTHLY"}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="group relative mt-3 flex w-full items-center justify-center rounded-2xl bg-foreground text-background py-4 text-sm font-medium overflow-hidden hover:bg-foreground/90 transition-colors"
                  >
                    <span className="relative z-10">Book A Call</span>
                    <span className="absolute left-6 right-6 bottom-3 h-px bg-primary/70" />
                  </a>

                  {/* Included list inside card frame */}
                  <div className="mt-6 px-2 pb-2 pt-1">
                    <p className="text-sm text-muted-foreground mb-4">
                      What's included:
                    </p>
                    <ul className="flex flex-col gap-3">
                      {plan.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-primary">
                            <Check className="h-4 w-4" strokeWidth={2.5} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
