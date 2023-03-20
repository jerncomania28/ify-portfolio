/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        header: "#1A1A1A",
        paragraph: "#333333",
        offwhite: "#F7F7F7",
        footer: "#1A1A1A",
        purple: "#6326E5",
      },
      fontFamily: {
        figtree: ["Figtree"],
        'source-pro': ['Source sans pro'],
      },
    },
  },
  plugins: [],
};
