const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.25rem'] /* font-size: 12px; line-height: 20px */,
      sm: ['0.875rem', '1.375rem'] /* font-size: 14px; line-height: 22px */,
      base: ['1rem', '1.5rem'] /* font-size: 16px; line-height: 24px */,
      lg: ['1.125rem', '1.5rem'] /* font-size: 18px; line-height: 24px */,
      xl: ['1.25rem', '1.75rem'] /* font-size: 20px; line-height: 28px */,
      '2xl': ['1.5rem', '2rem'] /* font-size: 24px; line-height: 32px */,
      '2.25xl': ['1.625rem', '2rem'] /* font-size: 26px; line-height: 32px */,
      '2.5xl': ['1.75rem', '2rem'] /* font-size: 28px; line-height: 32px */,
      '3xl': ['2rem', '2.5rem'] /* font-size: 32px; line-height: 40px */,
      '5xl': ['3rem', '3.5rem'] /* font-size: 48px; line-height: 56px */,
      '7xl': ['4.5rem', '5rem'] /* font-size: 72px; line-height: 80px */,
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        Belleza: ['Belleza', ...defaultTheme.fontFamily.sans],
        ValentineVibes: ['ValentineVibes', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
}
