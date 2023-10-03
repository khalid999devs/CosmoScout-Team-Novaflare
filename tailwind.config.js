/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { main: '#E7EAF2' },
        primaryText: '#161010',
        secondaryText: '#9DA0AA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        optionSize: '1.2rem',
      },
    },
  },
  plugins: [],
};
