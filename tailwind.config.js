/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
      },
    },
  },
  plugins: [],
}
