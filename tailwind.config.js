module.exports = {
  content: ["./src/**/*.{astro,vue}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    colors: {
      primary: "#4C566A",
      blue: "#5E81AC",
      green: "#A3BE8C",
      yellow: "#EBCB8B",
      red: "#BF616A",
      white: "#ECEFF4",
    },
  },
  plugins: [require("./src/theme/index.component")],
};