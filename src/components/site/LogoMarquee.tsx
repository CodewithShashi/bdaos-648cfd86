import { motion } from "framer-motion";
import { Container } from "./Container";
import thriveGlobal from "@/assets/thrive-global.png.asset.json";
import nbt from "@/assets/nbt.png.asset.json";
import newstrack from "@/assets/newstrack.png.asset.json";
import disrupt from "@/assets/disrupt.png.asset.json";
import midday from "@/assets/midday.png.asset.json";
import dailyhunt from "@/assets/dailyhunt.png.asset.json";

const logos = [
  { src: thriveGlobal.url, alt: "Thrive Global" },
  { src: nbt.url, alt: "Navbharat Times" },
  { src: newstrack.url, alt: "Newstrack" },
  { src: disrupt.url, alt: "Disrupt" },
  { src: midday.url, alt: "Mid-Day" },
  { src: dailyhunt.url, alt: "Dailyhunt" },
];

export function LogoMarquee() {
  const loop = [...logos, ...logos];

  return (
    <section className="relative w-full bg-background">
      <Container className="pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center rounded-full border border-foreground/15 bg-secondary/60 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/80">
            TRUSTED BY TEAMS THAT VALUE BETTER SYSTEMS
          </div>
        </motion.div>
      </Container>

      <div className="relative w-full overflow-hidden border-t border-b border-border py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-16 px-8">
          {loop.map((l, i) => (
            <div
              key={i}
              className="flex h-16 shrink-0 items-center justify-center"
            >
              <img
                src={l.src}
                alt={l.alt}
                className="max-h-12 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
