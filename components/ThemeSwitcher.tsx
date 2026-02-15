"use client";

import { useState } from "react";
import { toggleTheme } from "@/lib/theme";

export default function ThemeSwitcher() {
  const [isOn, setIsOn] = useState(false);
  
  const handleClick = () => {
    const audio = new Audio("/sounds/switch.mp3");
    audio.play();
    
    setIsOn(!isOn);
    toggleTheme();
  };
  
  return (
    <div className="fixed top-20 right-5 z-50 flex items-center gap-4">

      <span className={`transition ${isOn ? "opacity-30" : "opacity-100"}`}>
        Dark
      </span>

      <div
        onClick={handleClick}
        className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-500 flex items-center justify-center
        ${isOn ? "bg-yellow-300 shadow-[0_0_40px_#ffd700]" : "bg-gray-700"}`}
      >
        💡
      </div>

      <span className={`transition ${isOn ? "opacity-100" : "opacity-30"}`}>
        White
      </span>

      <div className="ml-6 font-bold text-xl">
        Micronix {isOn ? "White" : "Dark"}
      </div>

    </div>
  );
}