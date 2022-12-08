/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        vddBlue: ' hsl(238, 29%, 16%)',
        softRed: 'hsl(14, 88%, 65%)',
        softViolet: 'hsl(273, 75%, 66%)',
        softBlue: 'hsl(240, 73%, 65%)',
        vdgBlue: 'hsl(237, 12%, 33%)',
        dgBlue: 'hsl(240, 6%, 50%)',
        lgBlue: 'hsl(240, 5%, 91%)',
      },
      fontFamily: {
        kumbhSans: ['Kumbh Sans'],
      },
    },
  },
  plugins: [],
};
