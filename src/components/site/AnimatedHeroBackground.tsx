import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero background — horizontally-scrolling "curtain" of gradient stripes,
 * matching the aithor.framer.website hero. Each stripe fades from olive
 * #556b2f to the page background #f0f0f0; two tracks scroll in opposite
 * directions to create a soft shimmering effect.
 *
 * Respects `prefers-reduced-motion`: when enabled, the tracks render as a
 * static curtain (no animation) instead of scrolling.
 */
export function AnimatedHeroBackground() {
  const OLIVE = "#556b2f";
  const BG = "#f0f0f0";
  const prefersReducedMotion = useReducedMotion();

  // One stripe = a 70px-wide gradient block, placed every 58px so they overlap.
  const STRIPE_W = 70;
  const STRIPE_GAP = 58;
  const COUNT = 40; // enough to fill 2x viewport for a seamless loop

  const Track = ({
    duration,
    direction,
    opacity,
  }: {
    duration: number;
    direction: 1 | -1;
    opacity: number;
  }) => (
    <motion.ul
      className="absolute inset-y-0 left-0 flex list-none m-0 p-0"
      style={{
        width: STRIPE_GAP * COUNT * 2,
        opacity,
      }}
      animate={
        prefersReducedMotion
          ? { x: -STRIPE_GAP * (COUNT / 2) }
          : { x: direction === 1 ? [0, -STRIPE_GAP * COUNT] : [-STRIPE_GAP * COUNT, 0] }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration, repeat: Infinity, ease: "linear" }
      }
    >
      {Array.from({ length: COUNT * 2 }).map((_, i) => (
        <li
          key={i}
          className="relative shrink-0 h-full"
          style={{ width: STRIPE_GAP }}
        >
          <div
            className="absolute inset-y-0"
            style={{
              left: 0,
              width: STRIPE_W,
              background: `linear-gradient(90deg, ${OLIVE}55 0%, ${BG} 100%)`,
            }}
          />
        </li>
      ))}
    </motion.ul>
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* Two overlapping marquee tracks, opposite directions */}
      <Track duration={40} direction={1} opacity={0.9} />
      <Track duration={68} direction={-1} opacity={0.55} />

      {/* Central soft highlight for hero-text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 42%, ${BG}aa, transparent 80%)`,
        }}
      />

      {/* Bottom fade blends into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />
    </div>
  );
}
