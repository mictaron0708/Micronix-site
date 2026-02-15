"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  const links = [
    { label: "Instagram", icon: "📸", href: "https://instagram.com/" },
    { label: "Facebook", icon: "📘", href: "https://facebook.com/" },
    { label: "WhatsApp", icon: "💬", href: "https://wa.me/" },
  ];
  
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Scrie-ne direct pe platforma preferată."
      from="down"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {links.map((l) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={[
              "rounded-2xl border border-white/10 bg-black/20",
              "px-4 py-4",
              "font-extrabold",
              "flex items-center justify-center gap-3",
              "shadow-[0_18px_60px_rgba(0,0,0,0.28)]",
            ].join(" ")}
          >
            <span className="text-xl">{l.icon}</span>
            <span>{l.label}</span>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}