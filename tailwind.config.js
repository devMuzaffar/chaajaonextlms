/** @type {import('tailwindcss').Config} */
const primary = "#02A6E5";
const secondary = "#F29F05";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: primary,
        secondary: secondary,
      },
      backgroundColor: {
        contentbg: "#F1F4FB",
        primary: primary,
        secondary: secondary,
      },
      backgroundImage: {
        sidebar: "linear-gradient(to bottom, #038BB5, #026C8E)",
      },
      borderColor: {
        primary: primary,
        secondary: secondary,
      },
      boxShadow: {
        headerbutton: "2px 2px 8px 0px rgba(31, 38, 71, 0.08)",
      },
      screens: {
        xs: "376px",
        xxs: "321px",
      },
      gridTemplateColumns: {
        'auto-200': "repeat(auto-fit, minmax(200px, 1fr))",
        'auto-100': "repeat(auto-fit, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};

// Default sidebar - linear-gradient(to bottom, #A11215, #740709)

// Primary Red - #A11215
// Primary Blue - #02A6E5

// Secondary Yellow - #E3A314
// Secondary  - #F29F05