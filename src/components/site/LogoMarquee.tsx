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
  // Duplicate the list so the translateX loop is seamless.
  const track = [...logos, ...logos];

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

      <div
        className="relative w-full overflow-hidden border-t border-b border-border"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex h-28 w-[220px] shrink-0 items-center justify-center px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
