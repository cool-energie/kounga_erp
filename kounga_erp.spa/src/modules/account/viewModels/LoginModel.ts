import type { Field } from '@/types/view/Field'
import { ViewModelBase } from '@/types/view/ViewModel'

export class LoginModel extends ViewModelBase {
  Email: Field = { value: '', rules: [(v: unknown) => !!v || 'Email is required'] }
  Password: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }
}
