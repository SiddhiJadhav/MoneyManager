/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        60: '60rem',
        80: '80rem',
        90: '90rem',
      },
    },
  },
  plugins: [],
};
