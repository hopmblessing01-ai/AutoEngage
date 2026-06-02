"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-scale"
  | "slide-up"
  | "slide-left"
  | "slide-right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  /** Scroll-in motion style */
  variant?: RevealVariant;
  /** Base length for transform; opacity is slightly shorter for a softer settle */
  durationMs?: number;
};

/** Smooth deceleration  -  comfortable for scroll-driven UI */
const EASE = "cubic-bezier(0.33, 1, 0.32, 1)";

const variantClasses: Record<
  RevealVariant,
  { hidden: string; visible: string }
> = {
  "fade-up": {
    hidden:
      "opacity-0 translate-y-6 motion-reduce:translate-y-0 motion-reduce:opacity-100",
    visible: "opacity-100 translate-y-0",
  },
  "fade-scale": {
    hidden:
      "opacity-0 translate-y-5 scale-[0.98] motion-reduce:scale-100 motion-reduce:translate-y-0 motion-reduce:opacity-100",
    visible: "opacity-100 translate-y-0 scale-100",
  },
  "slide-up": {
    hidden:
      "opacity-0 translate-y-10 motion-reduce:translate-y-0 motion-reduce:opacity-100",
    visible: "opacity-100 translate-y-0",
  },
  "slide-left": {
    hidden:
      "opacity-0 translate-x-8 motion-reduce:translate-x-0 motion-reduce:opacity-100",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    hidden:
      "opacity-0 -translate-x-8 motion-reduce:translate-x-0 motion-reduce:opacity-100",
    visible: "opacity-100 translate-x-0",
  },
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "fade-up",
  durationMs = 1050,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const v = variantClasses[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    const safeSetVisible = () => {
      if (!cancelled) setVisible(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => {
        safeSetVisible();
      });
      return () => {
        cancelled = true;
      };
    }

    const show = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          safeSetVisible();
        });
      });
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        show();
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px 26% 0px",
      },
    );
    obs.observe(el);
    return () => {
      cancelled = true;
      obs.disconnect();
    };
  }, []);

  const opacityMs = Math.round(Math.min(820, durationMs * 0.72));
  const transformMs = durationMs;
  const delayOpacity = visible ? delayMs : 0;
  /** Slight lead on opacity so motion feels less “mechanical” */
  const delayTransform = visible ? delayMs + 32 : 0;

  return (
    <div
      ref={ref}
      className={`transform-gpu backface-hidden will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 ${
        visible ? v.visible : v.hidden
      } ${className}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${opacityMs}ms, ${transformMs}ms`,
        transitionTimingFunction: `${EASE}, ${EASE}`,
        transitionDelay: `${delayOpacity}ms, ${delayTransform}ms`,
      }}
    >
      {children}
    </div>
  );
}
