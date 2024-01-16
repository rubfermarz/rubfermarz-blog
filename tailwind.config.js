/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navbar-transparent': 'rgba(114,114,114,.2)',
        'navbar-gray': '#404040b5 !important',
        'rfm-black': '#4a4c4d',
        'rfm-white': '#fffdff',
        'rfm-ochre': '#f0cba8',
        'rfm-red': '#da5a51',
      },
    },
  },
  plugins: [],
};
