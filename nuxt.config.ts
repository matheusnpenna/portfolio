// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  css: ['./assets/css/app.css', './assets/scss/app.scss'],
  vue: {
    propsDestructure: true
  },
  alias: {
    '@': resolve(__dirname, "./src/")
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
