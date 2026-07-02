/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F5F6',
        carbon: '#222222',
        'accent-teal': '#0F9B8E',
        'accent-indigo': '#3730A3',
      },
      borderRadius: {
        bento: '16px',
      },
      letterSpacing: {
        editorial: '0.08em',
        metadata: '0.12em',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #0F9B8E 0%, #3730A3 100%)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
