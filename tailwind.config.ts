import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111d",
        midnight: "#0d1b2a",
        slate: "#132238",
        field: "#17803d",
        olive: "#6c7100",
        oliveDark: "#4c5200",
        cream: "#f3efe4",
        highlight: "#f5b700",
        ice: "#dce7f5"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 80px rgba(0, 0, 0, 0.28)",
        poster: "0 18px 50px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        turf:
          "radial-gradient(circle at top, rgba(23, 128, 61, 0.18), transparent 36%), linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0))",
        poster:
          "linear-gradient(110deg, rgba(76, 82, 0, 0.96) 0%, rgba(108, 113, 0, 0.96) 64%, rgba(108, 113, 0, 0.84) 64%, rgba(108, 113, 0, 0.84) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
