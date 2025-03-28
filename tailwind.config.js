/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          light: 'rgba(var(--color-primary), 0.1)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          light: 'rgba(var(--color-secondary), 0.1)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))',
          light: 'rgba(var(--color-accent), 0.1)',
        },
        dark: {
          DEFAULT: 'rgb(var(--color-dark))',
          light: 'rgba(var(--color-dark), 0.9)',
          lighter: 'rgba(var(--color-dark), 0.8)',
        },
      },
      maxWidth: {
        'screen-2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};