import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#b7122a',
        'primary-dark': '#92001c',
        'primary-light': '#ffdad8',
        surface:   '#fbf9f8',
        'surface-container': '#efeded',
        'surface-high': '#e9e8e7',
        'on-surface': '#1b1c1c',
        secondary: '#5f5e5e',
        outline:   '#e4bebc',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(183,18,42,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(183,18,42,0.5)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fade-up':  'fade-up 0.4s ease both',
        glow:       'glow 2s infinite ease-in-out',
        'spin-slow': 'spin-slow 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
