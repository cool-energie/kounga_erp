import type { Field } from '@/types/view/Field'
import { ViewModelBase } from '@/types/view/ViewModel'

export class PasswordResetModel extends ViewModelBase {
  Email: Field = { value: '', rules: [(v: unknown) => !!v || 'Email is required'] }
  ResetCode: Field = { value: '', rules: [(v: unknown) => !!v || 'Reset code is required'] }
  NewPassword: Field = { value: '', rules: [(v: unknown) => !!v || 'Password is required'] }
}
