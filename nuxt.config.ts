export default defineNuxtConfig({
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  },
  runtimeConfig: {
    public: {
      supabaseUrl: 'https://YOUR_SUPABASE_URL',
      supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
    }
  }
})
