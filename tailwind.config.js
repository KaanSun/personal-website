/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'grey': '#242424',
    },
    // !!!
    // every time you change this file, you need to run: npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
    // !!!
  },
  plugins: [],
}

