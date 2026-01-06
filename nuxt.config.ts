// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    ['@nuxt/content', {
      experimental: { nativeSqlite: true },
      build: {
        markdown: {
          highlight: {
            langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml']
          }
        }
      }
    }],
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/image',
    ['@pinia/nuxt', {
      storesDirs: ['./src/stores/**']
    }],
    'motion-v/nuxt'
  ],

  plugins: ['./src/plugins/firebase.client'],

  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'Matheus Penna - Desenvolvedor de software',
      meta: [
        { name: 'description', content: 'Desenvolvedor de software com 10 anos de experiência. Sólidos conhecimentos em desenvolvimento web com Vue, React, Next e Nuxt, mobile com React Native, criação de sites e landing pages otimizados para PageSpeed e SEO e Frontend System Design. Conhecimento intermédiário em Django, Node e Laravel. Experiência em projetos de marketing digital e voluntário em projetos relevantes de empreendedorismo e causas sociais.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },

  css: ['./assets/css/app.css', './assets/scss/app.scss'],

  runtimeConfig: {
    MAIL_SMTP: process.env.MAIL_SMTP || 'smtp.ethereal.email',
    MAIL_SECURE: process.env.MAIL_SECURE,
    MAIL_PORT: process.env.MAIL_PORT || 465,
    MAIL_USER: process.env.MAIL_USER || 'maddison53@ethereal.email',
    MAIL_PASS: process.env.MAIL_PASS || 'jn7jnAPss4f63QBp6D',
    public: {
      FB_API_KEY: 'AIzaSyA1TQKLvsWZ_SJeSmJ5v72qUYbIjUax8hk',
      FB_AUTH_DOMAIN: 'penna-dev.firebaseapp.com',
      FB_PROJECT_ID: 'penna-dev',
      FB_STORAGE_BUCKET: 'penna-dev.appspot.com',
      FB_MESSAGING_SENDER_ID: '624512271304',
      FB_APP_ID: '1:624512271304:web:d6af421d5871cf2cf236fd',
      FB_MEASUREMENT_ID: 'G-W02E9SPMEP'
    }
  },

  srcDir: 'src/',
  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
