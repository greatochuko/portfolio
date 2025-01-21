import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#e6e6e6",
        muted: "#1a1a1a",
        "accent-gray": "#999",
        "accent-green-100": "#4de6a6",
        "accent-green-200": "#062d1d",
      },
    },
  },
  plugins: [],
} satisfies Config;
