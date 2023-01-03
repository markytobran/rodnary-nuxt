module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color-200': '#2e4829',
        'primary-color-600': '#1a2c21',
        'primary-color-800': '#132118',
        'average-pink': '#EB9176',
        'secondary-color': '#CF6D00',
        'icon-grey': '#424242',
      },
      width: {
        84: '22rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}
