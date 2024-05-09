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
        gray: "#33363F",
      },
    },

    fontFamily: {
      "coco-gothic-regular": ["Coco Gothic Regular", "sans-serif"],
      "coco-gothic-bold": ["Coco Gothic Bold", "sans-serif"],
      "coco-gothic-italic": ["Coco Gothic Italic", "sans-serif"],
      "coco-gothic-light": ["Coco Gothic Light", "sans-serif"],

      inter: ["Inter", "sans-serif"],
    },

    animation: {
      shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    },

    keyframes: {
      shake: {
        "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
        "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
        "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
        "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
      },
    },
  },
  plugins: [],
};
