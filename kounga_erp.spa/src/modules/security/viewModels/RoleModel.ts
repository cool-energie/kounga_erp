import type { Field } from '@/types/view/Field'
import { ViewModelBase } from '@/types/view/ViewModel'

export class RoleModel extends ViewModelBase {
  id: Field = { value: undefined, rules: [] }
  name: Field = { value: '', rules: [(v: unknown) => !!v || 'Name is required'] }
  description: Field = { value: '', rules: [] }
  isActive: Field = { value: false, rules: [] }
}
