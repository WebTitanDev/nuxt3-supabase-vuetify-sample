<script setup lang="ts">
    import { onPrehydrate } from '#app'
    import { useWindowSize } from '@vueuse/core'
    
    onPrehydrate(() => {
      // `window` is not available yet, so don't call useWindowSize here directly
      if (typeof window !== 'undefined') {
        const { width, height } = useWindowSize()
        console.log('Window size during prehydrate:', width.value, height.value)
      } else {
        console.log('window is not defined during prehydrate (SSR phase)')
      }
    })
    
    onPrehydrate((el) => {
      if (el) {
        console.log(el.outerHTML)
      }
    })
    </script>
    
    <template>
      <div>
        Hi there
      </div>
    </template>
    