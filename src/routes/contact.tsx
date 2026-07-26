import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/site/Container";
import { AnimatedButton } from "@/components/site/AnimatedButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BDA Technologies — Business Operating Systems" },
      {
        name: "description",
        content:
          "Get in touch with BDA Technologies. Request a business audit, discuss a custom system, or ask about our products and services.",
      },
      { property: "og:title", content: "Contact BDA Technologies" },
      {
        property: "og:description",
        content:
          "Get in touch with BDA Technologies. Request a business audit or discuss a custom operating system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@bdatechnologies.com",
    href: "mailto:hello@bdatechnologies.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Gurugram, Haryana, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Mon – Fri, 9:00 AM – 6:30 PM IST",
    href: "#",
  },
];

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Section 1 — Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.02]"
            >
              Let us talk about your operations.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Tell us what is slowing your business down. We will reply within two business days with a clear next step.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Section 2 — Contact info + Form */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — info cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex h-full flex-col gap-5"
            >
              {contactInfo.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-6">
                <p className="text-sm font-medium text-foreground">Prefer a scheduled call?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Apply for a Business Audit Call and we will review your operations before we speak.
                </p>
                <div className="mt-4">
                  <AnimatedButton href="/#cta" className="text-sm">
                    Apply for a Business Audit Call
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-elevated">
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in the form and we will get back to you shortly.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Work email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-foreground">
                      Company name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Services"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="interest" className="block text-sm font-medium text-foreground">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
                    >
                      <option value="">Select an option</option>
                      <option value="business-audit">Business Audit</option>
                      <option value="bda-os">BDA OS Implementation</option>
                      <option value="ai-training">AI Training and Team Adoption</option>
                      <option value="product">One of your products</option>
                      <option value="custom">Custom software</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about the operational problem you want to solve..."
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-elevated transition"
                    >
                      Send message
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section 3 — CTA */}
      <section className="pb-16 md:pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20 shadow-elevated"
          >
            <div aria-hidden className="absolute inset-0 opacity-70">
              <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/60 blur-3xl animate-float-slow" />
              <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-primary-glow/50 blur-3xl animate-float" />
            </div>

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
                START WITH CLARITY
              </span>
              <h2 className="mt-6 text-4xl md:text-6xl font-normal tracking-tight leading-[1.05]">
                Find what is slowing your business down.
              </h2>
              <p className="mt-5 text-lg text-background/70 max-w-xl leading-relaxed">
                Apply for a Business Audit Call. We will review your business, your current systems, and the main operational issue before inviting you to a call.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <AnimatedButton href="/#cta">Apply for a Business Audit Call</AnimatedButton>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
