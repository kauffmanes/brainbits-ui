const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#ffffff',
  primary: '#16a34a',
  secondary: '#fdba74',
  accent: '#16a34a',
  neutral: '#3D4451',
  'base-100': '#FFFFFF',
  info: '#3ABFF8',
  success: '#16a34a',
  warning: '#facc15',
  error: '#f87171'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
