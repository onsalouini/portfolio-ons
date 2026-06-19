 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose:     { soft: "#F9E8E8", medium: "#E8A0A0", dark: "#C96B6B" },
        mauve:    { light: "#EDE0F5", DEFAULT: "#9B72CF" },
        cream:    "#FDF8F5",
        charcoal: "#2D2D2D",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body:    ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};