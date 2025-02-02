/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: { main: "#48b5ac" },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
