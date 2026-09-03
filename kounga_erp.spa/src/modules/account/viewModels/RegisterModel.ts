import { isValidEmail } from '@/helpers/utils'
import type { Field } from '@/types/view/Field'
import { ViewModelBase } from '@/types/view/ViewModel'

export class RegisterModel extends ViewModelBase {
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
  ConfirmPassword: Field = { value: '', rules: [] }
  DateOfBirth: Field = { value: '', rules: [(v: unknown) => !!v || 'Date of birth is required'] }
}
