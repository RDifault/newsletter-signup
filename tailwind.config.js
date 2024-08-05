/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tomato': "#ff6257",
        'cgrey': {
          50: "#9294a0",
          200: "#36384e",
          300: "#242742",
        },
      },
    },
  },
  plugins: [],
};
