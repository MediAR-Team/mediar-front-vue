/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textorange: '#ff9a69',
        bgblack: '#3e3e3e'
      }
    },
  },
  plugins: [],
}
