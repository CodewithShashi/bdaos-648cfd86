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
    <section className="relative border-y border-border bg-white py-10">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams at leading companies
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={i}
                className="flex h-16 min-w-[220px] items-center justify-center rounded-xl border border-border/70 bg-white px-8"
              >
                <span className="text-2xl font-semibold tracking-tight text-muted-foreground/70">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
