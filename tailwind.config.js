/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#092C4C",
        black: "# 000 ",
        white: "#fff",
        pink: "#fe8084",
        red: "#ff0000",
        yellow: "#ffc357",
        green: "#2dc8a8",
        blue: "#514ef3",
        grey90: "#526477",
        grey70: "#7e92a2",
        grey50: "#d6e1e6",
        grey30: "#eaeef4",
        grey10: "#f6fafd",
      },
    },
  },
  plugins: [],
};
