/** @type {import('tailwindcss').Config} */

/* importing tailwind module */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        roboto_mono: ['Roboto Mono', 'sans-serif'],
        space_mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin'),
    require('daisyui'),
  ],
});
