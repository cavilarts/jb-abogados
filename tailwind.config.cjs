/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        display: [
          "Karma",
          "ui-sans-serif",
          " system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        body: [
          "Karma",
          "ui-sans-serif",
          " system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
    },
  },
  plugins: [],
};
