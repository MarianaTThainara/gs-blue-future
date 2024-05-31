/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {'under-the-sea': "url('/src/assets/img/sea_background_test_v1.jpg')", },
    },
  },
  plugins: [],
}

