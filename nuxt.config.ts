import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },
  css: ['vuetify/styles'],
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  compatibilityDate: '2025-06-29',
  image: {
    domains: ['example.com'],  
    provider: 'ipx',        
  },
  runtimeConfig: {
    public: {
      supabaseUrl: 'https://pseczpbkxkmorihcnqwm.supabase.co',
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZWN6cGJreGttb3JpaGNucXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNjM1MjEsImV4cCI6MjA2NjgzOTUyMX0.fgbXy275eA9AiF7dRI71opibCv1Jkl8ftWZCcKLxV9Y'
    }
  },
 
  modules: [
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})