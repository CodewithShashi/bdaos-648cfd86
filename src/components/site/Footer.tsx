import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { Container } from "./Container";
import logoAsset from "@/assets/BDA-Logo.png.asset.json";

const cols = [
  { title: "Product", links: ["Platform", "Agents", "Integrations", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "Blog", "Community"] },
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
            <p className="mt-5 max-w-sm text-muted-foreground leading-relaxed">
              The AI operating system for modern teams. Ship intelligent products with
              craft, speed, and confidence.
            </p>

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
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-semibold">{c.title}</div>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-8">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BDA AI, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
