import type { Mutation } from '@/types/Mutation'
import { computed, watch, type Ref, type TemplateRef } from 'vue'

export function useFormProcessing(
  form: TemplateRef<HTMLFormElement>,
  mutation: Mutation,
  emit: any,
) {
  const validateForm = async () => {
    console.log('Validating form...')
    console.log(form.value)
    if (!form.value) return false
    await form.value.validate()
    return form.value.isValid
  }

  async function process() {
    if (await validateForm()) {
      await mutation.mutate()
    }
  }

  const loading = computed(() => mutation.asyncStatus.value === 'loading')
  const hasErrors = computed(() => mutation.status.value === 'error')

  watch(mutation.status, (value) => {
    if (value === 'success') {
      emit('success')
    }
  })

  return { process, model: mutation.model, loading, hasErrors }
}
