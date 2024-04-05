/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        yeseva: ['Yeseva One', 'cursive'],
        raleway: ["Raleway", "cursive"],
        aclonica: ["Aclonica", "cursive"],
      },
      colors: {
        gold: '#bf9410', // Define the custom gold color
        blue1: "#32506d",
        primary: "#0088ff",
        sea: "#4c8373",
        purple: "#7826e5",
        black: "#000000",
        green: "#85ba51",
        red: "#d41418",
        blue: "#2b159b"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
