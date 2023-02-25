/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    // fontFamily: {
    //   sans: ["Roboto", "Rubik"],
    //   heading: ["RubikBold"],
    // },
    extend: {
      colors: {
        primary: "#000000",
        yellow: "#E1AD01",
        black:  "#000000",
        red: {
          700: "#EC5863", //main red
          300: "#FBDEE0", //light red
        },
        blue: {
          700: "#39619B", //main blue
          300: "#DBE9FD", //light blue
          100: "#F8FAFF", //pale blu-ish gray; bg
        },
        gray: {
          900: "#555555", //gray for icon
          600: "#616161", //words
          200: "#F5F5F5", //dashboard search gray
        }

      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
  },
  plugins: [],
}
