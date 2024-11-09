/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A11215",
        secondary: "#E3A314",
      },
      backgroundColor: {
        primary: "#A11215",
        secondary: "#E3A314",
      },
      borderColor: {
        primary: "#A11215",
        secondary: "#E3A314",
      }
    },
  },
  plugins: [],
};
