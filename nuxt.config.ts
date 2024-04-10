// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  vue: {
    propsDestructure: true
  },
  alias: {
    '@': resolve(__dirname, "./src/")
  }
})
