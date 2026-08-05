import { defineMutation, useMutation } from '@pinia/colada'
import { accountApi } from '../accountApi'
import { removeBearerToken } from '@/helpers/functions'

export const useLogout = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void>({
    mutation: async () => {
      const data = await accountApi.logout()
      removeBearerToken()
    },
  })

  return {
    ...mutation,
    logout: () => mutate(),
  }
})
