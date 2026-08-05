import { defineMutation, useMutation } from '@pinia/colada'
import { accountApi } from '../accountApi'
import { ref } from 'vue'
import { RegisterModel } from '../viewModels/RegisterModel'
import type { Mutation } from '@/types/Mutation'

const model = ref(new RegisterModel())

export const useRegister = defineMutation((): Mutation => {
  const { mutate, ...mutation } = useMutation({
    mutation: async () => {
      const data = await accountApi.register(model.value.values)
    },
  })

  return {
    ...mutation,
    mutate,
    model,
  }
})
