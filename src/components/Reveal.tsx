"use client";

import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger index — each step adds ~60ms delay. */
  index?: number;
  /** Animation style. */
  variant?: "fade-up" | "fade-in" | "scale-in";
  /** Render as a different element (default div). */
  as?: ElementType;
  className?: string;
};

/**
 * Wraps content so it animates in on mount (and on route change, since
 * pages remount). Swift and subtle; honors prefers-reduced-motion via CSS.
 */
export default function Reveal({
  children,
  index = 0,
  variant = "fade-up",
  as: Tag = "div",
  className = "",
}: RevealProps) {
  return (
    <Tag
      className={`animate-${variant} stagger ${className}`}
      style={{ ["--i" as string]: index }}
    >
      {children}
    </Tag>
  );
}
