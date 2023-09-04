export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseImageURL: process.env.BASE_IMG_URL,
    },
  },
})
