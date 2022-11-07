/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto Slab",
      },
      screens: {
        "3xl": "1980px",
      },
      colors: {
        transparent: "rgba(0,0,0,0)",
        white: "#fff",
        darkPurple: "#1F1D2F",
        mediumPurple: "#282639",
        lightPurple: "#48465B",
        lightPink: "#B5B3CB",
      },
    },
  },

  plugins: [],
};
