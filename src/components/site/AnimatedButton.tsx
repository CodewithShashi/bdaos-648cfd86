import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useRegionPrefix, regionHref } from "@/lib/region";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
};

export function AnimatedButton({
  children,
  variant = "primary",
  href,
  icon = true,
  className,
  onClick,
}: Props) {
  const isPrimary = variant === "primary";
  const prefix = useRegionPrefix();
  const resolvedHref = href ? regionHref(prefix, href) : undefined;

  const base =
    "group relative inline-flex items-center gap-3 rounded-full font-medium transition-colors duration-300 will-change-transform overflow-hidden";
  const sizing = icon ? "pl-6 pr-1.5 py-1.5 text-sm" : "px-6 py-3 text-sm";
  const styles = isPrimary
    ? "bg-primary text-primary-foreground shadow-glow hover:shadow-elevated"
    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border";

  const Tag: any = href ? motion.a : motion.button;

  return (
    <Tag
      href={resolvedHref}
      onClick={onClick}
      whileHover="hover"
      initial="rest"
      animate="rest"
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={cn(base, sizing, styles, className)}
    >
      {/* Scrolling text: two stacked labels, marquee upward on hover */}
      <span className="relative inline-block h-6 overflow-hidden align-middle">
        <motion.span
          variants={{
            rest: { y: "0%" },
            hover: { y: "-50%" },
          }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className="flex flex-col"
        >
          <span className="flex h-6 items-center whitespace-nowrap">{children}</span>
          <span className="flex h-6 items-center whitespace-nowrap">{children}</span>
        </motion.span>
      </span>

      {icon && (
        <span
          className={cn(
            "relative grid h-9 w-9 place-items-center rounded-full overflow-hidden",
            isPrimary ? "bg-white text-primary" : "bg-primary text-primary-foreground",
          )}
        >
          {/* outgoing arrow */}
          <motion.span
            variants={{
              rest: { x: 0, y: 0, opacity: 1 },
              hover: { x: 18, y: -18, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 grid place-items-center"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </motion.span>
          {/* incoming arrow from bottom-left */}
          <motion.span
            variants={{
              rest: { x: -18, y: 18, opacity: 0 },
              hover: { x: 0, y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1], delay: 0.05 }}
            className="absolute inset-0 grid place-items-center"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </motion.span>
        </span>
      )}
    </Tag>
  );
}
