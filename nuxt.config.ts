// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Adrian Shakespeare Company · Free Shakespeare in the park · Adrian, Michigan',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: 'https://kit.fontawesome.com/4cd6bdbf9b.js',
          crossorigin: 'anonymous',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.png'
        },
      ],
    },

    // Fix for GitHub pages; will not be needed with a custom domain name.
    cdnURL: 'https://pcrist.github.io/adrian-shakespeare/'
  },
})
