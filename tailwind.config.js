module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#AAAAAA',
          500: '#313131',
          700: '#202020',
          800: '#181818',
          900: '#121212',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
