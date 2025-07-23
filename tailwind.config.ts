import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: "#00ffff", // Cyan
          secondary: "#00ff00", // Green
          accent: "#ff00ff", // Magenta
          dark: "#0a0a0a",
          darker: "#050505",
          gray: "#1a1a1a",
          border: "#333333",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        terminal: ["Share Tech Mono", "monospace"],
      },
      animation: {
        "pulse-cyber": "pulse-cyber 2s ease-in-out infinite",
        glow: "glow 1.5s ease-in-out infinite alternate",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        "pulse-cyber": {
          "0%, 100%": {
            boxShadow: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff",
          },
          "50%": {
            boxShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
          },
        },
        glow: {
          "0%": { textShadow: "0 0 5px #00ffff" },
          "100%": { textShadow: "0 0 20px #00ffff, 0 0 30px #00ffff" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
