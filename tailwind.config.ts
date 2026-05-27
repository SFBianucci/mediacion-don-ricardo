import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1a1a1d',
          secondary: '#252528',
          tertiary: '#2f2f33',
          accent: '#3a3a3f',
        },
        text: {
          primary: '#f5f5f7',
          secondary: '#a1a1a6',
          tertiary: '#6e6e73',
        },
        brand: {
          warm: '#d4a574',
          angry: '#e24b4a',
          calm: '#5dcaa5',
        },
        badge: {
          private: '#7a6dde',
          'private-client': '#3aa48e',
          joint: '#5dcaa5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1, 1.015)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.05)' },
        },
        steam: {
          '0%': { opacity: '0.7', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-30px) scale(1.4)' },
        },
        shakeSoft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1.5px)' },
          '75%': { transform: 'translateX(1.5px)' },
        },
        shakeStrong: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-3px)' },
          '40%': { transform: 'translateX(3px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.9)' },
          '50%': { opacity: '0.9', transform: 'scale(1.1)' },
        },
        sweatDrop: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '80%': { opacity: '1', transform: 'translateY(28px)' },
          '100%': { opacity: '0', transform: 'translateY(36px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
        sway: 'sway 7s ease-in-out infinite',
        steam: 'steam 2.6s ease-out infinite',
        'shake-soft': 'shakeSoft 0.6s ease-in-out infinite',
        'shake-strong': 'shakeStrong 0.4s ease-in-out infinite',
        'pulse-red': 'pulseRed 1.4s ease-in-out infinite',
        'sweat-drop': 'sweatDrop 2.4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
