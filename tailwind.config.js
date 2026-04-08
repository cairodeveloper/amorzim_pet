/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbfa',
          100: '#d2f3f0',
          200: '#a8e7e2',
          300: '#7ad9d2',
          400: '#43c8c0',
          500: '#1bb3ac',
          600: '#148f89',
          700: '#0f6f6b',
          800: '#0d5755',
          900: '#0b4442',
          950: '#072f2e',
        },
        sand: '#33c7bf',
        peach: '#fff1f7',
        aqua: '#43b2ab',
        pink: '#ed1d7f',
        sunshine: '#febf00',
        lavender: '#9270ba',
      },
      boxShadow: {
        soft: '0 24px 70px -30px rgba(7, 47, 46, 0.18)',
        glow: '0 22px 48px -26px rgba(27, 179, 172, 0.38)',
        warm: '0 22px 48px -26px rgba(254, 191, 0, 0.3)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(254, 191, 0, 0.22), transparent 22%), radial-gradient(circle at 85% 15%, rgba(237, 29, 127, 0.14), transparent 20%), radial-gradient(circle at 75% 70%, rgba(7, 47, 46, 0.18), transparent 22%), linear-gradient(135deg, #18afa8 0%, #129f98 48%, #1cb6ae 100%)',
        'soft-grid':
          'linear-gradient(rgba(15, 111, 107, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 111, 107, 0.08) 1px, transparent 1px)',
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
