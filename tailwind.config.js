/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5", // text secondary-100
          200: "#888883", //text secondary-200
        }
      }
    },
  },
  plugins: [],
}

