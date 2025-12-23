/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Lumon Labs gradient colors
        lumon: {
          light: '#86efac',
          mid: '#4ade80',
          primary: '#22c55e',
          deep: '#16a34a',
          dark: '#15803d',
        },
        // UI colors
        cream: '#faf9f7',
        ink: '#1a1a1a',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-slow': 'fadeIn 2s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'scale-in': 'scaleIn 1s ease-out forwards',
        'ring-draw': 'ringDraw 2s ease-out forwards',
        'ring-morph': 'ringMorph 1.5s ease-in-out forwards',
        'text-reveal': 'textReveal 1s ease-out forwards',
        'gradient-shift': 'gradientShift 15s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        ringDraw: {
          '0%': { strokeDashoffset: '440', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
        ringMorph: {
          '0%': { transform: 'scale(1) translateX(0)' },
          '100%': { transform: 'scale(0.35) translateX(-180px)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'lumon-gradient': 'linear-gradient(135deg, #3dd9c4 0%, #4de8d6 25%, #60e8b0 50%, #5fea5f 75%, #7aed4a 100%)',
        'lumon-radial': 'radial-gradient(ellipse at 30% 40%, rgba(77, 232, 214, 0.6) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(95, 234, 95, 0.5) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 60px rgba(77, 232, 214, 0.3)',
        'glow-lg': '0 0 120px rgba(77, 232, 214, 0.4)',
      },
    },
  },
  plugins: [],
};
