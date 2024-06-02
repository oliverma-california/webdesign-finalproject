/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero.png')",
        'about': "url('/about.jpg')",
        'smoke': "url('/smoke.jpg')",
        'earth': "url('/earth.png')",
        'us-flag': "url('/usflag.jpeg')",
        'how-you-can-help': "url('/howyoucanhelp.jpeg')",
        'resources': "url('/resources.jpeg')",
        'sources': "url('/sources.png')",
      }
    },
    fontFamily: {
      'titillium': ['Titillium Web', 'sans-serif'],
    }
  },

  plugins: []
};