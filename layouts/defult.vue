<script setup lang="ts">
    const foo = () => console.log('foo')
    defineExpose({
      foo
    })
    </script>
    
    <template>
      <div>
        default layout
        <slot />
      </div>
    </template>