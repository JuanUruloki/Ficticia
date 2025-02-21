/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header:['Bebas Neue Light', 'sans-serif' ],
        body: ['Microsoft PhagsPa', 'sans-serif'],
        titles:['Microsoft PhagsPa Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
};