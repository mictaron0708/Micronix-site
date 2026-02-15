"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  label ? : string;
  onClick ? : () => void;
  disabled ? : boolean;
};

export default function Order3DButton({
  label = "Plasează comanda",
  onClick,
  disabled,
}: Props) {
  const btnRef = useRef < HTMLButtonElement | null > (null);
  const [anim, setAnim] = useState(false);
  
  // parallax on pointer move (desktop) + touch-friendly fallback
  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    
    const handleMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height; // 0..1
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

  const audio = new Audio("/sounds/order.mp3");
  audio.volume = 0.6;
  audio.play().catch(() => {});

  setAnim(true);
  window.setTimeout(() => setAnim(false), 1450);
};  
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
        anim ? "order-anim" : "",
      ].join(" ")}
    >
      <div className="btn-3d-layer">
        <div className="order-scene">
          {/* BOX */}
          <div className="order-box">
            <div className="shadow" />
            <div className="face front" />
            <div className="face top" />
            <div className="face side" />
          </div>

          {/* PLANE */}
          <div className="order-plane">
            <div className="trail" />
            <div className="wing" />
            <div className="body" />
            <div className="tail" />
          </div>
        </div>
      </div>

      <div className="btn-3d-label">
        <span>📦</span>
        <span>{label}</span>
        <span className="opacity-80">✈️</span>
      </div>
    </motion.button>
  );
}