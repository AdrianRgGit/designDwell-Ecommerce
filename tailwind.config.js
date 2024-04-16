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
    fontFamily: {
      "coco-gothic-regular": ["Coco Gothic Regular", "sans-serif"],
      "coco-gothic-bold": ["Coco Gothic Bold", "sans-serif"],
      "coco-gothic-italic": ["Coco Gothic Italic", "sans-serif"],
      "coco-gothic-light": ["Coco Gothic Light", "sans-serif"],
    },
  },
  plugins: [],
};
