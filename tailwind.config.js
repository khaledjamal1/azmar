/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: '#8758FF',
        text: '#8758FF',
        back: '#16213E',
        btn: '#5CB8E4',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
