/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Make sure this is set
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#A3E636",
          accent: "#88cc19", // if you still want to keep mainAccent
        },
        overlay: "rgba(0,0,0,0.8)",
        // Base colors that will switch between modes
        bg: {
          DEFAULT: "#E0E7F1", // light mode
          dark: "#2c312b", // dark mode
        },
        text: {
          DEFAULT: "#000", // light mode
          dark: "#eeefe9", // dark mode
        },
        border: {
          DEFAULT: "#000", // light mode
          dark: "#E0E7F1", // dark mode
        },
        secondary: {
          DEFAULT: "#ffffff", // light mode
          dark: "#212121", // dark mode (your secondaryBlack)
        },
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        DEFAULT: "6px 6px 0px 0px #000", // works for both light and dark since shadow color is same
        light: "6px 6px 0px 0px #000",
        dark: "6px 6px 0px 0px #000",
      },
      translate: {
        boxShadowX: "6px",
        boxShadowY: "6px",
        reverseBoxShadowX: "-6px",
        reverseBoxShadowY: "-6px",
      },
      fontWeight: {
        base: "400",
        heading: "900",
      },
    },
  },
  plugins: [],
};
