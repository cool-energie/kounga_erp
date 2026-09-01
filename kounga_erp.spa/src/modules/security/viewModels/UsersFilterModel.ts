import { isValidEmail } from '@/helpers/utils'
import { Filter } from '@/types/data/Filter'
import { FiltersModel } from '@/types/view/ViewModel'

export class UsersFiltersModel extends FiltersModel {
  FirstName: Filter
  LastName: Filter
  UserName: Filter
  CreatedAt: Filter

  constructor() {
    super()
    this.init()
  }

  init() {
    this.FirstName = new Filter('firstName', 'like', undefined, [])
    this.LastName = new Filter('lastName', 'like', undefined, [])
    this.UserName = new Filter('userName', 'like', undefined, [
      (v: unknown) => !v || isValidEmail(String(v)) || 'Invalid email format',
    ])
    this.CreatedAt = new Filter('createdAt', 'bw', undefined, [])
  }
}
