import { ref } from 'vue'
import { useBaseMutation } from '@/composables/mutation'
import { rolesApi } from '../api/rolesApi'

const model = ref({ id: undefined })

const proc: () => Promise<void> = async () => {
  await rolesApi.delete(model.value.id)
}

export const useDeleteRole = useBaseMutation(model, proc)
