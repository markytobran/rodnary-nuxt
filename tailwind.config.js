module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#182B12',
        'primary-color-light': '#566B34',
        'average-pink': '#EB9176',
        'primary-color-middle': '#263322',
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
