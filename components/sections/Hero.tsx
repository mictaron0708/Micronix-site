"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 pt-10 sm:pt-14 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-3xl border p-6 sm:p-10 backdrop-blur-md"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold opacity-80">
              Micronix Studio • Writing • Web • Social • Design
            </div>

            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Prezență online care arată bine și vinde.
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Construim site-uri moderne, texte care convertesc, administrare social media și design promo.
              Totul coerent, rapid și optimizat pentru telefon.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("order")}
                className="rounded-2xl px-5 py-4 font-extrabold border"
                style={{
                  background: "var(--accent)",
                  color: "#0a0a0a",
                  borderColor: "rgba(255,255,255,0.18)",
                  boxShadow: "var(--shadow)",
                }}
              >
                Plasează o comandă
              </motion.button>

              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("packages")}
                className="rounded-2xl px-5 py-4 font-extrabold border"
                style={{
                  background: "transparent",
                  borderColor: "var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                Vezi pachetele
              </motion.button>
            </div>
          </div>

          <div className="rounded-3xl border p-5 sm:p-6 w-full lg:w-[360px]"
            style={{ background: "var(--card2)", borderColor: "var(--border)" }}
          >
            <div className="font-extrabold text-lg">Ce primești</div>
            <ul className="mt-3 space-y-2" style={{ color: "var(--muted)" }}>
              <li>• Design elegant + responsive</li>
              <li>• Performanță & structură modernă</li>
              <li>• Copy clar + secțiuni care convertesc</li>
              <li>• Admin & mentenanță (opțional)</li>
            </ul>

            <div className="mt-4 text-xs opacity-70">
              * Detaliile și prețurile le setăm după ce definim oferta.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}