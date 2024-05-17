/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ['responsive'], // Add this line
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

