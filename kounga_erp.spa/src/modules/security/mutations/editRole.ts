import { ref } from 'vue'
import { useBaseMutation } from '@/composables/mutation'
import { RoleModel } from '@/modules/security/viewModels/RoleModel'
import { rolesApi } from '@/modules/security/api/rolesApi'

const model = ref(new RoleModel())

const proc: () => Promise<void> = async () => {
  if (model.value.values.id === undefined) {
    await rolesApi.create(model.value.values)
  } else {
    await rolesApi.edit(model.value.values)
  }
}

export const useEditRole = useBaseMutation(model, proc)
