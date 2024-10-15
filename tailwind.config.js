/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        colorPrimaryBrown: "#78350F",
        colorPrimaryBlack: "#0F172A",
        colorCheck: "#15803D",
        colorCompany: "#475569",
        colorHeroShoeBg: "#FBBF24",
      },
      backgroundImage: {
        backlights: "url('/src/assets/ProductList/Backlights.png')",
      },
    },
  },
  plugins: [],
};
