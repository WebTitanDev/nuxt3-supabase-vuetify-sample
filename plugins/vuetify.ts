import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components/VBtn'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    aliases: {
      MyButton: VBtn,
    },
    defaults: {
      MyButton: {
        color: 'primary',
        variant: 'tonal',
      },
      VBtn: {
        color: 'secondary',
        variant: 'flat',
      },
      VCard: {
        MyButton: { color: 'secondary' },
        VBtn: { color: 'primary' },
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
