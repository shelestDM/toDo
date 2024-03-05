/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow_appear': 'slow_appear 1s linear forwards',
      },
      keyframes: {
        slow_appear: {
          '0%': { opacity: '0' },
          '1000%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}