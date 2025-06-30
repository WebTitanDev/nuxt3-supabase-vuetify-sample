<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
  const { login } = useSupabaseAuth()
  const email = ref('')
  const password = ref('')
  const errorMsg = ref('')

  const onSubmit = async () => {
    const { error } = await login(email.value, password.value)
    if (error) {
      errorMsg.value = error.message
    } else {
      navigateTo('/')
    }
  }
</script>

<template>
  <div class="d-flex justify-center align-center " height="100%">
    <div width="300px" height="100vh" class="pa-6 d-flex flex-column justify-center">
      <v-img src="/logo.png" contain class="mb-4"></v-img>
      <v-card-title class="text-h6 font-weight-bold">ログイン</v-card-title>
      <v-text-field v-model="email" label="メールアドレス" outlined dense></v-text-field>
      <v-text-field v-model="password" label="パスワード" type="password" outlined dense></v-text-field>
      <v-btn block color="orange" class="mt-4" @click="onSubmit">ログイン</v-btn>
      <div class="mt-2 text-center">
        <NuxtLink to="/register">会員登録</NuxtLink> |
        <NuxtLink to="/reset">パスワードリセット</NuxtLink>
      </div>
    </div>
  </div>
  
</template>
