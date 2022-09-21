/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{tsx, jsx, js, ts}",
    "./src/**/**/**/*.{tsx, jsx, js, ts}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray-100": "#1b1b1b",
        "custom-gray-200": "#2e2e2e",
      },
    },
  },
  plugins: [],
};
