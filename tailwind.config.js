/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', '"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        iron: {
          black: '#000000',
          white: '#FFFFFF',
          gray: '#333333',
        },
      },
      letterSpacing: {
        brutal: '0.2em',
        ultrawide: '0.35em',
      },
    },
  },
  plugins: [],
};
