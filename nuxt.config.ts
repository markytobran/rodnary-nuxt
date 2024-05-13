export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  plugins: [
    '~/plugins/analytics.ts',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseImageURL: process.env.BASE_IMG_URL,
    },
  },
  ignore: ['pages/catch-register/**/*'],
})
