/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      backgroundImage: theme => ({
        'theme': "url('https://cdn.pixabay.com/photo/2022/07/31/04/42/seat-7354939_960_720.png')",
        'theme-mobile': "url('https://cdn.pixabay.com/photo/2015/09/13/20/32/checks-938700_960_720.jpg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
    },
  },
  plugins: [],
}
