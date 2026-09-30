import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "Avenir",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 24px 80px -38px rgba(7, 26, 36, 0.30)",
        energy: "0 34px 110px -48px rgba(82, 215, 204, 0.48)"
      }
    }
  },
  plugins: []
};

export default config;
