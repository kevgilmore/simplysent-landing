/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#2e0553',
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      alatsi: ["ALATSI", "sans-serif"],
    }
  },
  plugins: [],
}

