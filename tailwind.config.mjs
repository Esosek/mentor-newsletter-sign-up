/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        'gray-dark': 'hsl(235, 18%, 26%)',
        gray: 'hsl(231, 7%, 60%)',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
};
