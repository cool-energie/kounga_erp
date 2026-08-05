import { defineMutation, useMutation } from '@pinia/colada'
import { accountApi } from '../accountApi'
import { setBearerToken } from '@/helpers/functions'

export const useLogin = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void, { email: string; password: string }>({
    mutation: async ({ email, password }) => {
      const data = await accountApi.login(email, password)
      setBearerToken(data.accessToken, data.refreshToken)
    },
  })

  return {
    ...mutation,
    login: mutate,
  }
})
