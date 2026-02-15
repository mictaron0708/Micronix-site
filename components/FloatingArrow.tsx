"use client";

import { useEffect, useState } from "react";

export default function FloatingArrow() {
  const [y, setY] = useState(0);
  
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div
      style={{ transform: `translateY(${y * 0.2}px)` }}
      className="fixed left-2 top-1/2 text-3xl z-50"
    >
      ➤
    </div>
  );
}