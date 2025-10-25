/*****************
 * Tailwind Config
 *****************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#bce2ff',
          300: '#8fd1ff',
          400: '#5ab8ff',
          500: '#2a9aff',
          600: '#0e7fe6',
          700: '#0864b4',
          800: '#0a4f8c',
          900: '#0d426f',
        },
        night: '#0b1220',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      dropShadow: {
        glow: '0 0 30px rgba(42,154,255,0.45)',
      },
    },
  },
  plugins: [],
};
