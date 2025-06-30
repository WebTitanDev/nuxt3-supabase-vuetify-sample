<script setup lang="ts">
    const { profile, fetchProfile } = useSupabaseAuth()

    onMounted(() => {
        fetchProfile()
    })
</script>

<template>
    <div v-if="profile">
        <h2>Welcome, {{ profile.username }}</h2>
        <p>Bio: {{ profile.bio }}</p>
    </div>
    <div v-else>
        <p>Loading profile...</p>
    </div>
</template>