import staava from "@/assets/clients/client-5-1.png";
import bluespace from "@/assets/clients/client-16.png";
import bharatIct from "@/assets/clients/client-24.png";
import ebcc from "@/assets/clients/client-26.png";
import naks from "@/assets/clients/client-3-1.png";
import tataDigital from "@/assets/clients/client-1.png";
import iferp from "@/assets/clients/client-17.png";
import pritikaMoney from "@/assets/clients/client-7.png";
import pinkBlue from "@/assets/clients/client-11.png";
import finanzaPersonel from "@/assets/clients/client-BDA-Client-Logo-new-1.png";

const logos = [
  { src: staava, alt: "Staava" },
  { src: bluespace, alt: "Bluespace Healthcare" },
  { src: bharatIct, alt: "Bharat ICT" },
  { src: ebcc, alt: "EBCC" },
  { src: naks, alt: "Naks & Associates" },
  { src: tataDigital, alt: "Tata Digital" },
  { src: iferp, alt: "IFERP" },
  { src: pritikaMoney, alt: "Pritika Money" },
  { src: pinkBlue, alt: "Pink & Blue Symbiotic Living" },
  { src: finanzaPersonel, alt: "Finanza Personel" },
];

type RowProps = {
  items: typeof logos;
  duration: number;
  reverse?: boolean;
  size: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-16 w-32 sm:h-20 sm:w-40",
  md: "h-20 w-40 sm:h-24 sm:w-52",
  lg: "h-24 w-44 sm:h-28 sm:w-60",
};

function LogoRow({ items, duration, reverse, size }: RowProps) {
  const track = [...items, ...items, ...items];
  return (
    <div className="flex w-max gap-4 sm:gap-6" style={{ animation: `${reverse ? "bda-logo-scroll-rev" : "bda-logo-scroll"} ${duration}s linear infinite` }}>
      {track.map((logo, i) => (
        <div
          key={`${logo.alt}-${i}`}
          className={`flex shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-5 shadow-soft ${sizeMap[size]}`}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="max-h-10 w-auto max-w-full object-contain opacity-70 sm:max-h-12"
          />
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const a = logos;
  const b = [...logos.slice(4), ...logos.slice(0, 4)];
  const c = [...logos.slice(7), ...logos.slice(0, 7)];

  return (
    <section className="relative isolate w-full overflow-hidden bg-card py-16 md:py-24">
      <style>{`
        @keyframes bda-logo-scroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-33.3333%,0,0); } }
        @keyframes bda-logo-scroll-rev { from { transform: translate3d(-33.3333%,0,0); } to { transform: translate3d(0,0,0); } }
        @media (prefers-reduced-motion: reduce) {
          .bda-logo-wall > div > div { animation: none !important; }
        }
      `}</style>

      <div className="bda-logo-wall flex flex-col gap-4 opacity-90 sm:gap-6">
        <div className="overflow-hidden">
          <LogoRow items={a} duration={46} size="sm" />
        </div>
        <div className="overflow-hidden">
          <LogoRow items={b} duration={58} reverse size="lg" />
        </div>
        <div className="overflow-hidden">
          <LogoRow items={c} duration={52} size="md" />
        </div>
      </div>

      {/* Centered headline overlay, Groww-style */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,var(--card)_35%,color-mix(in_oklab,var(--card)_85%,transparent)_55%,transparent_100%)]" />
        <p className="relative text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
          Our Clients
        </p>
        <h2 className="relative mt-3 max-w-3xl font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Trusted by teams that value better systems
        </h2>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-card to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-card to-transparent sm:w-28" />
    </section>
  );
}
