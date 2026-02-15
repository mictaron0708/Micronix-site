"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import Review3DButton from "@/components/Review3DButton";

const demoReviews = [
  { name: "Client A", text: "Super rapid, comunicare excelentă." },
  { name: "Client B", text: "Design curat, site-ul merge perfect pe telefon." },
];

export default function Reviews() {
  const [review, setReview] = useState("");

  const submit = () => {
    alert("Recenzia a fost trimisă (demo). În faza 2 o salvăm în DB.");
    setReview("");
  };

  return (
    <SectionWrapper
      id="reviews"
      title="Recenzii"
      subtitle="Feedback real (acum demo). Vom conecta stocare + afișare din DB."
      from="right"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Lista recenzii */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="font-bold text-lg">Recenzii</div>
          <div className="mt-3 space-y-3">
            {demoReviews.map((r) => (
              <div key={r.name} className="rounded-xl border border-white/10 bg-black/20 p-3">
                <div className="font-semibold">{r.name}</div>
                <div className="opacity-80 text-sm mt-1">{r.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lasă recenzie */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="font-bold text-lg">Lasă-ne o recenzie</div>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mt-3 w-full min-h-[140px] rounded-xl border border-white/10 bg-black/20 px-3 py-3 outline-none"
            placeholder="Scrie recenzia ta..."
          />
          
<Review3DButton
  label="Trimite recenzia"
  onClick={submit}
/>
        </div>
      </div>
    </SectionWrapper>
  );
}