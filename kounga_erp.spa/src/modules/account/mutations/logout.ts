import { defineMutation, useMutation } from '@pinia/colada'
import { authApi } from '../authApi'
import { removeBearerToken } from '@/helpers/functions'

export const useLogout = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void>({
    mutation: async () => {
      const data = await authApi.logout()
      removeBearerToken()
    },
  })

  return {
    ...mutation,
    logout: () => mutate(),
  }
})
