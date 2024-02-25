/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserat': ['montserat', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],

}

