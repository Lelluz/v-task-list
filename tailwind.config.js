/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dandelion': {
          '50': '#fffbeb',
          '100': '#fff4c6',
          '200': '#ffe788',
          '300': '#ffd859',
          '400': '#ffc120',
          '500': '#f99f07',
          '600': '#dd7702',
          '700': '#b75306',
          '800': '#943f0c',
          '900': '#7a350d',
          '950': '#461a02',
        },
      }
    },
  },
  plugins: [],
}