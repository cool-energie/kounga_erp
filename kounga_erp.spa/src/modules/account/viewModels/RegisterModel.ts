import { isValidEmail } from '@/helpers/utils'
import type { Field } from '@/types/view/Field'
import type { ViewModel, ViewModelValues } from '@/types/view/ViewModel'

export class RegisterModelValues implements ViewModelValues {
  FirstName: string
  LastName: string
  Email: string
  PhoneNumber: string
  Password: string
  ConfirmPassword: string
  DateOfBirth: string

  constructor() {
    this.FirstName = ''
    this.LastName = ''
    this.Email = ''
    this.PhoneNumber = ''
    this.Password = ''
    this.ConfirmPassword = ''
    this.DateOfBirth = ''
  }

  static create(values: Partial<RegisterModelValues>): RegisterModelValues {
    const model = new RegisterModelValues()
    Object.assign(model, values)
    return model
  }
}

export class RegisterModel implements ViewModel {
  FirstName: Field = { value: '', rules: [(v: unknown) => !!v || 'First name is required'] }
  LastName: Field = { value: '', rules: [] }
  Email: Field = {
    value: '',
    rules: [
      (v: unknown) => !!v || 'Email is required',
      (v: unknown) => isValidEmail(String(v)) || 'Invalid email format',
    ],
  }
  PhoneNumber: Field = { value: '', rules: [] }
  Password: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }
  ConfirmPassword: Field = {
    value: '',
    rules: [(v: unknown) => v == this.Password.value || 'Passwords do not match'],
  }
  DateOfBirth: Field = { value: '', rules: [(v: unknown) => !!v || 'Date of birth is required'] }

  get values(): RegisterModelValues {
    return RegisterModelValues.create({
      FirstName: this.FirstName.value,
      LastName: this.LastName.value,
      Email: this.Email.value,
      PhoneNumber: this.PhoneNumber.value,
      Password: this.Password.value,
      ConfirmPassword: this.ConfirmPassword.value,
      DateOfBirth: this.DateOfBirth.value,
    })
  }
}
