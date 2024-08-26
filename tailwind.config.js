/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1D23",
        secondary: "#F5F5F5",
        accent: "#FFC67D",
      },
    },
    screens: {
      small: "300px",
      medium: "600px",
      large: "950px",
    },
  },
  plugins: [],
};
