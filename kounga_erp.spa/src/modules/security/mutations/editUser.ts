import { ref } from 'vue'
import { useBaseMutation } from '@/composables/mutation'
import { UserModel } from '@/modules/security/viewModels/UserModel'
import { usersApi } from '@/modules/security/api/usersApi'

const model = ref(new UserModel())

const proc: () => Promise<void> = async () => {
  await usersApi.edit(model.value.values)
}

export const useEditUser = useBaseMutation(model, proc)
