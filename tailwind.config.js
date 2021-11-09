module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        maxcontent: "max-content",
      },
      width: {
        maxcontent: "max-content",
        maxwidth: "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
