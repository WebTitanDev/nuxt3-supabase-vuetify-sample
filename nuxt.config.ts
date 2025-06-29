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
      supabaseUrl: 'https://YOUR_SUPABASE_URL',
      supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
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