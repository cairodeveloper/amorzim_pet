/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfdfb',
          100: '#d3f7f3',
          200: '#a9eee7',
          300: '#74ddd5',
          400: '#3bc4be',
          500: '#1ca7a1',
          600: '#14867f',
          700: '#126c67',
          800: '#135754',
          900: '#134847',
          950: '#082d2d',
        },
        sand: '#f8f6f2',
        peach: '#fff1ea',
      },
      boxShadow: {
        soft: '0 20px 60px -24px rgba(8, 45, 45, 0.28)',
        glow: '0 18px 40px -24px rgba(28, 167, 161, 0.45)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(116, 221, 213, 0.35), transparent 35%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.9), transparent 30%), linear-gradient(135deg, #f5fffd 0%, #edfdfb 48%, #ffffff 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '.88' },
        },
      },
    },
  },
  plugins: [],
}
