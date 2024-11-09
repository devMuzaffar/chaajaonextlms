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
      },
      backgroundColor: {
        primary: "#A11215",
      },
      borderColor: {
        primary: "#A11215",
      }
    },
  },
  plugins: [],
};
