export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  },

  runtimeConfig: {
    public: {
      supabaseUrl: 'https://YOUR_SUPABASE_URL',
      supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
    }
  },
  image: {
    // optional config, for example:
    domains: ['example.com'],  // allowed external image domains
    provider: 'ipx',          // default built-in image optimizer
  },
  compatibilityDate: '2025-06-29',

  modules: ['@nuxt/image']
})