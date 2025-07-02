<script setup lang="ts">
    definePageMeta({
        layout: 'auth'
    })
    import { ref } from 'vue'

    const showPassword = ref(false)
    const { login } = useSupabaseAuth()
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const errorMsg = ref('')

    const onSubmit = async () => {
        const { error } = await login(email.value, password.value)
        if (error) {
            errorMsg.value = error.message
        } else {
            navigateTo('/')
        }
    }
    const loginRD = async () => {
        navigateTo('/login')
    }
</script>

<template>
    <div class="d-flex justify-center align-center h-screen">
        <div :style="{ width: '500px', height: '50%' }" class="pa-6 d-flex flex-column align-center justify-center">
            <v-img src="/logo.png" contain class="d-flex justify-center align-center w-50 mb-4"></v-img>
            <v-card-title class="text-h6 font-weight-bold text-start w-100">会員登録</v-card-title>

            <v-divider inset></v-divider>

            <v-text-field v-model="email" label="メールアドレス" variant="solo" class="w-100"></v-text-field>
            <div class="d-flex w-100 justify-start ga-5">
                <v-text-field v-model="password" :type="showPassword ? 'text' : 'password'" label="Password" variant="solo" 
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword"></v-text-field>
                <v-text-field v-model="confirmPassword" :type="showPassword ? 'text' : 'password'" label="Confirm Password" variant="solo" 
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword"></v-text-field>
                <!-- <p v-if="errorMsg" class="text-red">{{ errorMsg }}</p> -->
            </div>
            <div class="d-flex justify-space-between w-100 mt-2 text-center">
                <v-btn rounded-lg @click="loginRD" class="w-33 bg-yellow-darken-1 text-white text-h6">ログイン</v-btn>
                <v-btn rounded-lg @click="onSubmit" class="w-33 bg-yellow-darken-3 text-white text-h6">
                    会員登録
                </v-btn>
            </div>
        </div>
    </div>
</template>