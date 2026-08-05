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

export function LogoMarquee() {
  const track = [...logos, ...logos, ...logos];

  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-16 md:py-24">
      <style>{`
        @keyframes bda-marquee {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-33.3333%,0,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bda-marquee-track { animation: none !important; }
        }
      `}</style>

      <div className="container-custom mb-10 text-center md:mb-12">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Our Clients
        </p>
        <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Trusted by teams that value better systems
        </h2>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="bda-marquee-track flex w-max items-center gap-6 md:gap-10"
            style={{ animation: "bda-marquee 48s linear infinite" }}
          >
            {track.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-sm md:h-24 md:w-56"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-10 w-auto max-w-full object-contain opacity-75 md:max-h-12"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-28" />
      </div>
    </section>
  );
}
