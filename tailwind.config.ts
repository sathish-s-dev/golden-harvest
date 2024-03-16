import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "var(--font-noto)",
      },
      colors: {
        accent: "#63B150",
        textMuted: "#687274",
        dark:"#1C1C1C"
      },
    },
  },
  plugins: [],
};
export default config;
