// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    './src/plugins/firebase.client'
  ],
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
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./src/stores/**']
  },
  runtimeConfig: {
    public: {
      FB_API_KEY: "AIzaSyA1TQKLvsWZ_SJeSmJ5v72qUYbIjUax8hk",
      FB_AUTH_DOMAIN: "penna-dev.firebaseapp.com",
      FB_PROJECT_ID: "penna-dev",
      FB_STORAGE_BUCKET: "penna-dev.appspot.com",
      FB_MESSAGING_SENDER_ID: "624512271304",
      FB_APP_ID: "1:624512271304:web:d6af421d5871cf2cf236fd",
      FB_MEASUREMENT_ID: "G-W02E9SPMEP"
    }
  },
  app: {
    head: {
      title: 'Matheus Penna - Desenvolvedor Frontend Senior',
      meta: [
        { name: 'description', content: 'Desenvolvedor frontend Senior com 10 anos de experiência. Sólidos conhecimentos em desenvolvimento web com Vue, React, Next e Nuxt, mobile com React Native, criação de sites e landing pages otimizados para PageSpeed e SEO e Frontend System Design. Conhecimento intermédiário em Django, Node e Laravel. Experiência em projetos de marketing digital e voluntário em projetos relevantes de empreendedorismo e causas sociais.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
})
