import { isValidEmail } from '@/helpers/utils'
import type { Field } from '@/types/view/Field'
import { ViewModelBase } from '@/types/view/ViewModel'

export class UserModel extends ViewModelBase {
  id: Field = { value: undefined, rules: [] }
  firstName: Field = { value: '', rules: [(v: unknown) => !!v || 'First name is required'] }
  lastName: Field = { value: '', rules: [] }
  email: Field = {
    value: '',
    rules: [
      (v: unknown) => !!v || 'Email is required',
      (v: unknown) => isValidEmail(String(v)) || 'Invalid email format',
    ],
  }
  phoneNumber: Field = { value: '', rules: [] }
  password: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }
  confirmPassword: Field = {
    value: '',
    rules: [(v: unknown) => v == this.password.value || 'Passwords do not match'],
  }
  dateOfBirth: Field = { value: '', rules: [(v: unknown) => !!v || 'Date of birth is required'] }
  isActive: Field = { value: false, rules: [] }
}
