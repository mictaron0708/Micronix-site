"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  id ? : string;
  title ? : string;
  subtitle ? : string;
  children: React.ReactNode;
  from ? : "left" | "right" | "up" | "down";
};

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  from = "up",
}: Props) {
  const ref = useRef < HTMLDivElement | null > (null);
  const isInView = useInView(ref, { margin: "-80px", once: true });
  
  const offset = 32;
  const start = {
    opacity: 0,
    x: from === "left" ? -offset : from === "right" ? offset : 0,
    y: from === "up" ? -offset : from === "down" ? offset : 0,
    filter: "blur(6px)",
  };
  
  const end = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
  };
  
  return (
    <section id={id} className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:py-16">
<motion.div
  ref={ref}
  initial={start}
  animate={isInView ? end : start}
  transition={{ duration: 0.65, ease: "easeOut" }}
  className="rounded-3xl border p-5 sm:p-8 backdrop-blur-md"
  style={{
    background: "var(--card)",
    borderColor: "var(--border)",
    boxShadow: "var(--shadow)"
  }}
>        {(title || subtitle) && (
          <div className="mb-5">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 opacity-80 leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}

        {children}
      </motion.div>
    </section>
  );
}