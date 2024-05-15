export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseImageURL: process.env.BASE_IMG_URL,
    },
  },
})
