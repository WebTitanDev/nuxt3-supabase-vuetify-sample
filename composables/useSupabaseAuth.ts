import type { User } from '@supabase/supabase-js'

export const useSupabaseAuth = () => {
    const { $supabase } = useNuxtApp()
    const user = useState<User | null>('user', () => null)
  
    const login = async (email: string, password: string) => {
      const { data, error } = await $supabase.auth.signInWithPassword({ email, password })
      if (!error) user.value = data.user
      return { data, error }
    }
  
    const signup = async (email: string, password: string) => {
      const { data, error } = await $supabase.auth.signUp({ email, password })
      if (!error) user.value = data.user
      return { data, error }
    }
  
    const logout = async () => {
      await $supabase.auth.signOut()
      user.value = null
    }
  
    const fetchUser = async () => {
      const { data } = await $supabase.auth.getUser()
      user.value = data.user ?? null
    }
  
    return { user, login, signup, logout, fetchUser }
  }