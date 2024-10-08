/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height:{
        "200":"200px"
      },
      width:{
        "400":"400px"
      }
    },
  },
  plugins: [],
}

