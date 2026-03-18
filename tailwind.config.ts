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
          950: '#070b1e',
          900: '#0d1233',
          800: '#151d4a',
          700: '#1f2a62',
          600: '#2c3a8a',
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
        // Tsubaki palette
        tsubaki: {
          petal: '#e8c4c0',
          blush: '#d4918a',
          core: '#c53d2f',
          leaf: '#2d4a3e',
          stamen: '#d4af37',
        },
        lacquer: {
          black: '#0a0a12',
          deep: '#12101e',
        },
        porcelain: '#f0ece5',
      },
      fontFamily: {
        kaisei: ['"Kaisei Decol"', 'serif'],
        'noto-serif': ['"Noto Serif JP"', 'serif'],
        'noto-sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'lacquer': '0 2px 20px rgba(10, 10, 18, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.05)',
        'lacquer-hover': '0 8px 32px rgba(10, 10, 18, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.08)',
        'petal': '0 4px 16px rgba(197, 61, 47, 0.08), 0 1px 4px rgba(0,0,0,0.1)',
        'petal-hover': '0 8px 28px rgba(197, 61, 47, 0.12), 0 2px 8px rgba(0,0,0,0.15)',
        'porcelain': '0 1px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glass': '0 4px 24px rgba(10, 14, 42, 0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'tsubaki-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(197,61,47,0.06) 0%, transparent 70%)',
        'lacquer-sheen': 'linear-gradient(135deg, rgba(212,175,55,0.03) 0%, transparent 40%, rgba(197,61,47,0.02) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
