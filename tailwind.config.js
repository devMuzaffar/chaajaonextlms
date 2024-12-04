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
        contentbg: "#F1F4FB",
        primary: "#A11215",
        secondary: "#E3A314",
      },
      backgroundImage: {
        sidebar: "linear-gradient(to bottom, #A11215, #740709)",
      },
      borderColor: {
        primary: "#A11215",
        secondary: "#E3A314",
      },
      boxShadow: {
        headerbutton: "2px 2px 8px 0px rgba(31, 38, 71, 0.08)",
      }
    },
  },
  plugins: [],
};