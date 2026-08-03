import { defineMutation, useMutation } from '@pinia/colada'
import { authApi } from '../authApi'
import { ref } from 'vue'
import { setBearerToken } from '@/helpers/functions'

export const useLogin = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void, { email: string; password: string }>({
    mutation: async ({ email, password }) => {
      const data = await authApi.login(email, password)
      setBearerToken(data.accessToken, data.refreshToken)
    },
  })

  return {
    ...mutation,
    login: mutate,
  }
})
