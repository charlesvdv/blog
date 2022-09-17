const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#FF6464',
        secondary: 'rgba(143,177,204,.2)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            a: {
              color: theme('colors.primary'),
            }
          }
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};