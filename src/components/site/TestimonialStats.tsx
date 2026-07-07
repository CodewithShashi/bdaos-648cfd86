import { motion } from "framer-motion";
import { Container } from "./Container";

const cardBase =
  "relative overflow-hidden rounded-3xl bg-[#0a0a0a] text-white p-8 md:p-10";
const pill =
  "inline-flex items-center rounded-full bg-[#dcff6b] px-3 py-1 text-xs font-medium text-black";
const pillSoft =
  "inline-flex items-center rounded-full bg-[#e8f7d4] px-3 py-1 text-xs font-medium text-black";

export function TestimonialStats() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Testimonial */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`${cardBase} lg:col-span-2 min-h-[420px] flex flex-col justify-between`}
          >
            <span
              aria-hidden
              className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-[#dcff6b] shadow-[0_0_16px_4px_rgba(220,255,107,0.7)]"
            />
            <div>
              <span className={pill}>CEO's Words</span>
              <p className="mt-8 font-display text-2xl md:text-3xl lg:text-[2.1rem] leading-[1.25] tracking-[-0.01em] text-white">
                "Working with you was seamless from start to finish. The final
                design exceeded our expectations. Your attention to detail and
                ability to adapt was outstanding throughout the entire process."
              </p>
            </div>

            <div className="mt-10 flex items-end justify-between">
              <div>
                <div className="text-lg font-medium">Timofey Gr</div>
                <div className="text-sm text-white/60">Co Founder of Metrilo</div>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-[#dcff6b] text-black text-[11px] font-bold">
                  ◆
                </span>
                <span className="text-lg font-semibold tracking-tight">Setrex.</span>
              </div>
            </div>
          </motion.article>

          {/* Stat column */}
          <div className="grid gap-5">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={cardBase}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-display text-5xl md:text-6xl leading-none tracking-[-0.02em]">
                  15 <span className="align-top">+</span>
                </div>
                <span className={pillSoft}>Years of experience</span>
              </div>
              <p className="mt-8 text-sm md:text-base text-white/70 leading-relaxed">
                Delivering functional, timeless spaces with innovation, precision,
                and great design.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cardBase}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-display text-5xl md:text-6xl leading-none tracking-[-0.02em]">
                  98 <span className="align-top">%</span>
                </div>
                <span className={pillSoft}>Client satisfaction rate</span>
              </div>
              <p className="mt-8 text-sm md:text-base text-white/70 leading-relaxed">
                We pride ourselves on delivering excellence, reflected in the
                high satisfaction of every client.
              </p>
            </motion.article>
          </div>
        </div>
      </Container>
    </section>
  );
}
