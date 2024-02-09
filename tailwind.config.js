const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
        '2xl': '1172px',
        'max-md': { raw: '(max-width: 991px)' },
        'max-sm': { raw: '(max-width: 767px)' },
      },
      colors: {
        primary: '#11CB8E',
        primaryHover: '#096d4c',
        gray: '#8B8B8B ',
        body: '#212121',
      },
      backgroundImage: {
        primaryGradient:
          'linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)',
        secondaryGradient:
          'linear-gradient(269.24deg, #4229EF -27.48%, #2BB8E4 112.24%)',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.33' }], // 12 - 16
        sm: ['0.875rem', { lineHeight: '1.5' }], // 14 -21
        base: ['1rem', { lineHeight: '1.625' }], // 16 - 26
        lg: ['1.125rem', { lineHeight: '1.55' }], // 18-28
        xl: ['1.25rem', { lineHeight: '1.4' }], // 20 -28
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '2xl': ['1.75rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.2' }],
        '8xl': ['6rem', { lineHeight: '1.2' }],
        '9xl': ['8rem', { lineHeight: '1.2' }],
        '10xl': ['8.75rem', { lineHeight: '1.2' }],
      },
      keyframes: {
        fadeInDown: {
          from: { opacity: '0', transform: 'translate3d(0, 10px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        toRightFromLeft: {
          '49%': { transform: 'translateX(8px)' },
          '50%': { transform: 'translateX(-8px)', opacity: '0' },
          '51%': { transform: 'translateX(8px)', opacity: '1' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 400ms',
        toRightFromLeft: 'toRightFromLeft 0.5s forwards',
      },
    },
  },
  // plugins: [],
  plugins: [require('@tailwindcss/typography')],
};
