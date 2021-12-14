module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#FFFFFF',
      'back': '#EEEEEE',
      'black': '#1E1E1E',
      'grey-light': '#898989',
      'grey-darker': '#6B6B6B',
      'grey-dark': '#414141',
      'green': '#5EDB79',
      'red': '#DB5E5E',
      'blue': '#5EA6DB',
    },
    fontFamily: {
      sans: ['Pally-Variable', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
