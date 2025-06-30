export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, fetchUser } = useSupabaseAuth()
  
    if (!user.value) {
      await fetchUser()
    }
  
    if (!user.value && to.path !== '/login' && to.path !== '/signup') {
      return navigateTo('/login')
    }
  })
  