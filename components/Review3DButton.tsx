"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  label ? : string;
  onClick ? : () => void;
  disabled ? : boolean;
};

export default function Review3DButton({
  label = "Trimite recenzia",
  onClick,
  disabled,
}: Props) {
  const btnRef = useRef < HTMLButtonElement | null > (null);
  const [anim, setAnim] = useState(false);
  
  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    
    const handleMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * 10;
      const ry = (px - 0.5) * 12;
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    
    const handleLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    
    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, []);
  
const fire = () => {
  if (disabled) return;

  const audio = new Audio("/sounds/review.mp3");
  audio.volume = 0.7;
  audio.play().catch(() => {});

  setAnim(true);
  onClick?.();
  window.setTimeout(() => setAnim(false), 1150);
};  
  // 10 particule cu direcții presetate (stabile, fără random => consistent pe mobil)
  const particles = [
    { dx: "-60px", dy: "-30px" },
    { dx: "-20px", dy: "-52px" },
    { dx: "22px", dy: "-56px" },
    { dx: "62px", dy: "-28px" },
    { dx: "-72px", dy: "6px" },
    { dx: "78px", dy: "8px" },
    { dx: "-50px", dy: "44px" },
    { dx: "-6px", dy: "60px" },
    { dx: "36px", dy: "54px" },
    { dx: "70px", dy: "36px" },
  ];
  
  return (
    <motion.button
      ref={btnRef}
      type="button"
      disabled={disabled}
      whileTap={{ scale: 0.985 }}
      onClick={fire}
      className={[
        "btn-3d",
        "select-none",
        "text-base sm:text-lg",
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        anim ? "review-anim" : "",
      ].join(" ")}
    >
      <div className="btn-3d-layer">
        {/* STAR */}
        <div className="review-star">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2.2l2.9 6.1 6.7.9-4.9 4.7 1.2 6.7L12 17.8 6.1 20.6l1.2-6.7-4.9-4.7 6.7-.9L12 2.2z"
              fill="rgba(255,255,255,0.25)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* PARTICLES */}
        <div className="particles">
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={
                {
                  ["--dx" as any]: p.dx,
                  ["--dy" as any]: p.dy,
                } as React.CSSProperties
              }
            >
              <span style={{ fontSize: 14, opacity: 0.95 }}>✨</span>
            </div>
          ))}
        </div>
      </div>

      <div className="btn-3d-label">
        <span>⭐</span>
        <span>{label}</span>
      </div>
    </motion.button>
  );
}