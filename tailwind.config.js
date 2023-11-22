/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // This enables dark mode
  theme: {
    extend: {},
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  },
};

export default config;
