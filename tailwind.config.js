/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        'bg': '#212121',
        'text-color': 'rgb(178, 194, 81)',
        'box-color': 'rgb(51, 51, 51)',
        'p-color': 'rgb(117, 117, 117)',
        'btn-color': 'rgb(119, 128, 64)',
      },
    },
  },

  plugins: ['tailwind-hamburgers'],
}

