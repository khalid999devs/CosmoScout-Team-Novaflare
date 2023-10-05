/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#E7EAF2',
          dashBoard: '#ACAEAD',
          dashText: '#656C73',
          darkDash: '#707070',
          lightDash: '#9b9b9b',
          borderDark: '#707070',
        },
        primaryText: '#161010',
        secondaryText: '#9DA0AA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'sans - serif'],
      },
      fontSize: {
        optionSize: '1.2rem',
      },

      glass: {
        primary:
          'bg-primary-main bg-opacity-60 backdrop-filter backdrop-blur-lg',
      },
    },
  },
  plugins: [],
};
