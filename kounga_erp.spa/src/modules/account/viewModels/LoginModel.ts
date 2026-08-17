import type { Field } from '@/types/view/Field'
import type { ViewModel, ViewModelValues } from '@/types/view/ViewModel'

export class LoginModelValues implements ViewModelValues {
  Email: string
  Password: string

  constructor() {
    this.Email = ''
    this.Password = ''
  }
}

export class LoginModel implements ViewModel {
  Email: Field = { value: '', rules: [(v: unknown) => !!v || 'Email is required'] }
  Password: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }

  get values(): LoginModelValues {
    return {
      Email: this.Email.value,
      Password: this.Password.value,
    }
  }
}
