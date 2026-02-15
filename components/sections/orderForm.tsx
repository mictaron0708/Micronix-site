"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { useState } from "react";
import { motion } from "framer-motion";
import Order3DButton from "@/components/Order3DButton";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Comanda a fost trimisă (demo). Backend-ul îl conectăm ulterior.");
    setName("");
    setEmail("");
    setDesc("");
  };
  
  return (
    <SectionWrapper
      id="order"
      title="Trimite comanda"
      subtitle="Completează formularul. În faza 2 conectăm PostgreSQL/Prisma și trimiterea reală."
      from="left"
    >
      <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="sm:col-span-1">
          <label className="text-sm font-semibold opacity-90">Nume</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 outline-none"
            placeholder="Numele tău"
            required
          />
        </div>

        <div className="sm:col-span-1">
          <label className="text-sm font-semibold opacity-90">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 outline-none"
            placeholder="email@exemplu.com"
            type="email"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-semibold opacity-90">Descriere</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-2 w-full min-h-[140px] rounded-xl border border-white/10 bg-black/20 px-3 py-3 outline-none"
            placeholder="Ce ai nevoie? Site, social media, design, etc."
            required
          />
        </div>
<div className="sm:col-span-2">
  <Order3DButton />
</div>
      </form>
    </SectionWrapper>
  );
}