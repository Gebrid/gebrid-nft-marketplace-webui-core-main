/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        custom: {
          softViolet: "#b364e2",
          softBlue: "#57a5f8",
          darkGray: "#333333",
          mediumGray: "#949494",
          lightGray: "#c4c4c4",
          whiteSmoke: "#f5f5f5",
          pinkRed: "#f9364c",
        }
      }
    },
  },
  plugins: [],
}
