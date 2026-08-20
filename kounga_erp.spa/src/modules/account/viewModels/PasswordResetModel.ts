import type { Field } from '@/types/view/Field'
import type { ViewModel, ViewModelValues } from '@/types/view/ViewModel'

export class PasswordResetModelValues implements ViewModelValues {
  Email: string
  ResetCode: string
  NewPassword: string

  constructor() {
    this.Email = ''
    this.ResetCode = ''
    this.NewPassword = ''
  }
}

export class PasswordResetModel implements ViewModel {
  Email: Field = { value: '', rules: [(v: unknown) => !!v || 'Email is required'] }
  ResetCode: Field = { value: '', rules: [(v: unknown) => !!v || 'Reset code is required'] }
  NewPassword: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }

  get values(): PasswordResetModelValues {
    return {
      Email: this.Email.value,
      ResetCode: this.ResetCode.value,
      NewPassword: this.NewPassword.value,
    }
  }
}
