/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container : {
      center : true,
      padding: '3rem',
    },
    extend: {
      colors: {
        primary : 'hsl(26, 100%, 55%)',
        secondary : 'hsl(25, 100%, 94%)',
        veryDarkBlue : 'hsl(220, 13%, 13%)',
        darkGrayishBlue : 'hsl(219, 9%, 45%)',
        lightGrayishBlue : 'hsl(223, 64%, 98%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

