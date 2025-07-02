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
  <div class="d-flex justify-center align-center h-screen">
    <div :style="{ width: '500px', height: '50%' }" class="pa-6 d-flex flex-column align-center justify-center">
      <v-img src="/logo.png" contain class="d-flex justify-center align-center w-50 mb-4"></v-img>
      <v-card-title class="text-h6 font-weight-bold text-start w-100">ログイン</v-card-title>

      <v-divider inset></v-divider>

      <v-text-field v-model="email"  label="メールアドレス" variant="solo" class="w-100"></v-text-field>
      <div class="d-flex flex-column w-100 justify-start">
        <v-text-field v-model="password"  label="パスワード" variant="solo" type="password" class="w-100"></v-text-field>
        <p v-if="errorMsg" class="text-red">{{ errorMsg }}</p>
      </div>
      
      <div class="d-flex justify-end w-100">
        <NuxtLink to="/reset" class="text-body2 text-grey-darken-1 hover:text-info">パスワードリセット</NuxtLink>
      </div>
      <div class="d-flex justify-space-between w-100 mt-2 text-center">
        <v-btn rounded-lg to="/signup" class="w-33 bg-yellow-darken-1 text-white text-h6">
          会員登録
        </v-btn> 
        <v-btn rounded-lg   @click="onSubmit" class="w-33 bg-yellow-darken-3 text-white text-h6" >ログイン</v-btn>
      </div>
    </div>
  </div>
</template>