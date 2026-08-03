import { isValidEmail } from '@/helpers/utils'
import type { Field } from '@/types/view/Field'

export default class RegisterModel {
  FirstName: Field = { value: '', rules: [(v: unknown) => !!v || 'First name is required'] }
  LastName: Field = { value: '', rules: [] }
  Email: Field = {
    value: '',
    rules: [
      (v: unknown) => !!v || 'Email is required',
      (v: unknown) => isValidEmail(v) || 'Invalid email format',
    ],
  }
  PhoneNumber: Field = { value: '', rules: [] }
  Password: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }
  ConfirmPassword: Field = {
    value: '',
    rules: [(v: unknown) => v == this.Password.value || 'Passwords do not match'],
  }
  DateOfBirth: Field = { value: '', rules: [(v: unknown) => !!v || 'Date of birth is required'] }

  get values() {
    return {
      FirstName: this.FirstName.value,
      LastName: this.LastName.value,
      Email: this.Email.value,
      PhoneNumber: this.PhoneNumber.value,
      Password: this.Password.value,
      DateOfBirth: this.DateOfBirth.value,
    }
  }
}
