/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-gradient-from': '#c9d0e3',
        'custom-gradient-to': '#9aa4bd',
      },
      gradientColorStops: (theme) => ({
        'custom-gradient': `120deg, ${theme('colors.custom-gradient-from')} 0%, ${theme('colors.custom-gradient-from')} 50%, ${theme('colors.custom-gradient-to')} 50%, ${theme('colors.custom-gradient-to')} 100%`,
      }),
    },
  },
  plugins: [],
}

/* .gradient-background {
  background: linear-gradient(120deg, #c9d0e3 0%, #c9d0e3 50%, #9aa4bd 50%, #9aa4bd 100%);
} */