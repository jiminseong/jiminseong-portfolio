import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1b1b1b",
        gray: "#8d8d8d",
      },
      boxShadow: {
        DEFAULT: "0px 4px 20px rgba(27, 27, 27, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
