import type { Field } from '@/types/view/Field'
import { ViewModelBase } from '@/types/view/ViewModel'

export class ResetPasswordRequestModel extends ViewModelBase {
  Email: Field = { value: '', rules: [(v: unknown) => !!v || 'Email is required'] }
}
