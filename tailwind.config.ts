/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1e1e1e',
        secondary: '#9fcbbc',
        'beyd-primary': '#15C18D',
        'beyd-secondary': '#FFC700',
        'beyd-tertiary': '#9fcbbc',
        'beyd-dark': '#14142b',
        'beyd-green': '#54784c',
        'beyd-indigo': '#581c4c',
        'beyd-dark-blue': '#1c1c50',
        'beyd-black': '#1c1c1c',
        dark: '#0b0f1d',
        contrast: '#13182b',
        contrast_primary: '#1d2036',
        contrast_secondary: '#262945',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        modalEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        fadeInRight: 'fadeInRight 0.5s ease-out forwards',
        modalEnter: 'modalEnter 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};