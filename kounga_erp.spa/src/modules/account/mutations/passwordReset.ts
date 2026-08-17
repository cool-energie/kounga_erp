import { defineMutation, useMutation } from '@pinia/colada'
import { accountApi } from '../accountApi'
import { ref } from 'vue'
import { PasswordResetModel } from '../viewModels/PasswordResetModel'

const model = ref(new PasswordResetModel())

export const useResetPassword = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void>({
    mutation: async () => {
      await accountApi.resetPassword(model.value.values)
    },
  })

  return {
    ...mutation,
    mutate,
    model,
  }
})
