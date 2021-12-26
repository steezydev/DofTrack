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
      'green-hover': '#79dc8f',
      'red': '#DB5E5E',
      'red-hover': '#dc7676',
      'blue': '#5EA6DB',
    },
    fontFamily: {
      sans: ['Pally-Variable', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out': 'fade-out 0.3s linear',
        'fade-in': 'fade-in 0.3s linear'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
