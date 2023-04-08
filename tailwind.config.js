/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
'./src/**/*.astro'],

daisyui: {
  themes: [
      {
        custom: {
          ...require('daisyui/src/colors/themes')['data-theme=dark'],
          primary: "white",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#191d24",
          "base-100": "#161616",
        },
      }
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}