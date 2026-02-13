import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['var(--font-great-vibes)', 'cursive'],
        poetic: ['var(--font-playfair)', 'serif'],
        ui: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.6', filter: 'brightness(1)' },
          '100%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      backgroundImage: {
        'romantic-gradient': 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 25%, #4a1942 50%, #2d1b4e 75%, #1a0a2e 100%)',
      },
      colors: {
        'romantic-cream': '#fef7f4',
        'romantic-blush': '#fce4ec',
        'romantic-rose': '#f8bbd9',
        'romantic-dusty-pink': '#e8b4b8',
        'romantic-charcoal': '#5c4a5a',
        'romantic-lavender': '#e1d5e7',
        'romantic-mauve': '#c9a9d4',
        'romantic-peach': '#ffdab9',
      },
    },
  },
  plugins: [],
};

export default config;
