"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ReversibleScrollSwingProps {
  children: React.ReactNode;
  index?: number;
  total?: number;
  className?: string;
}

export function ReversibleScrollSwing({
  children,
  index = 0,
  total = 4,
  className = "",
}: ReversibleScrollSwingProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  // Staggered offset triggers so items swing smoothly on scroll down (0 -> N)
  // and reverse smoothly on scroll up (N -> 0)
  const startOffset = Math.max(72, 95 - index * 3.5);
  const endOffset = Math.max(48, 68 - index * 3.5);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset}%`, `start ${endOffset}%`],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [-48, 0]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-7.5, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const springConfig = {
    stiffness: 220,
    damping: 22,
    mass: 0.85,
  };

  const x = useSpring(rawX, springConfig);
  const rotate = useSpring(rawRotate, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        rotate,
        opacity,
        transformOrigin: "top left",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
