/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bitter: [
          "Bitter",
          "ui-sans-serif",
          " system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        karma: [
          "Karma",
          "ui-sans-serif",
          " system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [require("daisyui")],
};
