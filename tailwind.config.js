/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: '#34a853',
        text: '#F8F8F8',
        back: '#15191E',
        btn: '#34a853',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
