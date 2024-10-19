/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    colors: {
      black: "#0f0f0f",
      white: "#f0f0f0",
      blue: "#2980b9",
      red: "#e74c3c",
      green: "#27ae60",
      purple: "#8e44ad",
      yellow: "#f1c40f",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
