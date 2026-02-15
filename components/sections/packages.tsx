"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const packs = [
  { name: "P1 Starter", price: "—", perks: ["1 pagină prezentare", "Setup basic", "Copy scurt"] },
  { name: "P2 Growth", price: "—", perks: ["Site multi-sections", "Optimizare", "Support"] },
  { name: "P3 Pro", price: "—", perks: ["Site complet", "Admin + mentenanță", "Design inclus"] },
  { name: "P4 Elite", price: "—", perks: ["Totul inclus", "Strategie", "Promo & scalare"] },
];

export default function Packages() {
  return (
    <SectionWrapper
      id="packages"
      title="Pachete"
      subtitle="Alege un pachet promoțional. Setăm prețurile și condițiile după."
      from="up"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {packs.map((p) => (
        <div
        key={p.name}
        className="premium-card p-4 flex flex-col"
        >
            <div className="font-extrabold">{p.name}</div>
            <div className="opacity-75 text-sm mt-1">Preț: {p.price}</div>

            <ul className="mt-3 space-y-1 text-sm opacity-85">
              {p.perks.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
            <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full rounded-xl px-4 py-3 font-bold border"
            style={{
    background: "var(--accent)",
    color: "#0a0a0a",
    borderColor: "var(--border)",
    boxShadow: "var(--shadow)"
  }}
>
  Cumpără
</motion.button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
} 