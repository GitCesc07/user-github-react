/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo 2", "sans-serif"],
        signika: ["Signika Negative", "sans-serif"]
      }
    },
  },
  plugins: [],
}