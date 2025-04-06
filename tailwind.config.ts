import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#85418A',
        lightBg: 'var(--light-bg)',
        lightText: 'var(--light-text)',
        darkBg: 'var(--dark-bg)',
        darkText: 'var(--dark-text)',
      },
    },
  },
  plugins: [],
};
export default config;
