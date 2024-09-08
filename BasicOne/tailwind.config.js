const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/one.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        Inter: ["Inter"],
      },
      colors: {
        hihi: "#bada55",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        sliders: 'slide 3s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%, 100%': {
            transform: 'translateX(-100px)',
          },
          '50%': {
            transform: 'translateX(100px)',
          },
        },
      },
    },
  },
  plugins: [],
};
