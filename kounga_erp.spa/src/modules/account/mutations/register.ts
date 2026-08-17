import { accountApi } from '../accountApi'
import { ref } from 'vue'
import { RegisterModel } from '../viewModels/RegisterModel'
import { useBaseMutation } from '@/composables/mutation'

const model = ref(new RegisterModel())

const proc: () => Promise<void> = async () => {
  await accountApi.register(model.value.values)
}

export const useRegister = useBaseMutation(model, proc)
