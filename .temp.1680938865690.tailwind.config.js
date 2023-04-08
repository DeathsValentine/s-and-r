/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
'./src/**/*.astro'],

daisyui: {
  themes: [{
    custom: {
      ...require
    }
  }
  ],
},

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}