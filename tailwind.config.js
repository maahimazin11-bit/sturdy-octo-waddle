/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: '#0891b2',
        coral: '#e05c3a',
        warmwhite: '#fafaf8',
        oceannavy: '#0c2340',
        'turquoise-light': '#e0f2f7',
        'turquoise-dark': '#067093',
        'coral-light': '#fdf0ec',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
