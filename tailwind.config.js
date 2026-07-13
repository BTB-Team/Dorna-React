// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00514b',
        secondary: '#5C5C5C',
        accent: '#FDBF0F',
        black: '#000000',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(#00514B, #00B7A9)',
        'border-gradient': 'linear-gradient(#ffffff88, #99999900)',
        'bg-gradient-custom': 'linear-gradient(#ffffff39)',
        'hover-gradient': 'linear-gradient(#00514B, #00B7A9)',
        'hover-gradient-white': 'linear-gradient(#ffffffa2, #99999934)',
      },
      fontFamily: {
        display: ['Montserrat-extraBold', 'sans-serif'],
        heading: ['Montserrat-semiBold', 'sans-serif'],
        title: ['Montserrat-bold', 'sans-serif'],
      },
      fontSize: {
        'display':'64px',
        'heading': '40px',
        'title': '32px',
        'subtitle': '24px',
      },
      lineHeight: {
        'normal-custom': '100%',
      },
      letterSpacing: {
        'normal-custom': '0%',
      },
      spacing: {
        'sm-custom': '8px',
        'md-custom': '16px',
        'lg-custom': '32px',
      },
      borderRadius: {
        'sm-custom': '4px',
        'md-custom': '8px',
        'lg-custom': '17px',
      },
      maxWidth: {
        'site': '1440px',
      }
    },
  },
  plugins: [],
}
