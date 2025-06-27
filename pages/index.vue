<template>
  <v-container>
    <v-btn @click="signInWithGithub">Sign in with GitHub</v-btn>
    <div v-if="user">Welcome, {{ user.email }}</div>
  </v-container>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()
const user = ref(null)

onMounted(async () => {
  const {
    data: { user: currentUser },
  } = await $supabase.auth.getUser()
  user.value = currentUser
})

const signInWithGithub = async () => {
  await $supabase.auth.signInWithOAuth({ provider: 'github' })
}
</script>
