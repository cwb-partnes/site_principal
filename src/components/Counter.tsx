"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface CounterProps {
  value: string;
}

export default function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract numeric part and everything else
  const numericPart = parseFloat(value.replace(/[^\d.]/g, ""));
  const nonNumericPart = value.replace(/[\d.]/g, "");

  // Check if it's an integer or float
  const isFloat = value.includes(".");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isFloat) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericPart, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
      });
      return () => controls.stop();
    }
  }, [isInView, numericPart, count]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {nonNumericPart}
    </span>
  );
}
