import { useRootStore } from '@/stores/rootStore'
import { Exception } from '@/types/Exception'
import { defineMutation, useMutation } from '@pinia/colada'

export function useBaseMutation(model, proc: () => Promise<void>) {
  console.log('model')
  console.log(model.value)

  return defineMutation(() => {
    const { mutate, ...mutation } = useMutation<void>({
      mutation: proc,
      onError: (error) => {
        if (error instanceof Exception) {
          const { showSnackbar } = useRootStore()
          showSnackbar(error.message, error.icon, error.color)
        }
      },
    })

    return {
      ...mutation,
      mutate,
      model,
    }
  })
}
