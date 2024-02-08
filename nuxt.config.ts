// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", ['@nuxtjs/google-fonts', {
    families: {
      'Work+Sans': true,
      Sora: true,
      Inter: true,
      Rubik: true,
      Lato: true
    }
  }], 'nuxt-icon'],
  ssr: false,
  experimental: {
    viewTransition: true
  },
})
