import { isValidEmail } from '@/helpers/utils'
import { Filter, type FilterDataType } from '@/types/data/Filter'
import type { FiltersModel, ViewModelValues } from '@/types/view/ViewModel'

export class UsersFiltersModelValues implements ViewModelValues {
  FirstName: FilterDataType | undefined
  LastName: FilterDataType | undefined
  UserName: FilterDataType | undefined
  CreatedAt: FilterDataType | undefined

  constructor() {
    this.FirstName = undefined
    this.LastName = undefined
    this.UserName = undefined
    this.CreatedAt = undefined
  }
}

export class UsersFiltersModel implements FiltersModel {
  FirstName: Filter
  LastName: Filter
  UserName: Filter
  CreatedAt: Filter

  constructor() {
    this.init()
  }

  // CreatedAt: Field = { value: '', rules: }

  get values(): UsersFiltersModelValues {
    return {
      FirstName: this.FirstName.value,
      LastName: this.LastName.value,
      UserName: this.UserName.value,
      CreatedAt: this.CreatedAt.value,
    }
  }

  get filters(): Array<Filter> {
    return [this.FirstName, this.LastName, this.UserName, this.CreatedAt]
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
