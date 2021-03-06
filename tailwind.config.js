module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#AAAAAA',
          500: '#313131',
          700: '#202020ee',
          800: '#181818',
          900: '#121212',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
    require('tailwindcss-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
