/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,css,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        '85vh': '85vh',
        '25vh': '25vh',
      }
    },
  },
  plugins: [],
}