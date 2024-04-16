/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FEFAF6",
        cream: "#EADBC8",
        gold: "#FFC94A",
        blue: "#102C57",
      },
    },
  },
  plugins: [],
};
