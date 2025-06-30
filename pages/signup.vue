<script setup lang="ts">
    const email = ref('')
    const password = ref('')
    const username = ref('')
    const errorMsg = ref('')
    const { signup } = useSupabaseAuth()

    const onSignup = async () => {
        if (!email.value || !password.value || !username.value) {
            errorMsg.value = 'Please fill in all fields.'
            return
        }

        const { error } = await signup(email.value, password.value, username.value)
        if (error) {
            errorMsg.value = error.message
        } else {
            // If confirmation required, inform user
            errorMsg.value = 'Check your email to confirm your account.'
            // OR if no confirmation, navigate
            // navigateTo('/')
        }
    }

</script>

<template>
    <div>
        <h1>Sign Up</h1>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input v-model="username" placeholder="Username" />
        <button @click="onSignup">Sign Up</button>
        <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
</template>