import type { Mutation } from '@/types/Mutation'
import { computed, watch, type Ref, type TemplateRef, defineEmits } from 'vue'

export function useFormProcessing(form: TemplateRef<HTMLFormElement>, mutation: Mutation) {
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

  const emit = defineEmits(['success', 'error', 'pending'])
  const loading = computed(() => mutation.asyncStatus.value === 'loading')
  const hasErrors = computed(() => mutation.status.value === 'error')

  watch(mutation.state, (value) => emit(value.status))

  return { process, model: mutation.model, loading, hasErrors }
}
