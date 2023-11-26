/** @type {import('tailwindcss').Config} */
// const config = {
module.exports = {
  purge: [],
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

// export default config;
