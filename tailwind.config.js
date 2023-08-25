/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#252733",
      dark: "#363740",
      gray: {
        initial: "#DFE0EB",
        scale: "#9FA2B4",
        light: "#A4A6B3",
        lightest: "#F0F1F7",
        extraLight: "#FCFDFE",
        dayLight: "#C5C7CD",
        dark: "#252733",
        extraDark: "#4B506D",
      },
      white: "#FFFFFF",
      blue: "#3751FF",
      extralightBlue: "rgba(55, 81, 255, 0.04)",
      green: "#29CC97",
      lightBlue: "#DDE2FF",
      aqua: "#3369d0",
      overviewBg: "#F7F9FD",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
  },
  plugins: [],
};
