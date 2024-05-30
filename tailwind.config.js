/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Azul: "#0267C1",
        Beige: "#E5D2B0",
        Amarillo: "#EFA00B",
        Naranja: "#D65108",
      },
    },
  },
  plugins: [],
};
