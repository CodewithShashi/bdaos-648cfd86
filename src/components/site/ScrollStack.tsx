import { useLayoutEffect, useRef, useCallback, type ReactNode } from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) => <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
};

type Transform = { translateY: number; scale: number; rotation: number; blur: number };

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const offsetsRef = useRef<number[]>([]);
  const endOffsetRef = useRef(0);
  const lastTransformsRef = useRef(new Map<number, Transform>());

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(String(value));
  }, []);

  // Measure layout positions once (and on resize) so per-frame work stays cheap
  // and never triggers layout thrashing (the cause of the scroll glitch).
  const measure = useCallback(() => {
    const scrollY = window.scrollY;
    offsetsRef.current = cardsRef.current.map((card) => {
      const prev = card.style.transform;
      card.style.transform = "none";
      const top = card.getBoundingClientRect().top + scrollY;
      card.style.transform = prev;
      return top;
    });
    const end = scrollerRef.current?.querySelector(".scroll-stack-end") as HTMLElement | null;
    endOffsetRef.current = end ? end.getBoundingClientRect().top + scrollY : 0;
  }, []);

  const smoothScrollRef = useRef<number | null>(null);

  const update = useCallback((scrollTop: number) => {
    const cards = cardsRef.current;
    if (!cards.length) return;


    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endOffsetRef.current;

    cards.forEach((card, i) => {
      const cardTop = offsetsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;

      const range = triggerEnd - triggerStart;
      const scaleProgress =
        range <= 0 ? (scrollTop >= triggerEnd ? 1 : 0) : Math.min(1, Math.max(0, (scrollTop - triggerStart) / range));

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jTriggerStart = (offsetsRef.current[j] ?? 0) - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const next: Transform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        Math.abs(last.translateY - next.translateY) > 0.05 ||
        Math.abs(last.scale - next.scale) > 0.001 ||
        Math.abs(last.rotation - next.rotation) > 0.1 ||
        Math.abs(last.blur - next.blur) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0, ${next.translateY}px, 0) scale(${next.scale}) rotate(${next.rotation}deg)`;
        card.style.filter = next.blur > 0 ? `blur(${next.blur}px)` : "";
        lastTransformsRef.current.set(i, next);
      }

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    baseScale,
    blurAmount,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ]);

  const onScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    rafRef.current = requestAnimationFrame(() => {
      tickingRef.current = false;
      update();
    });
  }, [update]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll(".scroll-stack-card")) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    // Touch browsers resize their visual viewport while the address bar moves,
    // which makes JS pinning jitter. Use native CSS sticky stacking there so the
    // cards still stack while scrolling without frame-by-frame transforms.
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    if (mq.matches) {
      cards.forEach((card) => {
        card.style.marginBottom = "";
        card.style.transform = "";
        card.style.filter = "";
        card.style.willChange = "auto";
      });
      return () => {
        cardsRef.current = [];
        transformsCache.clear();
      };
    }

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    let lastWidth = window.innerWidth;
    const onResize = () => {
      transformsCache.clear();
      measure();
      update();
    };
    const onWindowResize = () => {
      // Ignore height-only resizes (mobile browser chrome show/hide).
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      onResize();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onWindowResize);

    const ro = new ResizeObserver(onResize);
    ro.observe(scroller);

    // Images finishing load can shift offsets — re-measure shortly after mount.
    const t = window.setTimeout(onResize, 400);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onWindowResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      tickingRef.current = false;
    };
  }, [itemDistance, measure, onScroll, update]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
