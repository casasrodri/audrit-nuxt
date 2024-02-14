// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-primevue',
    [
      '@nuxtjs/google-fonts', {
        families: {
          'Work+Sans': true,
          Sora: true,
          Inter: true,
          Rubik: true,
          Lato: true
        }
      }
    ],
    'nuxt-icon',
  ],
  ssr: false,
  experimental: {
    viewTransition: true
  },
  alias: {
    "@": fileURLToPath(new URL('./', import.meta.url)),
  },
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: [
        'Button',
        'Dropdown'
      ]
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
  },
  css: [
    './assets/css/tailwind.css',
    'primevue/resources/primevue.min.css',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "last" }],
    configPath: 'tailwind.config',
  }
})
