import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
