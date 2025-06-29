<template>
  <NuxtRouteAnnouncer>
    <template #default="{ message }">
      <p>{{ message }} was loaded.</p>
    </template>
  </NuxtRouteAnnouncer>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <template>
      <header>My Site</header>
      <NuxtPage />
      <footer>© 2025</footer>
    </template>
  </NuxtLayout>
</template>