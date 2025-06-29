<script setup>
  const route = useRoute()
  const postId = route.params.id
  const isLoading = ref(true)
  
  // Simulate async loading
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  })
  </script>
  
  <template>
    <div v-if="isLoading">Loading post...</div>
    <div v-else>Post ID: {{ postId }}</div>
  </template>
  