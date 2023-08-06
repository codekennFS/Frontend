/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1440px",
    },
    fontFamily: {
      brand: ["var(--font-main)"],
    },
    fontSize: {
      display: ["6.4rem", "7.2rem"],
      paragraph: ["1.6rem", "2.4rem"],
      xs: ["2rem", "2.8rem"],
      sm: ["2.4rem", "3.2rem"],
      md: ["3.2rem", "4rem"],
      lg: ["4rem", "4.8rem"],
      xl: ["4.8rem", "5.6rem"],
      "2xl": ["5.6rem", "6.4rem"],
      tiny: ["1.2rem", "2rem"],
      label: ["1.4rem", "2.2rem"],
    },
    spacing: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
      8: "56px",
      9: "64px",
    },
    boxShadow: {
      xs: "0px 2px 2px 2px rgba(51, 51, 51, 0.08)", // 2px
      sm: "0px 4px 6px 3px rgba(51, 51, 51, 0.1)", // 6px
      md: "0px 6px 10px 5px rgba(51, 51, 51, 0.1)", // 10px
      lg: "0px 10px 14px 8px rgba(51, 51, 51, 0.08)", // 14px
      xl: "0px 10px 18px 10px rgba(51, 51, 51, 0.08)", //16px
    },

    colors: {
      transparent: "transparent",
      white: "#FFF",
      black: "#000000",
      primary: {
        5: "#E7ECFE",
        10: "#CFD9FC",
        20: "#9FB3F9",
        30: "#6E8CF7",
        40: "#3267E3",
        50: "#1042F1",
        60: "#0B33C1",
        70: "#082691",
        80: "#061A60",
        90: "#041348",
        main: "#030D30",
      },

      neutral: {
        5: "#F1F2F3",
        10: "#E3E6E8",
        20: "#C8CDD0",
        30: "#ACB4B9",
        40: "#919BA1",
        50: "#75828A",
        60: "#69757C",
        70: "#525B61",
        80: "#3A4145",
        90: "#2F3437",
        main: "#232729",
      },

      success: {
        5: "#EBFEE7",
        10: "#D8FCCF",
        20: "#B1F99F",
        30: "#8AF76E",
        40: "#63F43E",
        50: "#3DF110",
        60: "#30C10B",
        70: "#249108",
        80: "#186006",
        90: "#124804",
        main: "#0C3003",
      },
      critical: {
        5: "#FEE7E7",
        10: "#FCCFCF",
        20: "#F99F9F",
        30: "#F76E6E",
        40: "#F43E3E",
        50: "#F11010",
        60: "#C10B0B",
        70: "#910808",
        80: "#600606",
        90: "#480404",
        main: "#0C3003",
      },
    },
    borderRadius: {
      none: 0,
      xs: "0.4rem", //6.4px
      sm: "0.75rem", //12px
      md: "1.5625rem", //25px
      full: "50%" // 50%
    },
    extend: {},
  },
  plugins: [],
};
