import { ref } from 'vue'
import { useBaseMutation } from '@/composables/mutation'
import { usersApi } from '@/modules/security/api/usersApi'

const model = ref({ id: undefined })

const proc: () => Promise<void> = async () => {
  await usersApi.delete(model.value.id)
}

export const useDeleteUser = useBaseMutation(model, proc)
