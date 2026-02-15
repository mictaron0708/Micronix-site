import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0a",
        lightBg: "#f4f4f2"
      }
    }
  },
  plugins: [],
};

export default config;