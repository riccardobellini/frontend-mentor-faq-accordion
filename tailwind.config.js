/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: 'hsl(275, 100%, 97%)',
        grayishpurple: 'hsl(292, 16%, 49%)',
        darkpurple: 'hsl(292, 42%, 14%)',
        fuchsia: '#a234d3'
      }
    },
  },
  plugins: [],
}

