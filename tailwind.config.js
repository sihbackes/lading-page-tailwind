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
        'theme': "url('https://cdn.pixabay.com/photo/2017/10/30/16/38/music-2902891_960_720.jpg')",
        'theme-mobile': "url('https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
      }),
    },
  },
  plugins: [],
}
