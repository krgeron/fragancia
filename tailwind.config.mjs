import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black scale — primary surfaces
        ink: {
          50:  '#F5F5F4',
          100: '#E7E5E2',
          200: '#C9C6C0',
          300: '#9A958C',
          400: '#6B6760',
          500: '#454239',
          600: '#2E2C28',
          700: '#211F1C',
          800: '#161513',
          900: '#0B0A09',
        },
        // Brand gold (from the crest)
        gold: {
          50:  '#FBF6EA',
          100: '#F5E9C9',
          200: '#EBD49B',
          300: '#DFC074',
          400: '#CFA84A',
          500: '#C9A227',
          600: '#A8841C',
          700: '#856617',
          800: '#5E4810',
          900: '#3D2F0A',
        },
        // Off-white / cream text
        cream: {
          50:  '#FDFCFA',
          100: '#F8F5EF',
          200: '#EFE9DE',
          300: '#E0D8C7',
        },
        // Barber-pole accents
        pole: {
          red:  '#B23A3A',
          teal: '#2E8C8C',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.08', letterSpacing: '0.01em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.1' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.3' }],
      },
      spacing: {
        'section-sm': '4rem',
        'section':    '6rem',
        'section-lg': '8rem',
        'section-xl': '10rem',
      },
      maxWidth: {
        'content': '1280px',
        'prose-wide': '75ch',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom, rgba(11,10,9,0.55) 0%, rgba(11,10,9,0.35) 40%, rgba(11,10,9,0.85) 100%)',
      },
      boxShadow: {
        'card':       '0 4px 24px rgba(0,0,0,0.35)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.55)',
        'button':     '0 2px 12px rgba(201,162,39,0.35)',
      },
      animation: {
        'fade-in':  'fadeIn 0.7s ease-out both',
        'slide-up': 'slideUp 0.7s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typography,
    aspectRatio,
  ],
};
