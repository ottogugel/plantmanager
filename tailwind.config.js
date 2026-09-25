const { colors } = require("./src/constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        green: colors.green,
        blue: colors.blue,
        gray: colors.gray,
        shape: colors.shape,
      },
    },
  },
  plugins: [],
};