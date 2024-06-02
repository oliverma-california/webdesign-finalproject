/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/public/hero.png')",
        'about': "url('/src/public/about.jpg')",
        'smoke': "url('/src/public/smoke.jpg')",
        'earth': "url('/src/public/earth.png')",
        'us-flag': "url('/src/public/usflag.jpeg')",
        'how-you-can-help': "url('/src/public/howyoucanhelp.jpeg')",
        'resources': "url('/src/public/resources.jpeg')",
        'sources': "url('/src/public/sources.png')",
      }
    },
    fontFamily: {
      'titillium': ['Titillium Web', 'sans-serif'],
    }
  },

  plugins: []
};