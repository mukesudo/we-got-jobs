import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#2563eb", 600: "#1d4ed8", 700: "#1e40af" },
        accent: { DEFAULT: "#9333ea" }
      },
      borderRadius: { "2xl": "1.25rem" },
      boxShadow: { card: "0 10px 30px rgba(2,8,23,.06)" }
    }
  },
  plugins: []
};
export default config;
