/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all relevant file types
    "./public/index.html",              // Include any main HTML entry points
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontWeight: {
        'extra-light': 200,
        'extra-bold': 800,
      },
      spacing: {
        '180':'180px'
      },
      width: {
          '350':'350px'
      },
      colors: {
        customPink: '#fde1ff',
        customGreen: '#e1ffea22', // Note: This is a semi-transparent color
      }
    },
  },
  plugins: [],
}
