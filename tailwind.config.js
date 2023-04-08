/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
'./src/**/*.astro'],

daisyui: {
  themes: [
      {
        custom: {
          ...require('daisyui/src/colors/themes')['data-theme=dark'],
          primary: "#d512b7",
          secondary: "#3a9ecb",
          accent: "#37cdbe",
          neutral: "#191d24",
          "base-100": "#161616",
          // "base-100": "#2d2d2d",
        },
      }
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}