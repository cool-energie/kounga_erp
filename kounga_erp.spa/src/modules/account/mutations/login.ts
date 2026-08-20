import { accountApi } from '../accountApi'
import { setBearerToken } from '@/helpers/functions'
import { ref } from 'vue'
import { LoginModel } from '../viewModels/LoginModel'
import { useBaseMutation } from '@/composables/mutation'

const model = ref(new LoginModel())
const proc: () => Promise<void> = async () => {
  const data = await accountApi.login(model.value.values)
  setBearerToken(data)
}

export const useLogin = useBaseMutation(model, proc)
