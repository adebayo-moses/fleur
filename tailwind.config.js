/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // This enables dark mode
  theme: {
    extend: {},
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  },
};

export default config;
