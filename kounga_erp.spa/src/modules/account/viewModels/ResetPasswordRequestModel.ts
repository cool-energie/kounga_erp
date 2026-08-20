import type { Field } from '@/types/view/Field'
import type { ViewModel, ViewModelValues } from '@/types/view/ViewModel'

export class ResetPasswordRequestModelValues implements ViewModelValues {
  Email: string

  constructor() {
    this.Email = ''
  }
}

export class ResetPasswordRequestModel implements ViewModel {
  Email: Field = { value: '', rules: [(v: unknown) => !!v || 'Email is required'] }

  get values(): ResetPasswordRequestModelValues {
    return {
      Email: this.Email.value,
    }
  }
}
