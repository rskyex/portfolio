import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#0a0e2a',
          900: '#111642',
          800: '#1a2056',
          700: '#252d6e',
          600: '#3040a0',
        },
        washi: '#f7f3eb',
        'washi-dark': '#efe9dd',
        ivory: '#faf8f2',
        parchment: '#f0ead6',
        gold: {
          light: '#d4af37',
          DEFAULT: '#c5a028',
          dark: '#a88620',
          pale: '#e8d48b',
          muted: '#bfa94e',
        },
        vermillion: {
          DEFAULT: '#c53d2f',
          dark: '#a02e22',
          muted: '#b84a3e',
        },
        ink: '#1a1412',
        'ink-light': '#3d3430',
        'warm-brown': '#6b5c52',
        'warm-gray': '#8a7d74',
      },
      fontFamily: {
        kaisei: ['"Kaisei Decol"', 'serif'],
        'noto-serif': ['"Noto Serif JP"', 'serif'],
        'noto-sans': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
