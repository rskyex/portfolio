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
        // Kinkaku-ji night palette
        kuro: {
          DEFAULT: '#050508',
          soft: '#0a0b12',
          panel: '#0e0f1a',
        },
        // Rich gold — Kinkaku-ji gold leaf
        kin: {
          pale: '#f5e6a3',
          light: '#e8c84a',
          DEFAULT: '#d4a017',
          deep: '#b8860b',
          dark: '#8b6914',
          glow: '#ffd700',
        },
        // Vermillion — torii / lacquer
        shu: {
          light: '#ff6b5a',
          DEFAULT: '#e03c31',
          deep: '#c0291e',
          dark: '#8b1a10',
        },
        // Tsubaki petal tones
        tsubaki: {
          white: '#fce4ec',
          blush: '#f48fb1',
          rose: '#e91e63',
          deep: '#c2185b',
        },
        // Washi / porcelain whites
        shiro: {
          DEFAULT: '#f5f0e8',
          warm: '#ede6d8',
          cool: '#eceef2',
        },
        // Neon accents
        neon: {
          gold: 'rgba(255, 215, 0, 0.9)',
          rose: 'rgba(233, 30, 99, 0.8)',
          blue: 'rgba(100, 149, 237, 0.6)',
        },
        // Legacy compat
        washi: '#f5f0e8',
        parchment: '#f5f0e8',
        ink: '#f5f0e8',
        'ink-light': '#c0b8a8',
        'warm-brown': '#b0a898',
        'warm-gray': '#8a8278',
        gold: {
          light: '#e8c84a',
          DEFAULT: '#d4a017',
          dark: '#b8860b',
          pale: '#f5e6a3',
          muted: '#bfa94e',
        },
        vermillion: {
          DEFAULT: '#e03c31',
          dark: '#c0291e',
          muted: '#b84a3e',
        },
        indigo: {
          950: '#050508',
          900: '#0a0b12',
          800: '#0e0f1a',
          700: '#1a1b2e',
          600: '#2a2b4a',
        },
        ivory: '#f5f0e8',
        'washi-dark': '#ede6d8',
        'gold-light': '#e8c84a',
      },
      fontFamily: {
        // Japanese fallbacks are appended so CJK glyphs render in Noto JP.
        // Latin glyphs still resolve to the primary face first, so the English
        // pages are visually unchanged.
        cormorant: ['"Cormorant Garamond"', '"Noto Serif JP"', 'serif'],
        inter: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        kaisei: ['"Kaisei Decol"', 'serif'],
        'noto-serif': ['"Noto Serif JP"', 'serif'],
        'noto-sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 160, 23, 0.15), 0 0 60px rgba(212, 160, 23, 0.05)',
        'glow-gold-lg': '0 0 40px rgba(212, 160, 23, 0.2), 0 0 80px rgba(212, 160, 23, 0.08)',
        'glow-shu': '0 0 20px rgba(224, 60, 49, 0.12), 0 0 60px rgba(224, 60, 49, 0.04)',
        'glow-tsubaki': '0 0 30px rgba(233, 30, 99, 0.1), 0 0 80px rgba(233, 30, 99, 0.04)',
        'panel': '0 4px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,160,23,0.04)',
        'panel-hover': '0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,160,23,0.08)',
        'panel-elevated': '0 12px 48px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212,160,23,0.06), 0 0 30px rgba(212,160,23,0.04)',
      },
      animation: {
        'tsubaki-spin': 'tsubakiSpin 60s linear infinite',
        'tsubaki-pulse': 'tsubakiPulse 8s ease-in-out infinite',
        'float': 'float 12s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        tsubakiSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        tsubakiPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
