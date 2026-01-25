import type { Config } from "tailwindcss";

const config: Config = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}", // ✅ important
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
        require('@tailwindcss/line-clamp'),
  ],
};

export default config;
