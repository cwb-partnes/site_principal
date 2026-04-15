"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
}

export default function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  const numericPart = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");
  const isFloat = value.includes(".");

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      const current = eased * numericPart;

      if (isFloat) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, numericPart, isFloat]);

  return (
    <span ref={ref} className="inline-flex" suppressHydrationWarning>
      <span suppressHydrationWarning>{display}{suffix}</span>
    </span>
  );
}
