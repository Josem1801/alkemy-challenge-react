module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        size: "height, overflow",
      },
      colors: {
        primary: "#EA7C69",
        black: "#252836",
        light: "#ABBBC2",
        dark: "#1F1D2B",
        shadow: "rgba(234, 124,105, 0.32)",
      },
    },
  },
  plugins: [],
};
