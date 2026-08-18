import { defineMutation, useMutation } from '@pinia/colada'
import { accountApi } from '../accountApi'
import { ref } from 'vue'
import { ResendConfirmEmailModel } from '../viewModels/ResendConfirmEmailModel'
import { useRootStore } from '@/stores/rootStore'

const model = ref(new ResendConfirmEmailModel())

export const useResendConfirmEmail = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void>({
    mutation: async () => {
      await accountApi.resendConfirmEmail(model.value.values)
      const { showNoticeViewMessage } = useRootStore()
      showNoticeViewMessage('The confirmation link has been resent.')
    },
  })

  return {
    ...mutation,
    mutate,
    model,
  }
})
