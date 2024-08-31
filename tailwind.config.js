/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/one.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontFamily: {
        Inter : ['Inter'],
      }
    },
  },
  plugins: [],
}

