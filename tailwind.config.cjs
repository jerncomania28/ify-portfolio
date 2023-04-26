/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    backgroundImage: {
      hero: "url('assets/background-hero.svg')",
    },
    extend: {
      colors: {
        header: "#1A1A1A",
        paragraph: "#333333",
        offwhite: "#F7F7F7",
        footer: "#1A1A1A",
        purple: "#6326E5",
        "footer-text": "#D7D7D7",
        card: "#ECECEC",
        "card-header-color": "#757575",
        "objective-list": "#E3E3E3",
      },
      fontFamily: {
        figtree: ["Figtree"],
        "source-pro": ["Source sans pro"],
        fraunces: ["Fraunces"],
      },
    },
  },
  plugins: [],
};
