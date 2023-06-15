/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        brand: ["var(--font-inter)"],
        secondary: ["var(--font-roboto-mono)"],
      },
      colors: {
        brand: colors.gray["800"],
        "brand-light": colors.gray["700"],
        "brand-text": colors.gray["900"],
      },
    },
  },
  plugins: [],
};
