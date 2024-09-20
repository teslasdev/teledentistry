/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Akshar: ["Akshar", "sans-serif"],
      },
      colors: {
        customBlue: '#1095D1',
        customGreen: {
          light: '#B1CF83',
          DEFAULT: '#72AB1E',
          dark: '#047857',
        },
        customPrimaryWhite: "#ffffff",
      },

    }, screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '925px',
      // => @media (min-width: 925px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

