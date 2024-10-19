/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    colors: {
      black: {
        DEFAULT: "#0f0f0f",
        100: "#2c2c2c",
        200: "#000000",
        background: "#0a0f10",
        menu: "#131340", 
      },
      white: {
        DEFAULT: "#ffebcc",
        100: "#e0e0e0",
        200: "#d0d0d0",
        300: "#f0f0f0"
      },
      blue: {
        DEFAULT: "#2980b9",
        100: "#85c1e9",
        200: "#1f6393",
      },
      red: {
        DEFAULT: "#e74c3c",
        100: "#f1948a",
        200: "#c0392b",
      },
      green: {
        DEFAULT: "#27ae60",
        100: "#a3d7a0",
        200: "#219150",
      },
      purple: {
        DEFAULT: "#8e44ad",
        100: "#d7bde2",
        200: "#732d91",
      },
      yellow: {
        DEFAULT: "#f1c40f",
        100: "#f9e79f",
        200: "#d4ac0d",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
