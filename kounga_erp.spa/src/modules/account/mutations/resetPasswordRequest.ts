import { defineMutation, useMutation } from '@pinia/colada'
import { accountApi } from '../accountApi'
import { ref } from 'vue'
import { ResetPasswordRequestModel } from '../viewModels/ResetPasswordRequestModel'
import { useRootStore } from '@/stores/rootStore'

const model = ref(new ResetPasswordRequestModel())

export const useResetPasswordRequest = defineMutation(() => {
  const { mutate, ...mutation } = useMutation<void>({
    mutation: async () => {
      await accountApi.sendResetPasswordRequest(model.value.values)
      const { showNoticeViewMessage } = useRootStore()
      showNoticeViewMessage('Please use the reset code that was sent to you by email.')
      showNoticeViewMessage(
        "If you haven't received an email, please check your spam folder or double-check that you entered your email address correctly.",
      )
    },
  })

  return {
    ...mutation,
    mutate,
    model,
  }
})
