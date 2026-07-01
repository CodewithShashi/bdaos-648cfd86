import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-glow hover:shadow-elevated"
      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border";

  const Tag: any = href ? motion.a : motion.button;
  return (
    <Tag
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(base, styles, className)}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Tag>
  );
}
