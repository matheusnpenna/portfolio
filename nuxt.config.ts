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

  content: {
    experimental: {
      nativeSqlite: true
    }
  },

  runtimeConfig: {
    MAIL_SMTP: process.env.MAIL_SMTP || 'smtp.ethereal.email',
    MAIL_SECURE: process.env.MAIL_SECURE,
    MAIL_PORT: process.env.MAIL_PORT || '465',
    MAIL_USER: process.env.MAIL_USER || 'maddison53@ethereal.email',
    MAIL_PASS: process.env.MAIL_PASS || 'jn7jnAPss4f63QBp6D',
    public: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID
    }
  },

  srcDir: 'src/',
  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    experimental: {
      openAPI: true
    },
    openAPI: {
      meta: {
        title: 'Portfólio - Documentação da API',
        description: 'Aqui você encontra a documentação da API do Portfólio.',
        version: '0.0.0'
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
