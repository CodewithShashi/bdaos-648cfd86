import { motion } from "framer-motion";
import { Container } from "./Container";

const logos = [
  "logoipsum",
  "LOGOIPSUM",
  "logoipsum°",
  "Logoipsum",
  "logoipsum",
  "logoipsum°",
  "logoipsum",
  "Logoipsum",
];

export function LogoMarquee() {
  return (
    <section className="relative bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border-t border-b border-border"
        >
          {logos.map((l, i) => (
            <div
              key={i}
              className="group relative flex h-24 items-center justify-center border-r border-border last:border-r-0 [&:nth-child(4)]:border-r-0 sm:[&:nth-child(4)]:border-r lg:[&:nth-child(4)]:border-r [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r [&:nth-child(4n)]:sm:border-r-0 lg:[&:nth-child(4n)]:border-r lg:[&:nth-child(8n)]:border-r-0 [&:nth-child(n+5)]:border-t sm:[&:nth-child(n+5)]:border-t-0"
            >
              <span className="text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                {l}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
