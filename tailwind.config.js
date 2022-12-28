/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
       colors: {
        'brand-color': '#5d3ebc',
      },
    },
  },
  plugins: [],
};
