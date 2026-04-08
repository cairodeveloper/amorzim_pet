/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffaf0',
          100: '#fff1c8',
          200: '#ffe184',
          300: '#febf00',
          400: '#ed9f00',
          500: '#d48400',
          600: '#9270ba',
          700: '#73519b',
          800: '#5a3f80',
          900: '#35244f',
          950: '#231534',
        },
        sand: '#fffdf8',
        peach: '#fff1f7',
        aqua: '#43b2ab',
        pink: '#ed1d7f',
        sunshine: '#febf00',
        lavender: '#9270ba',
      },
      boxShadow: {
        soft: '0 24px 70px -30px rgba(53, 36, 79, 0.22)',
        glow: '0 22px 48px -26px rgba(146, 112, 186, 0.4)',
        warm: '0 22px 48px -26px rgba(254, 191, 0, 0.35)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(254, 191, 0, 0.24), transparent 34%), radial-gradient(circle at 85% 15%, rgba(146, 112, 186, 0.16), transparent 30%), radial-gradient(circle at 75% 70%, rgba(67, 178, 171, 0.18), transparent 26%), linear-gradient(135deg, #fffdf8 0%, #fff7ea 44%, #ffffff 100%)',
        'soft-grid':
          'linear-gradient(rgba(146, 112, 186, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(146, 112, 186, 0.06) 1px, transparent 1px)',
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
